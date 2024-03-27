const path = require('path')
// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 기본 포트를 설정하거나 3000 포트를 사용합니다.
const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));



// 루트 경로 ('/')에 대한 GET 요청을 처리합니다.
app.get('/', (req, res) => {
  res.send('Hello, World!!!');
});

app.post('/test', (req, res) => {
  console.log("테스트로 들어왔어요.")
  res.send('Hello, test');
});

function helloHandler(req, res) {
  console.log("헬로 핸들러 입니다.");
  res.send('응답')
}

app.get('/hello', helloHandler);

// 서버를 설정한 포트에서 실행합니다.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});