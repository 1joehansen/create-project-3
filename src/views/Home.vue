<template>
  <div class="home">
    <img class='baseball' alt="Vue logo" src="../assets/baseball_logo.png" width="150px">

    <HelloWorld msg="Select players for teams A and B"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style scoped>



.baseball{
  top: 20px;
  position: relative;
}

.home{
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
  text-align: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>