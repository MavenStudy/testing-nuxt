<script setup >
const { id } = useRoute().params
const uri  = 'https://fakestoreapi.com/products/' + id

const {data: product } = await useFetch(uri)

if(!product.value){
  throw createError({
    statusCode:404,
    statusMessage:'Product not found',
    fatal: true,
  })
}

definePageMeta({
  layout:'products'
})

</script>

<template>
  <Head>
    <Title> SITE | {{product.title}}</Title>
    <Meta name="description" :content="product.description"></Meta>
  </Head>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<style scoped>

</style>