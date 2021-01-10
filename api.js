const express = require('express');
const router = express.Router();
const Product = require('./models/product');
const Carousel = require('./models/carousel');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SK);




router.get('/',(req,res)=>{
    res.send("hello");
});

router.get('/products',async(req,res)=>{
    Product.find()
    .then(data =>{
        res.json(data);
    }).catch(err =>{
        console.log(err)
    })
    
});

router.post('/carousel',async(req,res)=>{
    const { imageUrl } = req.body;
    const carousel = new Carousel({
        imageUrl
    })
    carousel.save()
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        console.log(err)
    })

})

router.get('/carousel',async(req,res)=>{
    Carousel.find()
    .then(data =>{
        res.json(data);
    }).catch(err =>{
        console.log(err)
    })

})

router.post('/products',async(req,res)=>{
    const { title,price,rating,imageUrl } = req.body;
    const product = new Product({
      title,
      price,
      rating,
      imageUrl
    })
    product.save()
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        console.log(err)
    })
});


router.post('/payments/create',async(req,res)=>{
    const total = req.query.total;

    console.log(`Payment req recieved total Ammount : ${total}`);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
      });
    
    // status 201 is OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
})


// searchbar api
router.get('/query',async(req,res)=>{
    const search = req.query.q;
    // console.log("query is :",search)
    Product.find({title:{$regex: search,$options:"$i"}})
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err)
    })

})





module.exports = router;