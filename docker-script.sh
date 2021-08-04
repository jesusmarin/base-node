#!/bin/sh

#Stop running container
docker stop $(docker ps -a -q  --filter ancestor=synchrox/servicio-reportes-auditoria)

# Build container
docker build -t synchrox/servicio-reportes-auditoria .

# Run container
docker run -p 5110:3110 -d synchrox/servicio-reportes-auditoria