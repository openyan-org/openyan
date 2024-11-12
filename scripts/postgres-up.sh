#!/bin/bash

CONTAINER_NAME="openyan-postgres"

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  if [ "$(docker ps -q -f name=$CONTAINER_NAME -f status=exited)" ]; then
    echo "Starting existing container '$CONTAINER_NAME'..."
    docker start $CONTAINER_NAME
  else
    echo "Container '$CONTAINER_NAME' is already running."
  fi
else
  echo "Creating and starting a new container '$CONTAINER_NAME'..."
  docker compose up -d postgres
fi
