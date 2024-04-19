const CreateClient = require("../../application/useCases/client/CreateClient");
const clientRepository = require("../../infrastructure/repositories/clientRepository");
const axios = require("axios");
const mercadoPagoAccessToken =
  "APP_USR-7310379386968046-041821-de1b29729ae496dc0b07b5d284e65025-90695097";

const mpController = {
  async createPlan(req, res) {
    try {
      //BOX STAR

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 45.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Star 2 Lugares",
      // };

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 67.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Star 4 Lugar",
      // };

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 89.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Star 6 Lugar",
      // };

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 109.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Star 8 Lugar",
      // };

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 159.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Star 12 Lugares",
      // };

      //Box Premium
      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 179.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Premium 4 Lugares",
      // };

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 249.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Premium 6 Lugares",
      // };

      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 324.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Premium 8 Lugares",
      // };

      const data = {
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 455.9,
          currency_id: "BRL",
        },
        back_url: "https://www.yoursite.com",
        reason: "Box Premium 12 Lugares",
      };

      // Faz a requisição POST para criar o plano de assinatura
      const response = await axios.post(
        "https://api.mercadopago.com/preapproval_plan",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      // Retorna a resposta da API do Mercado Pago
      res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  async createSubscription(req, res) {
    try {
      // Dados recebidos do cliente
      const { payer, token, dataUser } = req.body;
      const Id = req.params.id;

      // Dados da requisição POST para a API do Mercado Pago
      const data = {
        preapproval_plan_id: "2c9380848ef3876b018ef393cd2c0006",
        reason: "Assinatura Test",
        external_reference: dataUser.cpf,
        payer_email: payer.email,
        card_token_id: token,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 5,
          currency_id: "BRL",
        },
        back_url: "https://www.yoursite.com",
        status: "authorized",
      };

      // Faz a requisição POST para criar a assinatura
      const response = await axios.post(
        "https://api.mercadopago.com/preapproval",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      const dataClient = {
        nome: dataUser.nome,
        cpf: dataUser.cpf,
        sobrenome: dataUser.sobrenome,
        ddd: dataUser.ddd,
        telefone: dataUser.telefone,
        rua: dataUser.rua,
        bairro: dataUser.bairro,
        numero: dataUser.numero,
        cidade: dataUser.cidade,
        estado: dataUser.estado,
        cep: dataUser.cep,
        email: payer.email,
        idAssinatura: response.data.id,
      };

      if (response.data.status === "authorized") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "authorized", data: response.data });
      } else if (response.data.status === "pending") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "pending", data: response.data });
      } else {
        return res.status(500).json({ success: "NO", data: response.data });
      }
    } catch (error) {
      console.error("Erro ao criar a assinatura:", error);
      return res.status(500).json({ success: "NO", data: error });
    }
  },
  async createSubscriptionstar2(req, res) {
    try {
      // Dados recebidos do cliente
      const { payer, token, dataUser } = req.body;

      // Dados da requisição POST para a API do Mercado Pago
      const data = {
        preapproval_plan_id: "2c9380848ef387c7018ef824257a037e",
        reason: "Box Star 2 Lugares",
        external_reference: dataUser.cpf,
        payer_email: payer.email,
        card_token_id: token,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 45.9,
          currency_id: "BRL",
        },
        back_url: "https://www.yoursite.com",
        status: "authorized",
      };

      // Faz a requisição POST para criar a assinatura
      const response = await axios.post(
        "https://api.mercadopago.com/preapproval",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      const dataClient = {
        nome: dataUser.nome,
        cpf: dataUser.cpf,
        sobrenome: dataUser.sobrenome,
        ddd: dataUser.ddd,
        telefone: dataUser.telefone,
        rua: dataUser.rua,
        bairro: dataUser.bairro,
        numero: dataUser.numero,
        cidade: dataUser.cidade,
        estado: dataUser.estado,
        cep: dataUser.cep,
        email: payer.email,
        idAssinatura: response.data.id,
      };

      if (response.data.status === "authorized") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "authorized", data: response.data });
      } else if (response.data.status === "pending") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "pending", data: response.data });
      } else {
        return res.status(500).json({ success: "NO", data: response.data });
      }
    } catch (error) {
      console.error("Erro ao criar a assinatura:", error);
      return res.status(500).json({ success: "NO", data: error });
    }
  },
  async createSubscriptionstar4(req, res) {
    try {
      // Dados recebidos do cliente
      const { payer, token, dataUser } = req.body;

      // Dados da requisição POST para a API do Mercado Pago
      const data = {
        preapproval_plan_id: "2c9380848ef3876b018ef824d6d10364",
        reason: "Box Star 4 Lugar",
        external_reference: dataUser.cpf,
        payer_email: payer.email,
        card_token_id: token,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 67.9,
          currency_id: "BRL",
        },
        back_url: "https://www.yoursite.com",
        status: "authorized",
      };

      // Faz a requisição POST para criar a assinatura
      const response = await axios.post(
        "https://api.mercadopago.com/preapproval",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      const dataClient = {
        nome: dataUser.nome,
        cpf: dataUser.cpf,
        sobrenome: dataUser.sobrenome,
        ddd: dataUser.ddd,
        telefone: dataUser.telefone,
        rua: dataUser.rua,
        bairro: dataUser.bairro,
        numero: dataUser.numero,
        cidade: dataUser.cidade,
        estado: dataUser.estado,
        cep: dataUser.cep,
        email: payer.email,
        idAssinatura: response.data.id,
      };

      if (response.data.status === "authorized") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "authorized", data: response.data });
      } else if (response.data.status === "pending") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "pending", data: response.data });
      } else {
        return res.status(500).json({ success: "NO", data: response.data });
      }
    } catch (error) {
      console.error("Erro ao criar a assinatura:", error);
      return res.status(500).json({ success: "NO", data: error });
    }
  },

  //Box Premium
  async createSubscriptionpremium4(req, res) {
    try {
      // Dados recebidos do cliente
      const { payer, token, dataUser } = req.body;

      // Dados da requisição POST para a API do Mercado Pago
      const data = {
        preapproval_plan_id: "2c9380848ef387c7018ef826a1020382",
        reason: "Box Premium 4 Lugares",
        external_reference: dataUser.cpf,
        payer_email: payer.email,
        card_token_id: token,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 179.9,
          currency_id: "BRL",
        },
        back_url: "https://www.yoursite.com",
        status: "authorized",
      };

      // Faz a requisição POST para criar a assinatura
      const response = await axios.post(
        "https://api.mercadopago.com/preapproval",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      const dataClient = {
        nome: dataUser.nome,
        cpf: dataUser.cpf,
        sobrenome: dataUser.sobrenome,
        ddd: dataUser.ddd,
        telefone: dataUser.telefone,
        rua: dataUser.rua,
        bairro: dataUser.bairro,
        numero: dataUser.numero,
        cidade: dataUser.cidade,
        estado: dataUser.estado,
        cep: dataUser.cep,
        email: payer.email,
        idAssinatura: response.data.id,
      };

      if (response.data.status === "authorized") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "authorized", data: response.data });
      } else if (response.data.status === "pending") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "pending", data: response.data });
      } else {
        return res.status(500).json({ success: "NO", data: response.data });
      }
    } catch (error) {
      console.error("Erro ao criar a assinatura:", error);
      return res.status(500).json({ success: "NO", data: error });
    }
  },

  async createSubscriptionpremium6(req, res) {
    try {
      // Dados recebidos do cliente
      const { payer, token, dataUser } = req.body;

      // Dados da requisição POST para a API do Mercado Pago
      const data = {
        preapproval_plan_id: "2c9380848ef3876b018ef8270e7c0366",
        reason: "Box Premium 6 Lugares",
        external_reference: dataUser.cpf,
        payer_email: payer.email,
        card_token_id: token,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 249.9,
          currency_id: "BRL",
        },
        back_url: "https://www.yoursite.com",
        status: "authorized",
      };

      // Faz a requisição POST para criar a assinatura
      const response = await axios.post(
        "https://api.mercadopago.com/preapproval",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      const dataClient = {
        nome: dataUser.nome,
        cpf: dataUser.cpf,
        sobrenome: dataUser.sobrenome,
        ddd: dataUser.ddd,
        telefone: dataUser.telefone,
        rua: dataUser.rua,
        bairro: dataUser.bairro,
        numero: dataUser.numero,
        cidade: dataUser.cidade,
        estado: dataUser.estado,
        cep: dataUser.cep,
        email: payer.email,
        idAssinatura: response.data.id,
      };

      if (response.data.status === "authorized") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "authorized", data: response.data });
      } else if (response.data.status === "pending") {
        const CreatedClient = CreateClient(dataClient, clientRepository);
        return res
          .status(200)
          .json({ success: "YES", status: "pending", data: response.data });
      } else {
        return res.status(500).json({ success: "NO", data: response.data });
      }
    } catch (error) {
      console.error("Erro ao criar a assinatura:", error);
      return res.status(500).json({ success: "NO", data: error });
    }
  },
};

module.exports = mpController;
