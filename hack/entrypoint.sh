#!/bin/sh
set -ex

#nginx

pm2-runtime start npm --name "lgs-frontend" -- run start:live
