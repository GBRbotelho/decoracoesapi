const CreateClient = require("../../application/useCases/client/CreateClient");
const clientRepository = require("../../infrastructure/repositories/clientRepository");
const axios = require("axios");
const userRepository = require("../../infrastructure/repositories/userRepository");
const addressRepository = require("../../infrastructure/repositories/addressRepository");
const mercadoPagoAccessToken =
  "APP_USR-7310379386968046-041821-de1b29729ae496dc0b07b5d284e65025-90695097";
const CreateSubscription = require("../../application/useCases/subscription/CreateSubscription");

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
      // const data = {
      //   auto_recurring: {
      //     frequency: 1,
      //     frequency_type: "months",
      //     transaction_amount: 455.9,
      //     currency_id: "BRL",
      //   },
      //   back_url: "https://www.yoursite.com",
      //   reason: "Box Premium 12 Lugares",
      // };
      // // Faz a requisição POST para criar o plano de assinatura
      // const response = await axios.post(
      //   "https://api.mercadopago.com/preapproval_plan",
      //   data,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${mercadoPagoAccessToken}`,
      //     },
      //   }
      // );
      // // Retorna a resposta da API do Mercado Pago
      // res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  async createSubscription(req, res) {
    try {
      // Dados recebidos do cliente
      const { user, address, tokenPlan, token } = req.body;
      const dataUser = await userRepository.find({ id: user });
      const dataAddress = await addressRepository.find({ id: address });
      const responsePlans = await axios.get(
        "https://api.mercadopago.com/preapproval_plan/search",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mercadoPagoAccessToken}`,
          },
        }
      );

      const plan = responsePlans.data.results.find(
        (item) => item.id === tokenPlan
      );

      const data = {
        preapproval_plan_id: plan.id,
        reason: plan.reason,
        external_reference: dataUser.cpf,
        payer_email: dataUser.email,
        card_token_id: token,
        auto_recurring: plan["auto_recurring"],
        back_url: plan["back_url"],
        status: plan.status,
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

      if (response.data) {
        const dataSubscription = {
          userId: dataUser.id,
          idSubscription: response.data.id,
          planName: plan.reason,
          planPrice: plan["auto_recurring"]["transaction_amount"],
          street: dataAddress.street,
          district: dataAddress.district,
          number: dataAddress.number,
          city: dataAddress.city,
          state: dataAddress.state,
          cep: dataAddress.cep,
          complement: dataAddress.complement,
        };

        await CreateSubscription(dataSubscription);

        if (response.data.status === "authorized") {
          return res.status(200).json({
            success: true,
            status: "authorized",
            data: response.data,
          });
        } else if (response.data.status === "pending") {
          return res
            .status(200)
            .json({ success: true, status: "pending", data: response.data });
        } else {
          return res.status(500).json({ success: false, data: response.data });
        }
      }
    } catch (error) {
      console.error("Erro ao criar a assinatura:", error);
      return res.status(500).json({ success: "NO", data: error });
    }
  },
};

module.exports = mpController;
