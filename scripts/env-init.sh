#!/bin/bash

# This script is to be ran in the root working directory

WEB_ENV_PATH="web/.env.local"
API_ENV_PATH=".env"

cat <<EOF > $WEB_ENV_PATH
# OpenYan Web Client
# Environment Secrets

# --------------------------------------------------
# IMPORTANT
# The secrets for all undefined variables
# can be attained from Google Cloud Secrets Manager
# --------------------------------------------------

# === Auth.js ===
# Create a secure secret key using: \$ openssl rand -hex 32
AUTH_SECRET="my-secure-secret"

# === GitHub OAuth ===
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

# === Google OAuth ===
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
EOF

echo "Initialised template environments for the web client."

cat <<EOF > $API_ENV_PATH
# OpenYan API
# Environment Secrets

# --------------------------------------------------
# IMPORTANT
# The secrets for all undefined variables
# can be attained from Google Cloud Secrets Manager
# --------------------------------------------------

# === Postgres ===
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres?sslmode=disable
EOF

echo "Initialised template environments for the API."

echo -e "\nWeb Environment Secrets (web/.env.local):"
echo "1. AUTH_SECRET"
echo "2. AUTH_GITHUB_ID (Undefined)"
echo "3. AUTH_GITHUB_SECRET (Undefined)"
echo "4. AUTH_GOOGLE_ID (Undefined)"
echo "5. AUTH_GOOGLE_SECRET (Undefined)"

echo -e "\nAPI Environment Secrets (.env):"
echo "1. DATABASE_URL"

echo -e "\nA lot of the unconfigured secrets can be attained from GCP Secrets Manager"