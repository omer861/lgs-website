#!/bin/bash
set -ex

cp template.env .env
# Define the new values you want to set

NEW_API_BASE_URL=${API_BASE_URL:-"http://localhost:3005"}
NEW_WHATSAPPLINK=${WHATSAPPLINK:-"https://new.whatsapp.link"}
NEW_CHATBOT=${CHATBOT:-"new_config"}
NEW_CAPTCHA=${CAPTCHA:-""}

# Replace values in the .env file using sed with a different delimiter
sed -i "s|REACT_APP_API_BASE_URL=.*|REACT_APP_API_BASE_URL=$NEW_API_BASE_URL|" .env
sed -i "s|REACT_APP_WHATSAPPLINK=.*|REACT_APP_WHATSAPPLINK=$NEW_WHATSAPPLINK|" .env
sed -i "s|REACT_APP_CHATBOT=.*|REACT_APP_CHATBOT=$NEW_CHATBOT|" .env
sed -i "s|REACT_APP_CAPTCHA=.*|REACT_APP_CAPTCHA=$NEW_CAPTCHA|" .env

echo "Values replaced in .env file:"
cat .env
