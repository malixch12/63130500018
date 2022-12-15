var admin = require("firebase-admin");
const {getFirestore} = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://int305fb018.firebaseio.com"
});

var db = getFirestore();

var customers =[{
    "id":"Charidaporn",
    "Fname" : "Charidaporn",
    "Lname" : "Chuangdonphai",
    "Email" : "Chari12@gmail.com",
},
{
    "id":"Kanyapat",
    "Fname" : "Kanyapat",
    "Lname" : "Wittayamanitkul",
    "Email" : "Winner03@gmail.com",
},
{
    "id":"Manassinee",
    "Fname" : "Manassinee",
    "Lname" : "Vetvithan",
    "Email" : "Baifern96@gmail.com"
},
{
    "id":"Theerut",
    "Fname" : "Theerut",
    "Lname" : "Thankan",
    "Email" : "Gus62@gmail.com"
},
{
    "id":"Thanawat",
    "Fname" : "Thanawat",
    "Lname" : "Naeching",
    "Email" : "Jack51@gmail.com"
},
{
    "id":"Nuttawat",
    "Fname" : "Nuttawat",
    "Lname" : "Rodsomboon",
    "Email" : "nut69@gmail.com"
},
{
    "id":"Buratsakorn",
    "Fname" : "Burstsakorn",
    "Lname" : "Boonma",
    "Email" : "bew74@gmail.com"
},
{
    "id":"Munyatee",
    "Fname" : "Munyatee",
    "Lname" : "Supsumarn",
    "Email" : "mun37@gmail.com"
},
{
    "id":"Suttida",
    "Fname" : "Suttida",
    "Lname" : "Srisuwan",
    "Email" : "kaew40@gmail.com"
},
{
    "id":"Suriwong",
    "Fname" : "Suriwong",
    "Lname" : "Bualek",
    "Email" : "mind17@gmail.com"
},  
]

customers.forEach(function(obj){
    db.collection("customers").add({
        id:obj.id,
        Fname:obj.Fname,
        Lname:obj.Lname,
        Email:obj.Email,
    }).then(docRef=>{console.log("Document written with ID:"+docRef.id)})
});
   
