const express = require('express');
const monitoringService = require('./service');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());


app.get('/api/monitor', monitoringService.getCollectionStatus);

app.listen(PORT, () => {
  console.log(`Monitoring Service rodando na porta ${PORT}`);
});
