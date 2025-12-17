import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/test', (req, res) => {
  res.send('Hello, World!');
});
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});