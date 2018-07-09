NOTE: made some mistake while backicng this up, my front end is missing, will fix soon.

# New York Times Scraper
This Was one of my first full stack applications, using MERN. It also utilizes the New York Times API. It searches articles between 
certain dates. You can then save the articles, and make little comments on them.

## Getting Started
Clone this repository
```
git clone https://github.com/m-scarr/NYTScraper
```
Run a MongoDb database, if you dont have MongoDB, then you can get it [here](https://www.mongodb.com/)
```
mongod
```
Open the root directory in the bash.
```
npm install
cd client
npm install
cd..
yarn start
```

### Prerequisites

There are a few things you'll need to get it running, if you tried the above, and it didn't work, it could be because you dont have some of
these things installed:

```
npm install yarn -g
npm install nodemon -g
npm install concurrently -g
```

### Features

+ Search the New York Times article database.
+ Save and comment on articles.

### What's Next for this App?
+ Breaking the front end into smaller components
+ Restyling to fix ugly/inconsistent display
+ Styling/design for mobile
