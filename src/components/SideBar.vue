<template>
  <div class="sideBar">
    <div class="filters" :class="{ filtersActive: filtersActivity }">
      <div class="sorting">
        <span class="logo">Sorting</span>
      </div>
      <div class="search">
        <span class="logo">Search</span>
        <div class="searchInput">
          <input type="search" placeholder="Поиск" />
          <select name="select">
            <option value="name" selected>Имя</option>
            <option value="firstName">Фамилия</option>
            <option value="id">Табельный номер</option>
            <option value="phone">Мобильный номер</option>
          </select>
        </div>
      </div>
    </div>
    <div class="filtersBtn" @click="activeFilters"><span>Filters</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtersActivity: false,
    };
  },
  methods: {
    activeFilters() {
      this.filtersActivity = !this.filtersActivity;
      return this.filtersActivity;
    },
  },
};
</script>

<style scoped>
.sideBar {
  position: fixed;
  width: 25vw;
  height: 92vh;
  border-right: solid 1px #d8d8d8;
  border-left: solid 1px #d8d8d8;
  margin: 0;
}
.filters {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
}
.logo {
  margin-top: 2%;
  font-size: 24px;
}
.search {
  height: 80%;
  width: 100%;
}
.searchInput {
  height: 5%;
  width: 100%;
  display: flex;
  color: black;
  border-top: solid 1px #d8d8d8;
  border-bottom: solid 1px #d8d8d8;
  margin-top: 4%;
}
.searchInput select {
  outline: none;
  border: 0px;
  background-color: #d8d8d8;
  width: 30%;
}
.searchInput input {
  outline: none;
  border: 0px;
  width: 70%;
}

.sorting {
  height: 20%;
  width: 100%;
  border-bottom: solid 1px #d8d8d8;
}

.filtersBtn {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .sorting {
    border-bottom: solid 1px #005b8e;
  }
  .searchInput {
    height: 10%;
  }
  .sideBar {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #005b8e;
    width: 100vw;
    height: 8vh;
    z-index: 3;
    border: 0;
  }
  .filters {
    position: absolute;
    right: 0px;
    /*height: 92vh;*/
    bottom: 8vh;
    margin: 0;
    color: rgb(253, 251, 251);
    background-color: #0871ad;
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
  .filtersBtn {
    color: rgb(253, 251, 251);
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .filtersBtn span {
    width: 100%;
  }
  .filtersActive {
    height: 60vh;
    opacity: 1;
  }
}
</style>
