<template>
  <div id="app">
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #dfe5f7;
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
