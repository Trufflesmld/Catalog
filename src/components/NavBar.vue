<template>
  <div class="nav">
    <div class="logo">
      <h4>{{ title }}</h4>
    </div>
    <ul class="navLinks" v-bind:class="{ navActive: navActivity }">
      <li>
        <router-link to="/"><span>Home</span></router-link>
      </li>
      <li>
        <router-link to="/"><span>Account</span></router-link>
      </li>
    </ul>
    <div class="burger" v-on:click="activeBorderNav">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.meta.title,
      navActivity: false,
    };
  },
  methods: {
    activeBorderNav() {
      this.navActivity = !this.navActivity;
      return this.navActivity;
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  background-color: #005b8e;
}
.logo {
  color: rgb(253, 251, 251);
  text-transform: uppercase;
  letter-spacing: 3px;
}
.navLinks {
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 0;
  padding: 0;
  height: 8vh;
}

.navLinks li {
  list-style: none;
  width: 100%;
}

.navLinks a {
  color: rgb(253, 251, 251);
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
  display: block;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navLinks span {
  width: 100%;
}

.navLinks li:hover {
  background-color: #0871ad;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: rgb(253, 251, 251);
  margin: 5px;
}

@media screen and (max-width: 1024px) {
  .navLinks {
    width: 20%;
  }
}

@media screen and (max-width: 768px) {
  .navLinks {
    position: absolute;
    right: 0px;
    /*height: 92vh;*/
    top: 8vh;
    margin: 0;
    background-color: #005b8e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    width: 100%;
    transform: translateY(0%);
    /*transition: transform 0.5s ease-in;*/
    height: 0;
    font-size: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.5s all;
  }
  .navLinks li {
    height: 100%;
  }
  .burger {
    display: block;
  }
  .navActive {
    height: 8vh;
    opacity: 1;
  }
}
</style>
