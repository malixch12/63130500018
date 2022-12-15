<script setup>
</script>
 
<template>
<body>
    <nav
      class="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
      <div>
        <h2 class="text-3xl font-bold">
          <a>Apple <span class="text-blue-600">Store</span></a>
        </h2>
      </div>
      
      <div class="mt-5 md:mt-0">
        <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center">
          <li>
            <router-link :to="{name:'productView'}"
            class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
            Products
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'purchaseView'}"
            class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
            Purchase
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'queryView'}"
            class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
            Query
            </router-link>
          </li>
        </ul>
      </div>
    </nav> 
   
  </body>
</template>
 
<style>

</style>


