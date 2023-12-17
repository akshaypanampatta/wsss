
<template>
  <div>
    <!-- <MainHeader></MainHeader> -->
    <div class="p-5">
      <div class="sidebar" :class="expand_bar?'sidebar_open':''">
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
        <div class="text-info" @click="expand_bar=!expand_bar">Expand</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      expand_bar : false,
    };
  },
  mounted(){
  }
};
</script>
<style >
.sidebar_open li{
  color: red
}
@import './style/style.css';
  
</style>

