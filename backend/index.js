require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL || process.env.MONGO_URI;

let dbConnected = false;

// in-memory demo data used when a real MongoDB connection is not available
const sampleHoldings = [
  { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
  { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
  { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
  { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%" },
  { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
];

const samplePositions = [
  { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
  { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
];

const sampleOrders = [];

const app = express();

app.use(cors());
app.use(bodyParser.json());

// simple request logger to assist debugging from browser clients
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});

// Authentication helper: accepts Bearer token header or `token` query/body
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  let token = null;
  if (authHeader && authHeader.startsWith("Bearer ")) token = authHeader.slice(7);
  else if (req.query && req.query.token) token = req.query.token;
  else if (req.body && req.body.token) token = req.body.token;
  if (!token) return res.status(401).json({ ok: false, error: "Missing token" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "devsecret");
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ ok: false, error: "Invalid token" });
  }
};

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = [];
  if (dbConnected) {
    try {
      allHoldings = await HoldingsModel.find({});
    } catch (err) {
      console.log("Failed to read holdings from DB, using fallback:", err.message || err);
      allHoldings = sampleHoldings;
    }
  } else {
    allHoldings = sampleHoldings;
  }

  // simulate small random price changes on each request (do not persist)
  const updated = allHoldings.map((h) => {
    const delta = Math.random() * 0.02 - 0.01; // -1% .. +1%
    const newPrice = +(h.price * (1 + delta)).toFixed(2);
    return {
      name: h.name,
      qty: h.qty,
      avg: h.avg,
      price: newPrice,
      net: h.net,
      day: h.day,
      isLoss: newPrice * h.qty - h.avg * h.qty < 0,
    };
  });

  res.json(updated);
});

app.get("/allPositions", async (req, res) => {
  if (dbConnected) {
    try {
      const allPositions = await PositionsModel.find({});
      return res.json(allPositions);
    } catch (err) {
      console.log("Failed to read positions from DB, using fallback:", err.message || err);
    }
  }

  return res.json(samplePositions);
});

// Register a new user
app.post("/register", async (req, res) => {
  const { email, password, username } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }
  try {
    const exists = await UserModel.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(400).json({ ok: false, error: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const uname = (username && username.trim()) || (email.split("@")[0] || email);
    const user = new UserModel({ email: email.toLowerCase(), username: uname, passwordHash });
    await user.save();
    const token = jwt.sign({ sub: user._id, email: user.email, username: user.username }, process.env.JWT_SECRET || "devsecret", { expiresIn: "7d" });
    return res.json({ ok: true, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

// Login existing user
app.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ ok: false, error: "Missing credentials" });
  }
  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ ok: false, error: "Invalid email or password" });
    const okPass = await bcrypt.compare(password, user.passwordHash);
    if (!okPass) return res.status(401).json({ ok: false, error: "Invalid email or password" });
    const token = jwt.sign({ sub: user._id, email: user.email, username: user.username }, process.env.JWT_SECRET || "devsecret", { expiresIn: "7d" });
    return res.json({ ok: true, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

// Return current user (protected)
app.get("/me", authenticate, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.sub).select("-passwordHash");
    return res.json({ ok: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

app.post("/newOrder", async (req, res) => {
  const payload = {
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    createdAt: new Date(),
  };

  if (dbConnected) {
    try {
      let newOrder = new OrdersModel(payload);
      await newOrder.save();
      return res.json({ ok: true });
    } catch (err) {
      console.log("Failed to save order to DB:", err.message || err);
      return res.status(500).json({ ok: false, error: "DB error" });
    }
  }

  // fallback: store in-memory
  const id = sampleOrders.length + 1;
  const order = Object.assign({ id }, payload);
  sampleOrders.push(order);

  res.json({ ok: true, order });
});

app.listen(PORT, () => {
  console.log("App started!");
  if (uri) {
    mongoose
      .connect(uri)
      .then(() => {
        dbConnected = true;
        console.log("DB connected");
      })
      .catch((err) => {
        console.error("DB connection failed:", err && err.message ? err.message : err);
      });
  } else {
    console.log("No MongoDB URI configured; using in-memory fallback data.");
  }
});
