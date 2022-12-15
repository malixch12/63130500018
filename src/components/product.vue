<script setup>
import {onMounted, ref} from "vue";
import {getDocs,collection} from "firebase/firestore"
import db from "../firebase/init.js"
const products = ref([]);
async function getProducts(){
  const productsRef = collection(db,"products");
  const productSnap = await getDocs(productsRef);
  productSnap.forEach((p)=> {
    products.value.push(p.data())
  });
}
onMounted(async()=>{
  await getProducts()
})
</script>
 
<template>
    <div class="flex justify-center min-h-screen bg-gray-900 text-white">
        {{products}}
    </div>

</template>
 
<style>

</style>


<!-- component -->
