<template>
  <Headers></Headers>

  <nav_search></nav_search>

  <!-- 路由组件出口的地方-->
  <router-view></router-view>

  <!-- 在Home、Search中显示，在登入、注册中隐藏-->
  <Footer v-show="$route.meta.show"></Footer>
</template>

<script>
import Headers from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import nav_search from "./components/nav_search/index.vue";
export default {
  name: 'APP',
  data(){

  },
  components:{
    Headers,
    Footer,
    nav_search,
  },
}
</script>

<style scoped>

</style>
