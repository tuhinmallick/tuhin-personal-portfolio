# Step 1 : pull the official base image
FROM node:10.19.0-alpine AS development
# Step 2 : set working direction
WORKDIR /app
# Step 3 : add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Step 4 : install application dependencies
COPY package.json ./
# Step 5 : 
COPY package-lock.json ./
# Step 6 : 
# RUN npm install --silent
# # Step 7 :  add app
# COPY . ./
# # Step 8 :  start app
# CMD ["npm", "start"]



# #---------------------------------------------------------------------------------------------------------------------------


# # pull the official base image
# FROM node:10.19.0-alpine AS builder
# # set working direction
# WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# # install application dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm i
# # add app
# COPY . ./
# # start app
# CMD ["npm", "start"]
# #---------------------------------------------------------------------------------------------------------------------------
# # pull the official base image
# FROM nginx:1.21.0-alpine as production
# # set working direction
# WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# # install application dependencies
# COPY --from=builder /app/build /usr/share/nginx/htmlCOPY package-lock.json ./
# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# # Expose port
# EXPOSE 80
# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]