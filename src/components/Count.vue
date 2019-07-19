<template>
  <div id="app">
        <button @click="increse()">+</button>
        <input type="text" v-model="clumvalue">
        <button @click="desc()">-</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return{
      clumvalue: 0
    }
  },
  methods:{
    increse(){
      this.clumvalue++;
    },
    desc(){
      this.clumvalue--;
    }
  }
}
</script>