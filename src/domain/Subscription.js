class Subscription {
  constructor(props) {
    this.id = props?.id;
    this.idSubscription = props?.idSubscription || "";
    this.userId = props?.userId;
    this.street = props?.street || "";
    this.district = props?.district || "";
    this.number = props?.number || "";
    this.city = props?.city || "";
    this.state = props?.state || "";
    this.cep = props?.cep || "";
    this.complement = props?.complement || "";
    this.createdAt = props?.createdAt ? new Date(props?.createdAt) : new Date();
    this.updatedAt = props?.updatedAt ? new Date(props?.updatedAt) : new Date();
  }

  values() {
    return {
      id: this.id,
      userId: this.userId || null,
      street: this.street || "",
      district: this.district || "",
      number: this.number || "",
      city: this.city || "",
      state: this.state || "",
      cep: this.cep || "",
      complement: this.complement || "",
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = Subscription;
