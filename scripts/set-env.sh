#!/usr/bin/env bash

set -e # fail if any commands fails
set -x # debug log

ENV=$1

ROOT_DIR="${PWD}"
SECRETS_DIR="${ROOT_DIR}/secrets/${ENV}"

ENV_FILE=".env"

cp -f "${SECRETS_DIR}/${ENV_FILE}" "${ROOT_DIR}/${ENV_FILE}"

npm run rnuc "${ENV_FILE}"
npm run gradlew:clean
npm run pod:install

echo "Current environment is ${ENV}"
