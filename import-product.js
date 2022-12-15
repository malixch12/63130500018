var admin = require("firebase-admin");
const {getFirestore} = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://int305fb018.firebaseio.com"
});

var db = getFirestore();

var products = [
    {
        "id" : "IPhone11",
        "model" : {
            "m1" : "Pro",
            "m2" : "ProMax"
        },
        "color" : ["space-gray","gold","silver","midnight-green"],
        "price" : [35900,41900,48900],
        "onSale" : false
    },
    {
        "id" : "IPhone12",
        "model" : {
            "m1" : "Pro",
            "m2" : "ProMax"
        },
        "color" : ["graphite","gold","silver","pacific-blue"],
        "price" : [31590,34900,36900,40900,43900],
        "onSale" : false
    },
    {
        "id" : "IPhone13",
        "model" : {
            "m1" : "Pro",
            "m2" : "ProMax"
        },
        "color" : ["graphite","gold","silver","sierra-blue"],
        "price" : [38900,42900,46900,50900,54900,58900,62900],
        "onSale" : true
    },
    {
        "id" : "IPhone14",
        "model" : {
            "m1" : "Pro",
            "m2" : "ProMax"
        },
        "color" : ["graphite","gold","silver","deep-purple"],
        "price" : [41900,44900,45900,48900,54900,57900,63900,66900],
        "onSale" : true
    },
    {
        "id" : "IPadAir",
        "model" : {
            "m1" : "Air4",
            "m2" : "Air5"
        },
        "color" : ["pink-gold","purple","star-light","blue"],
        "price" : [20900,25900,30900],
        "onSale" : true
    },
    {
        "id" : "IPadPro",
        "model" : {
            "m1" : "ProM1",
            "m2" : "ProM2"
        },
        "color" : ["space-gray","silver"],
        "price" : [27900,31900,32900,36900,38900,43900,45900,50400,52900,57900],
        "onSale" : true
    },
    {
        "id" : "WatchSE",
        "model" : {
            "m1" : "SE1",
            "m2" : "SE2"
        },
        "color" : ["space-gray","silver"],
        "price" : [9900,13900,15900,17900],
        "onSale" : true
    },
    {
        "id" : "WatchSeries",
        "model" : {
            "m1" : "S7",
            "m2" : "S8"
        },
        "color" : ["space-gray","star-light","red-product","silver"],
        "price" : [14900,16900,17900,19900],
        "onSale" : true
    },
    {
        "id" : "AirpodPro",
        "model" : {
            "m1" : "Pro2",
            "m2" : "ProMax"
        },
        "color" : ["white","space-gray","green","blue","red-product"],
        "price" : [8990,19900],
        "onSale" : true
    },
    {
        "id" : "Macbook",
        "model" : {
            "m1" : "Air",
            "m2" : "Pro"
        },
        "color" : ["midnight","star-light","space-gray","silver"],
        "price" : [8990,19900],
        "onSale" : true
    }
]

products.forEach(function(obj){
    db.collection("products").add({
        id:obj.id,
        model:obj.model,
        color:obj.color,
        price:obj.price,
        onSale:obj.onSale,
    }).then(docRef=>{console.log("Document written with ID:"+docRef.id)})
});
   

    
