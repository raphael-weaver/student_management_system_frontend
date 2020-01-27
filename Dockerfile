# base image
FROM node:12.2.0-alpine

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /student_management_system_frontend

WORKDIR /student_management_system_frontend

COPY . /student_management_system_frontend/

COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install -g yarn

RUN yarn install

RUN yarn add react-scripts

RUN yarn start

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000