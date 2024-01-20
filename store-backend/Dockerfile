# Obtain latest node image
FROM node:18

# create working directory for container
WORKDIR /usr/src/app

# copy package.json into working directory
COPY package*.json ./

# intall dependencies
RUN npm install
RUN npm install sequelize pg pg-hstore
RUN npm install --save-dev jest supertest

# Copy everything into working directory
COPY . .

#Expose port
EXPOSE 3001

#Run npm start
CMD ["npm", "test"]