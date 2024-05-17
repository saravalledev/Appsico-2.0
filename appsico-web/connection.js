/* INSTRUÇÕES CRUD */
(async () => {
    /* CONEXÃO INICIAL PARA TODAS AS OPERAÇÕES */
    const database = require('./db');
    const Professional = require('./modules/professional');
    const User = require('./modules/user');
    const Laguage = require('./modules/language');
    const Conversation = require("./modules/conversation");
    await database.sync();


    const newConversation = await User.create()
    console.log(newConversation);
})();


/* 
IMPREMINDO RESULTADOS

    imprime o que acabou de inserir
   const professional = await Professional.findAll();

   imprime pela pimaryKey
   const professional = await Professional.findByPk(2);

   imprime com filtro
   const professional = await Professional.findAll({
        where:{
            specialty_professional: "TCC"
        }
    });

INSERINDO VALORES

const newProfessional = await Professional.create({
    name_professional: "Elena",
    date_birth_professional:"1985-04-02",
    biography_professional: "Elena é uma psicóloga dedicada que trabalha para ajudar as pessoas.",
    contact_professional: 11945425523,
    crp_professional: 23547896,
    email_professional: "elena.contato@gmail.com",
    specialty_professional: "TCC",
    password_professional: "Elena123",
})
console.log(newProfessional);

const newUser = await User.create({
        name_user: "Bob",
        date_birth_user: "2000-05-06",
        biography_user: "Olá, sou o Bob! Estou sempre em busca de novas aventuras e aprendizados. Adoro música, filmes e viagens.",
        contact_user: 11933425523,
        email_user: "bob.contato@gmail.com",
        password_user: "Bob123",
    })
console.log(newProfessional);
      
ALTERANDO VALORES pelo ID

const professional = await Professional.findByPk(3);
console.log(professional);
professional.name_professional = "teste_alterado";
professional.save();


ALTERANDO VALORES com um FILTRO

    save(); -> Só altera itens induviduais, e nao listas


DESTRUINDO UMA UNIDADE pelo ID(LINHA INTEIRA)

    const professional = await Professional.findByPk(5);
    console.log(professional);
    await professional.destroy();


DESTRUINDO UMA UNIDADE com um FILTRO(LINHA INTEIRA)

    const professional = await Professional.findAll({
        where:{
            name_professional: "Elena";
        }
    });
    console.log(professional);
    await professional.destroy();

*/
