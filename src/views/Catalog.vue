<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <SideBar />
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
.main {
  z-index: -1;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 8vh;
  width: 80vw;
  height: auto;
}
.list {
  position: relative;
  left: 25vw;
  display: block;
  width: 55vw;

}
</style>
