var express = require('express');
var router = express.Router();

const Professional = require('../modules/professional');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Register - Appsico' });
});

/* Pega as informações do formPro */
router.post('/new', async (req, res, next) => {
  
  const name_professional = req.body.name_professional;
  const birthDate_professional = req.body.birthDate_professional;
  const email_professional = req.body.email_professional;
  const contact_professional = req.body.contact_professional;
  const password_professional = req.body.password_professional;

  try {
    const resultado = await Professional.create({
      name_professional,
      birthDate_professional,
      email_professional,
      contact_professional,
      password_professional
    });
    
    res.render('./stats', resultado.dataValues );
  } catch (error) {
    console.error("Erro ao cadastrar profissional:", error);
    next(error);  // Passa o erro para o middleware de tratamento de erros
  } 
});

module.exports = router;
