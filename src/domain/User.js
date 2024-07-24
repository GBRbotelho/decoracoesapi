class User {
  constructor(props) {
    this.id = props?.id;
    this.name = props?.name || "";
    this.surname = props?.surname || "";
    this.cpf = props?.cpf || "";
    this.email = props?.email || "";
    this.phone = props?.phone || "";
    this.createdAt = props?.createdAt ? new Date(props?.createdAt) : new Date();
    this.updatedAt = props?.updatedAt ? new Date(props?.updatedAt) : new Date();
    this.level = props?.level || 0;
    this.password = props?.password || "";
  }

  values() {
    return {
      id: this.id,
      name: this.name || "",
      surname: this.surname || "",
      cpf: this.cpf || "",
      email: this.email || "",
      phone: this.phone || "",
      level: this.level || 0,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      password: this.password || "",
    };
  }
}

module.exports = User;
