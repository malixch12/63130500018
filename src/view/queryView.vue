<script setup>
import { ref, onMounted, watch,reactive } from "vue";
import { collection, query, where, getDocs, limit, orderBy, getCountFromServer, doc } from "firebase/firestore";
import db from "../firebase/init.js";
import product from "../components/product.vue";
import customer from "../components/customer.vue";
import purchase from "../components/purchase.vue";

const products = ref([]);
const countData = ref(0);

async function getProducts(){
    const productsRef = collection(db,'products')
    const qry =  await getDocs(productsRef)
     products.value=[]
     qry.forEach(async(doc)=>{
        let data = doc.data();
        data.id = doc.id;

        products.value.push(data);
     })   
}

const purchases = ref([]);
async function getPurchases(){
    const purchasesRef = collection(db,'purchases')
    const qry =  await getDocs(purchasesRef)
     purchases.value=[]
     qry.forEach(async(doc)=>{
        let data = doc.data();
        data.id = doc.id;

        purchases.value.push(data);
     })   
}

const customers = ref([]);
async function getCustomers(){
    const customersRef = collection(db,'cutomers')
    const qry =  await getDocs(customersRef)
     customers.value=[]
     qry.forEach(async(doc)=>{
        let data = doc.data();
        data.id = doc.id;

        customers.value.push(data);
     })   
}



const number =ref()
let qry = null;

async function querylist(index){
    number.value = index
    if(index == 1){
console.log('ข้อ 1')
const productRef = collection(db,"products");
qry = query(productRef, where("id","==","IPhone12"));

    }else if(index == 2){
        console.log('ข้อ 2')
        const purchaseRef = collection(db,"purchases");
        qry = query(purchaseRef, where("model","==","IPhone11Pro"));
    }else if(index == 3){
        console.log('ข้อ 3')
        const productRef = collection(db,"products");
        qry = query(productRef)
        countData.value = (await getCountFromServer(qry)).data().count;

    }else if(index == 4){
        console.log('ข้อ 4')
        const purchaseRef = collection(db,"purchases");
        qry = query(purchaseRef, where("customerId","==","Charidaporn"));

    }else if(index == 5){
        console.log('ข้อ 5')
        const purchaseRef = collection(db,"purchases");
        qry = query(purchaseRef, where("model",">",1));
    }else if(index == 6){
        console.log('ข้อ 6')
        const productRef = collection(db,"products");
        const IPadPro = query(productRef,where("id","==","IPadPro"));
        const orderIPad = query(IPadPro,orderBy("price","desc"))
        qry=query(orderIPad)
       
       


    }else if(index == 7){
        console.log('ข้อ 7')
        const customersRef = collection(db,"customers");
        qry = query(customersRef,orderBy("FName","asc"));

    }else if(index == 8){
        console.log('ข้อ 8')
    }else if(index == 9){
        console.log('ข้อ 9')
    }else if(index == 10){
        console.log('ข้อ 10')
        const productRef = collection(db,"products");
        qry = query(productRef, where("price","array-contains",19900))
    }

    const querySnap = await getDocs(qry);
    products.value = []
    querySnap.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      products.value.push(data);
    });
}


onMounted(()=>{
    getProducts()
})



</script>
 
<template>
    <div class="flex justify-center min-h-screen bg-gray-900">
        <div class="text-white text-center ">
            <h1 class="text-6xl font-bold mt-12 mb-12">Query</h1>
            
                <p @click="querylist(1)" class="text-xl mb-5 text-left hover:text-blue-500"> 1. List the color all of IPhone12.</p>
                <div v-if="number == 1" v-for="product in products"> 
                    <li  class="text-left mb-5 " v-for="color in product.color" >
                        {{color}}
                    </li>
                </div>

                <p  @click="querylist(2)" class="text-xl mb-5 text-left hover:text-blue-500">2. List the customer name who bought an IPhone 11 Pro. </p>
                <div v-if="number == 2"  v-for="customer in products">
                    <li class="text-left mb-5 ">
                        {{customer.customerId}}

                    </li>
                </div>

                <p @click="querylist(3)" class="text-xl mb-5 text-left hover:text-blue-500">3. How many products in AppleStore ?</p>
                <div class="text-left mb-5 " v-if="number == 3" >
                    {{countData}}
                </div>

                <p @click="querylist(4)" class="text-xl mb-5 text-left hover:text-blue-500">4. What is product Charidaporn have ?</p>
                <div v-if="number == 4" v-for="customer in products">
                    <li class="text-left mb-5 ">
                        {{customer.model}}

                    </li>
                </div>

                <p @click="querylist(5)" class="text-xl mb-5 text-left hover:text-blue-500">5. Who have one more products?</p>
                <div v-if="number == 5"  v-for="customer in products">
                    <li class="text-left mb-5" >
                        {{customer.customerId}}

                    </li>
                </div>

                <p @click="querylist(6)" class="text-xl mb-5 text-left hover:text-blue-500">6. Order the price of IPadPro by descending</p>
                <div v-if="number == 6" v-for="product in products">
                    <li class="text-left mb-5 "  v-for="price in product.price">
                        {{price}}
                    </li>

                </div>

                <p @click="querylist(7)" class="text-xl mb-5 text-left hover:text-blue-500">7. What product is expensive in AppleStore</p>
                <div v-if="number == 7">
                   
                </div>

                <p @click="querylist(8)" class="text-xl mb-5 text-left hover:text-blue-500">8. Who bought the product lastest ? </p>
                <div v-if="number == 8">1</div>

                <p @click="querylist(9)" class="text-xl mb-5 text-left hover:text-blue-500">9. What is the product that soldout ? </p>
                <div v-if="number == 9">1</div>

                <p @click="querylist(10)" class="text-xl mb-5 text-left hover:text-blue-500">10. List 5 product that have price morethan 17900.</p>
                <div v-if="number == 10" v-for="product in products">
                    <li class="text-left mb-5">
                        {{product.model}}
                    </li>
               </div>

                
                
                


           
        </div>
        

        
    </div>



</template>
 
<style>

</style>