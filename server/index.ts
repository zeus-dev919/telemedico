import express from "express";
import Stripe from "stripe";
import bodyParser from 'body-parser'

// const stripe = new Stripe("sk_test_NabZ97T2L9XSSUZapustQMXj", {
const stripe = new Stripe("sk_live_cpUSKDbYvkI35HH9E6jvUIK8", {
  apiVersion: "2020-08-27",
  typescript: true,
});

const app = express();
// app.use(express.json());
app.use(bodyParser.json());

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(req.body.amount) * 100,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log("Running!"));
