<template>
  <div class="box">
    <div>{{$store.state.msg}}</div>
    <div>{{$store.getters.db2}}</div>
    <button >点击双倍快乐</button>
  </div>
</template>

<script>
export default {
  methods: {
   
  }
};
</script>

<style scoped>
.box {
  height: 200px;
  width: 200px;
  border: 1px solid #000;
}
</style>