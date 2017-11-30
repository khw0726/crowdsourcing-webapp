# crowdsourcing-webapp

> A web app for crowdsourcing project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Code Description

Main code for interface is located at ./src. Following are some of the notable files/directories:  

./src/components/PostQuestion/ : Interface components for posting question  
./src/components/PostAnswer/ : Interface components for posting answers  
./src/components/charts, ./src/components/coreui, ./src/components/dashboard : Interface components for visualizing statistics  
./src/components/ : Other interface components for login, question lists, user stats, and sign-in  
./kakao/app.js : Backend code handling KakaoTalk messages and issuing push notifications  

## Firebase DB

```
questions:{
.key : (UNIQUE) imgID,
category : string,
img : Base64,
imgEdited : Base64,
question : string,
answers : []
}

users : {
name : (UNIQUE) username,
age : string,
gender : string,
interest : [] of string,
pushSubscribed : bool,
pushToken : string,
answers : [] of questionID
}

answers : {
questionID : (FOREIGN) questions[“.key”],
name : (FOREIGN) users/~~~~/name,
isYes : bool,
answer : string,
date : date
}
```
