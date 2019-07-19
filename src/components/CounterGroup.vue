<template>
  <div id="app">
    <input type="text" v-model.number="counterNum">
    <div v-for="(item,index) in counterNum" :key="index">
        <Count></Count>
    </div>
  </div>
</template>

<script>
import Count from './Count.vue'
export default {
  name: 'CounterGroup',
   data() {
    return{
        counterNum: 0
       //props: ['counterNum']
    }
  },
   components: {
    Count
  },
  
  methods:{
  }
}
</script>