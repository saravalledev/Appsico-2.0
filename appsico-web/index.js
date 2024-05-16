/* INSTRUÇÕES CRUD */

(async () => {
    /* CONEXÃO INICIAL PARA TODAS AS OPERAÇÕES */
    const database = require('./db');
    const Professional = require('./professional');
    await database.sync();

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
    biography_professional: "Elena é uma psicóloga dedicada que trabalha para ajudar as pessoas.",
    contact_professional: 11945425523,
    crp_professional: 23547896,
    email_professional: "elena.contato@gmail.com",
    specialty_professional: "TCC",
    password_professional: "Elena123",
})
console.log(newProfessional);
      
      
ALTERANDO VALORES pelo ID

const professional = await Professional.findByPk(3);
console.log(professional);
professional.name_professional = "teste_alterado";
professional.save();


ALTERANDO VALORES com um FILTRO

console.log(newProfessional);

const professional = await Professional.findAll({
    where: {
        specialty_professional: "TCC"
    }
});


DESTRUINDO UMA UNIDADE pelo ID(LINHA INTEIRA)

const professional = await Professional.findByPk(5);
console.log(professional);

await professional.destroy();


DESTRUINDO UMA UNIDADE com um FILTRO(LINHA INTEIRA)


*/
