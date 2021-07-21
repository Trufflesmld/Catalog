<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
</style>