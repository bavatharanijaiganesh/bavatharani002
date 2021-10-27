<template>
  <heading/>
  <h1>this is app component page</h1>
</template>

<script>
import heading from "./components/heading.vue";
export default {
name: 'App',
  components: {
    heading
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
