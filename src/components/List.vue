<template>
  <div class="listWrapper">
    <div class="list">
      <WorkerCard
        v-for="workerInf of allWorkers"
        :key="workerInf.id"
        :workerInf="workerInf"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WorkerCard from "@/components/WorkerCard.vue";
export default {
  components: {
    WorkerCard,
  },
  computed: {
    ...mapGetters(["allWorkers"]),
  },
  methods: mapActions(["fetchWorkersData"]),
  mounted() {
    this.fetchWorkersData();
  },
};
</script>

<style scoped>
.listWrapper {
  position: relative;
  left: calc(25vw + 2px);
  display: block;
  width: 55vw;
  min-height: 92vh;
  border-right: solid 1px #d8d8d8;
  z-index: 0;
}
.list {
  position: relative;
  padding-top: 1vw;
  padding-bottom: 1vw;
  /*margin: 0 1vw 0 1vw;
  word-break: break-all;*/
}

@media screen and (max-width: 768px) {
  .listWrapper {
    left: 0;
    width: 80vw;
    border: 0;
    margin-bottom: 16vh;
  }
  .borderRight {
    display: none;
  }
}
</style>
