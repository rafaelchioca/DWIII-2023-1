const router = require('express').Router();
const Funcionario = require('../models/Funcionario');

// POST (INSERT) Inserindo um novo funcionario no MongoDB
router.post('/', (req, res) => {
    const {nome, cargo, salario, desligado} = req.body;
    if(!nome && !cargo && !salario && !desligado){
        res.status(422).json({ error: 'Informar o nome, cargo, salario e desligado é obrigatório!'})
    }
    const funcionario = {
        nome,
        cargo,
        salario,
        desligado,
    };
    try {
        Funcionario.create(funcionario);
        res.status(200).json({message: 'Funcionário cadastrado com sucesso!'})
    } catch (error) {
        res.status(500).json({error: error});
    }

});

// GET (SELECT) Listando todos os funcionarios
router.get('/', async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// GET (SELECT) Listando funcionario por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const funcionario = await Funcionario.findById(id);

        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionario não encontrado'})
        } else {

        res.status(200).json(funcionario);
    }
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// UPDATE (PUT) Atualiando funcionário
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome , cargo, salario, desligado} = req.body;

    try {
        const funcionario = await Funcionario.findByIdAndUpdate(id, { nome, cargo, salario, desligado }, { new: true });

    if (!funcionario) {
        returnres.status(404).json({error: 'Funcionário não existe !'})
    }

    res.status(200).json({message: 'Funcionário atualizado!'});
    } catch (error) {
        res.status(500).json({error: error});
    } 
});

// DELETE deletar os dados existentes
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const funcionario = await Funcionario.findOneAndDelete(id);

        if (!funcionario) {
            return res.status(400).json({ error: 'Funcionário não existe!'});
        }

        res.status(200).json({message: 'Funcionário deletado com sucesso!'}); 
    } catch (error) {
        res.status(500).json({error: error});
    }
});


module.exports = router;