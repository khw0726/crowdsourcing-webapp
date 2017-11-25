# crowdsourcing-webapp

> A web app for crowdsourcing project

## Build Setup

``` bash
# install dependencies
npm install

(For installing semantic-ui, choose 'automatic' with default directory)

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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
pushToken : string
}

answers : {
questionID : (FOREIGN) questions[“.key”],
name : (FOREIGN) users/~~~~/name,
isYes : bool,
answer : string
}
```
