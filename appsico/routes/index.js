var express = require('express');
var router = express.Router();

const Professional = require('../modules/professional');
const User = require('../modules/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Register - Appsico' });
});

/* others routes */

router.get('/', function (req, res, next) {
  res.render('header');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.get('/home', function (req, res, next) {
  res.render('pages/home', { title: 'Home - Appsico' });
});

router.get('/psychologists', function (req, res, next) {
  res.render('pages/psychologists', { title: 'Busca por Psicólogos - Appsico' });
});

router.get('/profileProfessional', function (req, res, next) {
  res.render('pages/profileProfessional', { title: 'Perfil - Appsico' });
});

router.get('/editProfileProfessional', function (req, res, next) {
  res.render('pages/editProfileProfessional', { title: 'Editar Perfil - Appsico' });
});

router.get('/ProfileUser', function (req, res, next) {
  res.render('pages/ProfileUser', { title: 'Perfil - Appsico' });
});

router.get('/editProfileUser', function (req, res, next) {
  res.render('pages/editProfileUser', { title: 'Editar Perfil - Appsico' });
});

/* Insere um Novo Profissional  */
router.post('/newProfessoinal', async (req, res, next) => {

  const name_professional = req.body.name_professional;
  const date_birth_professional = req.body.date_birth_professional;
  const email_professional = req.body.email_professional;
  const contact_professional = req.body.contact_professional;
  const crp_professional = req.body.crp_professional;
  const password_professional = req.body.password_professional;

  try {
    const resultado = await Professional.create({
      name_professional,
      date_birth_professional,
      email_professional,
      contact_professional,
      crp_professional,
      password_professional
    });

    res.render('./pages/home.ejs', resultado.dataValues);
  } catch (error) {
    console.error("Erro ao cadastrar profissional:", error);
    next(error);  // Passa o erro para o middleware de tratamento de erros
  }
});

/* Insere um Novo Usuário  */
router.post('/newUser', async (req, res, next) => {

  const name_user = req.body.name_user;
  const date_birth_user = req.body.date_birth_user;
  const email_user = req.body.email_user;
  const contact_user = req.body.contact_user;
  const password_user = req.body.password_user;

  try {
    const resultado = await User.create({
      name_user,
      date_birth_user,
      email_user,
      contact_user,
      password_user
    });

    res.render('./pages/home.ejs', resultado.dataValues);
  } catch (error) {
    console.error("Erro ao cadastrar usuario:", error);
    next(error);  // Passa o erro para o middleware de tratamento de erros
  }
});

/* 

      EM MANUTENÇAÕ PARA BAIXO

 */
router.post('/log', async (req, res, next) => {
  const email_professional = req.body.email_professional;
  const password_professional = req.body.password_professional;

  try {

    /* é aqui que comparamos com a base de dados para login */

    res.render('./pages/home.ejs');
  } catch (error) {
    console.error("Erro ao cadastrar profissional:", error);
    next(error);  // Passa o erro para o middleware de tratamento de erros
  }

})

router.post('/alterProfilePro', async (req, res, next) => {

  const name_professional = req.body.name_professional;
  const crp_professional = req.body.crp_professional;
  const birthDate_professional = req.body.birthDate_professional;
  const email_professional = req.body.email_professional;
  const contact_professional = req.body.contact_professional;
  const local_professional = req.body.local_professional;
  const specialty_professional = req.body.specialty_professional;
  const biography_professional = req.body.biography_professional;

  try {/* addicionar where */
    const resultado = await Professional.update({
      name_professional,
      crp_professional,
      birthDate_professional,
      email_professional,
      contact_professional,
      local_professional,
      specialty_professional,
      biography_professional,
    });

    res.render('./pages/profileProfessional.ejs', resultado.dataValues);
  } catch (error) {
    console.error("Erro ao cadastrar profissional:", error);
    next(error);  // Passa o erro para o middleware de tratamento de erros
  }
});


router.post('/alterProfileUser', async (req, res, next) => {

  const name_user = req.body.name_user;
  const birthDate_user = req.body.birthDate_user;
  const email_user = req.body.email_user;
  const contact_user = req.body.contact_user;
  const local_user = req.body.local_user;
  const biography_user = req.body.biography_user;

  try {/* addicionar where */
    const resultado = await User.update({
      name_user,
      birthDate_user,
      email_user,
      contact_user,
      local_user,
      biography_user,
    });

    res.render('./pages/ProfileUser.ejs', resultado.dataValues);
  } catch (error) {
    console.error("Erro ao cadastrar profissional:", error);
    next(error);  // Passa o erro para o middleware de tratamento de erros
  }
});

module.exports = router;
