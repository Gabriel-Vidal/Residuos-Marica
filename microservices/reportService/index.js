const express = require('express');
const reportService = require('./service');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/report', reportService.generateReport);

app.listen(PORT, () => {
  console.log(`Report Service rodando na porta ${PORT}`);
});
