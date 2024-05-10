<script setup >
const { data: message } = await useFetch('/api/testApi?name=test',
    {
      method: 'post',
      body: { age: 30 }
    })
const { data } = await useFetch('/api/testFetch')
const { data: currency } = await useFetch('/api/currency/KZT')
</script>

<template>
  <div>About</div>
  <p>{{ message }}</p>
  <p>{{data.RUB}}</p>
  <p>{{currency}}</p>
</template>

<style scoped>

</style>