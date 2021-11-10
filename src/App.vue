<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Roster Selection</router-link> |
      <router-link to="/head-to-head">Head to Head</router-link> |
      <router-link to="/featured-player">Featured Player</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  computed: {
    b: function () {
      return 5;
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}


#app {
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
  margin: 15px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px; */
}

#app a {
  color: #b32222;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
