<script setup>

definePageMeta({
  layout:'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')
useHead({
  title:'Products',
  meta: [
    {
      name: 'description',
      content:'Products of Nuxt',
    }
  ],
})
</script>

<template>
<div>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in products">
      <ProductCard :product="product"/>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>