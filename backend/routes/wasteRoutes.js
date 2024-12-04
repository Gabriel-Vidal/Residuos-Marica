const express = require('express');
const Waste = require('../models/Waste');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, category, quantity, description } = req.body;
    const waste = new Waste({ name, category, quantity, description });
    await waste.save();
    res.status(201).json(waste);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar resíduo' });
  }
});


router.get('/', authMiddleware, async (req, res) => {
  try {
    const wastes = await Waste.find();
    res.json(wastes);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao listar resíduos' });
  }
});


router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { name, category, quantity, description } = req.body;
    const updatedWaste = await Waste.findByIdAndUpdate(
      req.params.id,
      { name, category, quantity, description },
      { new: true }
    );
    if (!updatedWaste) return res.status(404).json({ error: 'Resíduo não encontrado' });
    res.json(updatedWaste);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar resíduo' });
  }
});


router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedWaste = await Waste.findByIdAndDelete(req.params.id);
    if (!deletedWaste) return res.status(404).json({ error: 'Resíduo não encontrado' });
    res.json({ message: 'Resíduo deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar resíduo' });
  }
});

module.exports = router;
