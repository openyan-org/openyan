package utils

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
)

func WriteJSON(w http.ResponseWriter, status int, data interface{}) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)

	return json.NewEncoder(w).Encode(data)
}

func ReadJSON(w http.ResponseWriter, r *http.Request, dst interface{}) error {
	const maxBytes = 1 << 20
	r.Body = http.MaxBytesReader(w, r.Body, maxBytes)

	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(dst); err != nil {
		var syntaxError *json.SyntaxError
		var unmarshalTypeError *json.UnmarshalTypeError

		switch {
		case errors.As(err, &syntaxError):
			return errors.New("malformed JSON")
		case errors.As(err, &unmarshalTypeError):
			return errors.New("wrong type provided for field " + unmarshalTypeError.Field)
		case errors.Is(err, io.EOF):
			return errors.New("empty JSON body")
		case err.Error() == "http: request body too large":
			return errors.New("request body too large")
		default:
			return err
		}
	}

	if decoder.More() {
		return errors.New("unexpected additional data in JSON")
	}
	return nil
}
