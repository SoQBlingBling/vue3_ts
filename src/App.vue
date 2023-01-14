<template>
  <router-view></router-view>
    <canvas width="1920" height="1080" style="position: fixed; left: 0px; top: 0px; z-index: 2147483647; pointer-events: none;"></canvas>

</template>

<style lang="scss">
body {
  overflow: hidden;
}
*{
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1000px !important;
  height: 100vh !important;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
