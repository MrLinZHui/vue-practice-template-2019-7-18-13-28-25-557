<template>
  <div id="app">
        <button @click="increse(1)">+</button>
        <input type="text" v-model="this.$store.state.count">
        <button @click="increse(-1)">-</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return{
     //clumvalue: this.$store.state.count
    }
  },
  methods:{
    increse(data){
      //this.clumvalue++;
      //this.$store.state.count++;
      this.$store.commit("getCount",data)
    }
  //   desc(){
  //     //this.clumvalue--;
  //     this.$store.state.count--;
  //   }
  // }
}
}
</script>