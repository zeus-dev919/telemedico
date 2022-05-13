import express from "express";
import Stripe from "stripe";

// const stripe = new Stripe("sk_test_NabZ97T2L9XSSUZapustQMXj", {
const stripe = new Stripe("sk_live_cpUSKDbYvkI35HH9E6jvUIK8", {
  apiVersion: "2020-08-27",
  typescript: true,
});

const app = express();
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  // console.log(' Req => ',req.body.amount)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log("Running!"));
