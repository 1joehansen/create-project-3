<template>
  <div class="hello">
    <h2 class="undertext">{{ msg }}</h2>
    <p class="undertext">(Click a rostered player to remove them from the team)</p>

    <div class="container">
      <div  v-for="player in this.$root.$data.players" :key="player.id">
        <div class="player-tile" @mouseover="hover = player.id" @mouseleave="hover = null">
          <img class='player-img' :src="'../images/players/'+ player.id + '.jpg'">
          <p>{{ player.name }}</p>
          <button v-show="hover===player.id" v-on:click="addToA(player)" @mouseover="hover = player.id" @mouseleave="hover = null" class="team-btn">TEAM A</button>
          <button v-show="hover===player.id" v-on:click="addToB(player)" @mouseover="hover = player.id" @mouseleave="hover = null" class="team-btn">TEAM B</button>
        </div>
      </div>
    </div>

    <div class="top left">
      <h2>Team A</h2>
      <div  v-for="player in this.$root.$data.team_a" :key="player.id">
        <div class="team-player-tile">
          <img class='red-x' :src="'../images/red_x.png'" v-on:click="rmFromA(player)">
          <img class='sm' :src="'../images/players/'+ player.id + '.jpg'" v-on:click="rmFromA(player)">
          {{ player.name }}
        </div>
      </div>
    </div>

    <div class="top right">
      <h2>Team B</h2>
      <div  v-for="player in this.$root.$data.team_b" :key="player.id">
        <div class="team-player-tile">
          {{ player.name }}
          <img class='red-x' :src="'../images/red_x.png'" v-on:click="rmFromB(player)">
          <img class='sm' :src="'../images/players/'+ player.id + '.jpg'" v-on:click="rmFromB(player)">
        </div>
      </div>
  </div>
<!-- <PlayerList :players="players" /> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hover: null,
    };
  },

  methods: {
    addToA: function(player) {
        if (this.$root.$data.team_a.length === 9){
          alert('Team A Roster is Full')
          return
        }

        this.$root.$data.team_a.push(player)

        const index = this.$root.$data.players.findIndex(x => x.id === player.id);
        if (index > -1) {
          this.$root.$data.players.splice(index, 1);
        }
    },
    addToB: function(player) {
      if (this.$root.$data.team_b.length === 9){
          alert('Team B Roster is Full')
          return
        }

        this.$root.$data.team_b.push(player)

        const index = this.$root.$data.players.findIndex(x => x.id === player.id);
        if (index > -1) {
          this.$root.$data.players.splice(index, 1);
        }
    },

    rmFromA: function(player){
      const index = this.$root.$data.team_a.findIndex(x => x.id === player.id);
      if (index > -1) {
        this.$root.$data.team_a.splice(index, 1);
      }

      this.$root.$data.players.push(player)
    },
    rmFromB: function(player){
      const index = this.$root.$data.team_b.findIndex(x => x.id === player.id);
      if (index > -1) {
        this.$root.$data.team_b.splice(index, 1);
      }

      this.$root.$data.players.push(player)
    },
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.undertext{
  margin: 15px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.red-x:hover{
  z-index: 100;
}

.red-x{
  position: absolute;
  width: 50px;
}

.sm:hover{
  z-index: -5;
}

.sm{
  width: 50px;
  position: relative;
  z-index: 0;
}

.team-btn:hover{
  opacity: 0.8;
}

.team-btn{
  position: relative;
  opacity: 0.5;
  background-color: #c5c5c5;
  border: none;
  bottom: 140px;
  height: 40px;
  transition: .3s ease;
}

.team-player-tile:hover{
  opacity: 0.7;
}

.team-player-tile{
  margin: 5px;
  justify-content: left;
  display: inline-block;
  flex-wrap: nowrap;
  transition: .3s ease;
}

.top{
  position: fixed;
  top: 0;
  margin: 10px;
}

.left{
  left: 0;
  justify-content: left;
  align-content: left;
  margin-right: auto;
  text-align: left;
}

.right{
  right: 0;
  justify-content: right;
  align-content: right;
  margin-left: auto;
  text-align: right;
}

.player-img{
  margin-left: auto;
  margin-right: auto;
  transition: .3s ease;
}

.player-img:hover{
  opacity: 0.6;
}

.player-tile{
  width: 150px;
  height: 225px;

  margin: 10px;
  justify-content: center;
  display: block;
  flex-wrap: wrap;
}

.container{
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(202, 227, 255, 0.404);

  width: 40vw;
  height: 60vh;

  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  display: flex;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #d12a2a;
}
</style>
