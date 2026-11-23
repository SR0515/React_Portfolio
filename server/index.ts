import 'dotenv/config';
import express from 'express';
import chatRouter from './routes/chat';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '1mb' }));

app.use((req, _res, next) => {
  console.log(`[Express 요청] ${req.method} ${req.url}`);
  next();
});

// 서버 연결 확인
app.get('/api/health', (_req, res) => {
  console.log('Health API 호출됨');

  res.status(200).json({
    status: 'ok',
    message: 'Portfolio API Server is running.',
  });
});

// 챗봇 API
app.use('/api', chatRouter);

// 존재하지 않는 API 경로 확인
app.use('/api', (_req, res) => {
  res.status(404).json({
    error: 'API 경로를 찾을 수 없습니다.',
  });
});

app.listen(PORT, () => {
  console.log(`Backend Server: http://localhost:${PORT}`);
});