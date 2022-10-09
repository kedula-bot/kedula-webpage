import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(307).redirect('https://docs.kedula.ml'); // 307 Redirect temporarily
});

app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});