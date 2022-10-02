<template>
  <component :is="$route.meta.layout || 'div'"></component>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div",
    };
  },
  created() {
    console.log(this.$route.meta.layout);
  },
  mounted() {},
  components: {},
};
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
