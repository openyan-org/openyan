#!/bin/bash

CONTAINER_NAME="openyan-postgres"

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping container '$CONTAINER_NAME'..."
    docker stop $CONTAINER_NAME
  else
    echo "Container '$CONTAINER_NAME' is already stopped."
  fi
else
  echo "No container found with name '$CONTAINER_NAME'."
fi
