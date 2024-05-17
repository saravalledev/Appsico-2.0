function registerProfessional() {
    (async () => {
        /* CONEXÃO INICIAL PARA TODAS AS OPERAÇÕES */
        const database = require('../../db');
        const Professional = require('../../professional');
        await database.sync();

        const newProfessional = await Professional.create({
            name_professional: "teste4",
            date_birth_professional: "1985-04-02",
            biography_professional: "teste4.",
            contact_professional: 11945425523,
            crp_professional: 23547896,
            email_professional: "teste4",
            specialty_professional: "teste4",
            password_professional: "teste4",
        })
        console.log(newProfessional);
    })();
}

module.exports = registerProfessional();



