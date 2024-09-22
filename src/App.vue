<template>
  <div class="content">
    <!-- <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p> -->
    <van-button type="primary">Hrllo</van-button>
    <van-tag type="primary">标签</van-tag>
    <van-area title="标题" :area-list="areaList" />
  </div>
</template>
<script setup>
const areaList = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    // ....
  },
};

</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
