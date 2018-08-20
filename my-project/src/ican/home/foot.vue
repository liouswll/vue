<template>
<div>
  第二个页面
  <p>{{goods}}</p>
</div>
</template>

<script>
export default {
  name: 'FootBom',
  props: {
    goods: Array
  /* {
      type: Array,
      default: []
    } */
  }
}
</script>

<style scoped>

</style>

}
