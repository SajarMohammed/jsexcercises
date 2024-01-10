<template>
  <div class="product-sec">
    <ProductCard v-for="product in products" :product="product" :key="product.id"
    @cardClick="handleClick"/>
  </div>

</template>

<script setup>
import { ref } from "vue"
  import ProductCard from "./ProductCard.vue"
  const products = ref([
    {id:1,name:"Apple",desc:"Apples are good to health",price:100},
    {id:2,name:"Orange",desc:"Orange are acidic in nature",price:180},
    {id:2,name:"Kiwi",desc:"All kiwi's can't feed",price:140},
    {id:2,name:"Watermelon",desc:"Watermelon has a lot of water",price:60},
    {id:2,name:"Guava",desc:"Goa doesn't have Guava",price:110},
    {id:2,name:"Jackfruit",desc:"It happened when Jack got a fruit",price:80},
    {id:2,name:"Mulberry",desc:"Hey Berry, no Buddy",price:120},
  ])
  const handleClick=(clickedPdt)=>{
    alert(`you clicked ${clickedPdt.name}`)
  }
</script>

<style>
  .product-sec{
    display: flex;
    flex-wrap: wrap;
  }
</style>