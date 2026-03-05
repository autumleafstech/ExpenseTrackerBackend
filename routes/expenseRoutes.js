const express = require("express");
const db = require("../configDB/configDB")
const router= express.Router();

router.post("/addexpenses",(req,res) => {
    const {date,category,vendor,amount,description} = req.body;
const sql = `
  INSERT INTO expense (date, category, vendor, amount, description)
  VALUES (?,?,?,?,?)
`;
db.query(sql, [date, category, vendor, amount, description], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Insert failed" });
        }

        res.status(201).json({
            message: "Expense added successfully",
            id: result.insertId
        });
    })
})

router.get("/getexpenses",(req,res) => {
    const sql = `select * from expense order by id asc`;
    console.log("Get expenses")
    db.query(sql,(err,result) => {
        if(err) {
            console.error(err);
            return res.status(500).json({message:"Failed to fetch expenses"});
        }
        res.status(200).json(result);
    })
})
router.delete("/deleteexpense/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log("delet")
    const sql = "DELETE FROM expense WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Delete failed" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json({ message: "Expense deleted successfully" });
    });
});
module.exports = router;