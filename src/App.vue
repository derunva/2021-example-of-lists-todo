<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="wrapper">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  background-image: url('../public/img/bg.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.wrapper {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
