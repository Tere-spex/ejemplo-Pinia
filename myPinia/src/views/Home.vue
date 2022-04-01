<template>
  <div>Home</div>
  <div>
     <div v-for="product in products" :key="product"></div>
  </div>
</template>

<script>
export default {
data(){
    return {
        products:{
            id: 1,
            price: 10,
            image: "https://picsum.photos/id/237/200/300",
        }
    }
}
}
</script>
