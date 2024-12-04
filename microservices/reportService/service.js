const generateReport = (req, res) => {
    // Exemplo simples, gerar relatório sobre reciclagem
    const report = {
      city: 'Maricá',
      totalRecycled: 3000, // Quantidade de resíduos reciclados
      totalWaste: 5000, // Total de resíduos coletados
      recyclingRate: 60, // Taxa de reciclagem (%)
      lastUpdated: new Date().toISOString(),
    };
  
    res.json(report);
  };
  
  module.exports = {
    generateReport,
  };
  