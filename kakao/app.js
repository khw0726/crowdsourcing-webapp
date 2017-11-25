

var db = require('../src/fb.js')
var express    = require('express');
console.log("here");
var app        = express();
var base64 = require('node-base64-image');

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
console.log(makeid());

function writeUserData(id, response) {
  console.log("here3");
  console.log(response);
  

  db.db.ref('questions/' + id).set({

    'img' : response
  });
}


var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//초기 상태 get
app.get('/keyboard', function(req, res){
  const menu = {
      "type": 'buttons',
      "buttons" : ["시작하기"]

  };

  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(menu));
});

app.post('/message',function (req, res) {

    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    let id = makeid();
    // content -> db ->get (ramdom)key id ->
    if (_obj.type == 'photo') {
      console.log(_obj.content);
      var contentArray = _obj.content.split('.');
      console.log(contentArray);
      base64.encode(_obj.content, {string: true, local: false}, function(error, res) {
        var contentArray = _obj.content.split('.');
        console.log(contentArray);
        var string = "data:image/"+contentArray[contentArray.length-1]+";base64, "+res;
        console.log(string);
        writeUserData(id, string);});

    }
    let massage = {
            "message": {
                "text": '이 곳에서 마저 질문을 작성해 보세요.\nhttps://34.208.245.104:8090/#/'+id+'/postQuestion'
            },
            "keyboard": {
                "type": "text"
            }
       };
    console.log(_obj.content)
    console.log(_obj.user_key)
    console.log(_obj.type)
    res.set({
    	'content-type': 'application/json'
      }).send(JSON.stringify(massage));

});


app.post('/friend', (req, res) => {
    const
        user_key = req.body.user_key;
    console.log(`${user_key}님이 챗팅방에 참가했습니다.`);

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify({success:true}));
});


//9000포트 서버 ON
app.listen(9000, function() {
});
