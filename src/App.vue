<template>
<router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

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
  background: var(--color-background-body);
  height: 100%;
}

#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
