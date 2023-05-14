const express = require("express");
const router = express.Router();
const Order = require("../models/Orders")


router.post('/orderData', async (req, res) => {
    const { order_data, email, order_date } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    let data = order_data || [];
    data.splice(0, 0, { Order_date: order_date });
  
    try {
      let eId = await Order.findOne({ email });
  
      if (eId === null) {
        await Order.create({
          email,
          order_data: [data],
        });
      } else {
        await Order.findOneAndUpdate(
          { email },
          { $push: { order_data: data } }
        );
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

router.post('/myorderData', async (req, res) => {
    try {
        let myData = await Order.findOne({ 'email': req.body.email });
        res.json({ orderData: myData })
    } catch (error) {
        res.send('Server Error', error.message);
    }
})


module.exports = router;



/*     let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })

    // if eamil is not insert in db then create : else : insertMany()
    let eId = await Order.findOne({ 'email': req.body.email })

    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message);
            res.send("Server Error", error.message)
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } })
                .then(() => res.json({ success: true }))
        } catch (error) {
            res.send("Server Error", error.message)
        }
    }
} */