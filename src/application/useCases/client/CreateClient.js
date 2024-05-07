const Client = require("../../../domain/Client");

module.exports = async (clientData, clientRepository) => {
  try {
    const client = new Client(
      clientData.nome,
      clientData.cpf,
      clientData.sobrenome,
      clientData.ddd,
      clientData.telefone,
      clientData.rua,
      clientData.bairro,
      clientData.numero,
      clientData.cidade,
      clientData.estado,
      clientData.cep,
      clientData.email,
      clientData.idAssinatura,
      clientData.complemento
    );

    console.log("Criando Cliente no DB");

    return clientRepository.create(client);
  } catch (error) {
    throw { message: error.message || "Failed to Create client" };
  }
};
