const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, putFortune, delFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/fortune", addFortune);
app.put("/api/fortune/:id", putFortune);
app.delete("/api/fortune/:id", delFortune);

app.listen(4000, () => console.log("Server running on 4000"));
