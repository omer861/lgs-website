# By Meer Sawood <msawood@redhat.com> 
# uses ubi minimal image to build and httpd as the server

# Use an official Red Hat UBI minimal runtime as a parent image
FROM registry.access.redhat.com/ubi8/nodejs-18:1-47.1687186189

# Set the working directory to /app
WORKDIR /app
USER 0


# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN npm install
RUN npm install -g pm2 serve

RUN chown -R 1001:0 /app
USER 1001

# Set build arguments
ARG API_BASE_URL_ARG
ARG WHATSAPPLINK_ARG
ARG CHATBOT_ARG
ARG CAPTCHA_ARG

RUN chmod +x /app/prepare_env.sh && \
    API_BASE_URL="$API_BASE_URL_ARG" WHATSAPPLINK="$WHATSAPPLINK_ARG" CHATBOT="$CHATBOT_ARG" CAPTCHA="$CAPTCHA_ARG" /app/prepare_env.sh

RUN npm run build

# Expose the server on port 80
EXPOSE 3008

# Start Server
# Set the command to run the app
ENTRYPOINT [ "/app/hack/entrypoint.sh" ]
CMD [ "sh" ]
