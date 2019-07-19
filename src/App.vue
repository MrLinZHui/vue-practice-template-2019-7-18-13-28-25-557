<template>
  <div id="app" >
      <!--<input type="text" v-model="counterNum">-->
      <CounterGroup></CounterGroup>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CounterGroup from './components/CounterGroup.vue'
export default {
  name: 'app',
  props: ['counterNum'],
  data() {
    return{
     // counterNum: 0
    }
  },
  components: {
    HelloWorld,
    CounterGroup
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
