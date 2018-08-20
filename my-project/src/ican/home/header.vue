<template>
  <div>
    第一个页面
    {{citys}}
    <p v-for="item in arr" :key="item.id">{{item.name}}</p>
  </div>
</template>
<script>
import { getList } from '../../request/api.js'
export default {
  name: 'HeaderOne',
  props: {
    citys: String
    /* {
      type:String,
      default: ''
    } */
  },
  data () {
    return {
      arr: []
    }
  },
  mounted: async function () {
    var self = this;
    // this.$http.get("/api/v1/products/predictions2")
    //   .then((res) => {
    //     console.log(res)
    //     self.arr = res.data.data.list;
    //     console.log(self.arr);
    //   })
    const resp = await getList();
    console.log(resp);
    self.arr = resp.data.data.list
  }
}
</script>

<style scoped>

</style>
