<template>
  <div class="nav">
    <div class="logo">
      <h4>{{ title }}</h4>
    </div>
    <ul class="navLinks">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Account</router-link>
      </li>
    </ul>
    <div class="burger">
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
    };
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
  min-height: 8vh;
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
  height: 100%;
  text-align: center;
}

.navLinks li:hover {
  background-color: #0871ad;
}

.burger {
  display: none;
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
    height: 92vh;
    top: 8vh;
    margin: 0;
    background-color: #005b8e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }
  .navLinks li {
    width: 100%;
    height: 5%;
  }
  .navLinks a {
    display: block;
    height: 100%;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
