const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

//들어오는 모든 요청에서 실행되어야 하는 추가 핸들러를 작성할 수 있다.
// 이러한 하나 이상의 유형의 요청에 적용되는 일반 핸들러 함수를 일반적으로 미들웨어 함수라고 부른다.
app.use(express.urlencoded({extended: false})); //바디 파서를 설정하는 메서드

app.get('/currenttime', function(req, res) {
    res.send('<h1>'+ new Date().toISOString() +'</h1>');
}) //localhost:3000/currenttime

app.get('/', function(req, res) {
    res.send('<form action="/store-user" method="POST"><label>Yout Name: </label><input type="text" name="username"><button>Submit</button></form>');
}) //localhost:3000/

app.post('/store-user', function(req, res){
    const userName = req.body.username;
    
    const filePath = path.join(__dirname, 'data', 'users.json');    //text 로 읽힘

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    existingUsers.push(userName);
  
    fs.writeFileSync(filePath, JSON.stringify(existingUsers));
    
    res.send('<h1>Username stored!</h1>');
});

app.get('/users', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'users.json');    //text 로 읽힘

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = '<ul>';

    for (const user of existingUsers) {
        responseData += '<li>' + user + '</li>';
    }

    responseData += '</ul>';

    res.send(responseData);
})

app.listen(3000);