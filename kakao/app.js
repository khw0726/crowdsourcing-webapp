var express    = require('express');
var app        = express();

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
    let id = 1
    // content -> db ->get (ramdom)key id ->
    let massage = {
            "message": {
                "text": '이 곳에서 마저 질문을 작성해 보세요.\nhttps://url/id='+id
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