const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegoUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegoUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula);

module.exports = router