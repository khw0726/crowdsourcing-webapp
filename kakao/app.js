

// var db = require('../src/fb.js')
var express    = require('express');
console.log("here");
var app        = express();
var base64 = require('node-base64-image');
var admin = require('firebase-admin')
var serviceAccount = require('../crowdsourcing-664f1-firebase-adminsdk-pj0tv-5b39ddf8c3.json')

var categoryKey = {
    'friend': '친구',
    'business': '직장',
    'love': '연애',
    'family': '가족',
    'etc': '그 외'
  }

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://crowdsourcing-664f1.firebaseio.com/"
})

admin.database().ref('users').on('child_added', function(snapshot) {
    // subscribe
    console.log('child_added')
    const user = snapshot.val()
    console.log(user)
    if(user.pushSubscribed === true && user.interest && user.interest.length !==0) {
        const registrationToken = user.pushToken
        user.interest.forEach(function(topic){
            admin.messaging().subscribeToTopic(registrationToken, topic)
            .then(function(response) {
              // See the MessagingTopicManagementResponse reference documentation
              // for the contents of response.
              console.log("Successfully subscribed to topic:", response);
              if(response.errorCount !== 0){
                console.log(response.errors[0])
              }
            })
            .catch(function(error) {
              console.log("Error subscribing to topic:", error);
            });
        })
    }
})

admin.database().ref('questions').on('child_changed', function (snapshot) {
    const question = snapshot.val()
    if(question.category && question.answers === 0) {
        console.log(question.category)
        // console.log(question['.key'])
        // console.log(question.key)
        const topic = question.category
        const payload = {
            notification: {
                title: '눈치백단',
                body: categoryKey[topic] + ' 분야의 새로운 질문이 등록되었습니다. 알림을 터치하시면 새로 온 질문에 답하실 수 있습니다.',
                click_action: 'https://crowdsourcing-664f1.firebaseapp.com/#/' + snapshot.key + '/postAnswer'
            },
        }    
        admin.messaging().sendToTopic(topic, payload)
        .then(function(response) {
          // See the MessagingTopicResponse reference documentation for the
          // contents of response.
          console.log("Successfully sent message:", response);
        })
        .catch(function(error) {
          console.log("Error sending message:", error);
        });
    }
    
  
})
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
//   console.log(response);
  admin.database().ref('questions/' + id).set({

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
    let message;
    // content -> db ->get (ramdom)key id ->
    if (_obj.type == 'photo') {
      var contentArray = _obj.content.split('.');
      base64.encode(_obj.content, {string: true, local: false}, function(error, res) {
        var contentArray = _obj.content.split('.');
        var string = "data:image/"+contentArray[contentArray.length-1]+";base64, "+res;
        writeUserData(id, string);});
      message = {
        "message": {
            "text": 'https://crowdsourcing-664f1.firebaseapp.com/#/'+id+'/postQuestion \n에 접속하셔서 질문을 남겨주세요.\n 등록된 답변은 https://crowdsourcing-664f1.firebaseapp.com/#/'+id+'/answerView \n에서 확인하실 수 있습니다.'
        },
        "keyboard": {
            "type": "text"
        }
      };
    }
    else{
      message = {
        "message": {
            "text": '속 뜻이 궁금한 대화 내용을 캡쳐하신 후, 사진을 저에게 보내주세요.'
        },
        "keyboard": {
            "type": "text"
        }
      };
    }
    
    // console.log(_obj.content)
    // console.log(_obj.user_key)
    // console.log(_obj.type)
    res.set({
    	'content-type': 'application/json'
      }).send(JSON.stringify(message));

});


app.post('/friend', (req, res) => {
    const
        user_key = req.body.user_key;
    console.log(`${user_key}님이 챗팅방에 참가했습니다.`);

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify({success:true}));
});

//8000포트 서버 ON
app.listen(9000, function() {
});
