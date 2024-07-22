class User {
  constructor(props) {
    this.id = props?.id;
    this.name = props?.name || "";
    this.email = props?.email || "";
    this.createdAt = props?.createdAt ? new Date(props?.createdAt) : new Date();
    this.updatedAt = props?.updatedAt ? new Date(props?.updatedAt) : new Date();
    this.level = props?.level || 0;
    this.password = props?.password || "";
  }

  values() {
    return {
      id: this.id,
      name: this.name || "",
      email: this.email || "",
      level: this.level || 0,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      password: this.password || "",
    };
  }
}

module.exports = User;
