<script setup>
import {onMounted, ref} from "vue";
import {getDocs,collection} from "firebase/firestore"
import db from "../firebase/init.js"
const customers = ref([]);
async function getCustomers(){
  const customersRef = collection(db,"customers");
  const customersSnap = await getDocs(customersRef);
  customersSnap.forEach((c)=> {
    customers.value.push(c.data())
  });
}
onMounted(async()=>{
  await getCustomers()
})
</script>
<template>
 
 <div class="flex justify-center min-h-screen bg-gray-900 text-white">
        {{customers}}
    </div>
</template>
 
<style>

</style>