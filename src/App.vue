<template>
  <HomePage></HomePage>
</template>

<script>
import HomePage from "@/components/HomePage.vue";

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #F9F9F9;
  height: 100%;
}

#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}




</style>
