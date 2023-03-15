import dayjs from 'dayjs';
import express from 'express';

const app = express();
app.get(/^\/$/, (req, res) => {
  res.writeHead(302, { Location: '/index.html' });
  res.end();
});
const server = app.listen(8000, function () {
  console.log('Express Run', `Port = ${server.address().port} `);
});

app.get('/index.html', function (req, res, next) {
  const ts = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
  console.log('Get /index.html', ts);
  const html = `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
    </head>
    <body>
    
      <div> expressで出力${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}</div>
        <div id="app"></div>
        <script type="module" src="/main.ts"></script>
    </body>
</html>
`;
  res.end(html);
});
