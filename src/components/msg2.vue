<template>
  <div>
    <button @click="add">修改msg1组件的值</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.state.msg = "我是msg2修改后的值" + Math.random() * 100;
    }
  }
};
</script>

<style scoped>
div{
    height: 100px;
    width: 100px;
    background-color: pink;
}
</style>