import firebase from "firebase/app";
import "firebase/database";

export default {
  actions: {
    async fetchWorkersData(ctx) {
      firebase
        .database()
        .ref("catalog")
        .on("value", function(snapshot) {
          console.log(2);
          const data = snapshot.val();
          ctx.commit("updateWorkersData", data);
        });
        /*firebase.database().ref().child("catalog").get().then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          })*/
    },
  },
  mutations: {
    updateWorkersData(state, workersData) {
      state.workersData = workersData;
    },
  },
  state: {
    workersData: [],
  },
  getters: {
    allWorkers(state) {
      return state.workersData;
    },
  },
};
