<template>
  <!-- <div id="app">
    <button @click="increse()">+</button>
    <input type="text" v-model="clumvalue">
    <button @click="desc()">-</button>
  </div> -->
  <div id="app">
      <Count></Count>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Count from './components/Count.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Count
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
