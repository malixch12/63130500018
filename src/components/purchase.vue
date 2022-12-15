<script setup>
import {onMounted, ref} from "vue";
import {getDocs,collection} from "firebase/firestore"
import db from "../firebase/init.js"
const purchases = ref([]);
async function getPurchases(){
  const purchasesRef = collection(db,"purchases");
  const purchaseSnap = await getDocs(purchasesRef);
  purchaseSnap.forEach((pc)=> {
    purchases.value.push(pc.data())
  });
}
onMounted(async()=>{
  await getPurchases()
})
</script>
 
<template>
    <div class="flex justify-center min-h-screen bg-gray-900 text-white">
      {{purchases}}
    </div>

</template>
 
<style>

</style>


<!-- component -->
