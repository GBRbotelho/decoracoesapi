class Client {
  constructor(
    nome,
    cpf,
    sobrenome,
    ddd,
    telefone,
    rua,
    bairro,
    numero,
    cidade,
    estado,
    cep,
    email,
    idAssinatura,
    complemento
  ) {
    (this.nome = nome),
      (this.cpf = cpf),
      (this.sobrenome = sobrenome),
      (this.ddd = ddd),
      (this.telefone = telefone),
      (this.rua = rua),
      (this.bairro = bairro),
      (this.numero = numero),
      (this.cidade = cidade),
      (this.estado = estado),
      (this.cep = cep),
      (this.email = email),
      (this.idAssinatura = idAssinatura),
      (this.complemento = complemento);
  }
}

module.exports = Client;
