<template>
  <div>
    <header-one :citys="city"></header-one>
    <foot-bom :goods="good"></foot-bom>
    <p>{{city}}</p>
    <button @click="hold">点击</button>
    <router-link to="/home">点击</router-link>
    <el-input class="texteler" v-model="input" placeholder="输入"></el-input>
    {{this.input}}
    <div @click="gods()">{{this.$store.state.city}}</div>
    <div></div>
  </div>
</template>

<script>
import HeaderOne from './Home/header'
import FootBom from './home/foot'
export default {
  name: 'Eninb',
  components: {
    HeaderOne,
    FootBom
  },
  data () {
    return {
      city: '北京',
      good: [5, 5],
      input: ''
    }
  },
  methods: {
    hold () {
      console.log(12)
    },
    gods () {
      this.$store.dispatch('change', 'city1')
      // console.log(22)
    }
  }
}
</script>

<style scoped>
.texteler{
  width:200px;
}
</style>
