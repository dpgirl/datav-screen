<script setup></script>

<template>
  <datavContainer :options="{ width: 3840, height: 2160 }">
    <div class="test">6666</div>
  </datavContainer>

  <!-- <RouterView /> -->
</template>

<style>
/** 初始化为全屏，尺寸会随着浏览器窗口变化而变化；且需为全局 */
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
}
.test {
  font-size: 140px;
}
</style>
<style scoped>
.svg-container {
  color: cornflowerblue;
}
.arrow {
  width: 20px;
  height: 20px;
  color: orange;
}
.aixin {
  width: 30px;
  height: 30px;
  color: cornflowerblue;
}
</style>
