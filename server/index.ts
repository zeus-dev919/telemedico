import express from "express";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_NabZ97T2L9XSSUZapustQMXj", {
  apiVersion: "2020-08-27",
  typescript: true,
});

const app = express();
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log("Running!"));
