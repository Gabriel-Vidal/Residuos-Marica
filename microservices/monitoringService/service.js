const getCollectionStatus = (req, res) => {
    const collectionStatus = {
      city: 'Maricá',
      totalCollected: 5000,
      status: 'Em andamento',
      lastUpdated: new Date().toISOString(),
    };
    
    res.json(collectionStatus);
  };
  
  module.exports = {
    getCollectionStatus,
  };
  