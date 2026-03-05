const express = require('express');
const cors = require("cors")
const app = express();
const PORT = 3000

const expenseRoutes = require("../routes/expenseRoutes")
app.use(cors());
app.use(express.json());

app.use("/api" , expenseRoutes);


app.listen(PORT,() => {
    console.log(`server is running on port${PORT}`)
})