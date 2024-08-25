<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <div class="svg-container">
        <!-- <svg width="50" height="50" style="color: red">
            <use href="#more"></use>
          </svg>-->
        <!-- 这里的svg是自定义的svg组件 -->
        <CustomSvg></CustomSvg>
        <Icon prefix="" name="more" :style="{ width: '30px', height: '30px', color: 'red' }" />
        <Icon prefix="" name="arrow" class="arrow" />
        <!-- 引入iconfont的图标 -->
        <Icon name="aixin" class="aixin" />
      </div>
      <!-- <Loading width="100" height="100" out-side-color="cornflowerblue" in-side-color="red">
        <div style="color: cornflowerblue">加载中...</div>
      </Loading> -->
      <Loading width="100" height="100">
        <div style="color: cornflowerblue">加载中...</div>
      </Loading>
      <div style="width: 50%; background: #333; color: #fff; text-align: center">
        <FlyBox duration="5" star-len="100" star-color="rgb(100, 237, 132)">
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </FlyBox>
      </div>
      <div style="width: 100%; background: #333; color: #fff; text-align: center">
        <FlyBox>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </FlyBox>
      </div>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

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
