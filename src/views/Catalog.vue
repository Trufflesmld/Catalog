<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <SideBar />
      <List/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import List from "@/components/List.vue";

export default {
  components: {
    NavBar,
    SideBar,
    List
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
.main {
  position: relative;
  display: block;
  margin-left: 10vw;
  margin-right: 10vw;
  top: 8vh;
  width: 80vw;
  height: auto;
}

</style>
