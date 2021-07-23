<template>
  <div class="sideBar">
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
</template>

<style scoped>
.sideBar {
  position: fixed;
  width: 25vw;
  height: 92vh;
  border-right: solid 1px #d8d8d8;
  border-left: solid 1px #d8d8d8;
  margin: 0;
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
  height: 50%;
  width: 100%;
}
.searchInput {
  height: 10%;
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
</style>
