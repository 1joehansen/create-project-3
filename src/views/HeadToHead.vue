<template>
  <div class="about">
    <h1 v-if="teamANotFull">Team A is not Full</h1>
    <button v-if="teamANotFull" v-on:click="fillA()" class="sim-btn">Autofill Team A</button>
    <h1 v-if="teamBNotFull">Team B is not Full</h1>
    <button v-if="teamBNotFull" v-on:click="fillB()" class="sim-btn">Autofill Team B</button>

    <h1 v-if="BothFull">Both Teams Full</h1>

    <button v-if="BothFull" v-on:click="simulate()" class="sim-btn">Simulate Game</button>

    <h2 v-if="winner">{{ win_msg }}</h2>
    <img class='confetti' v-if="celebrate" :src="'../images/confetti.gif'">
    <img class='fireworks' v-if="celebrate" :src="'../images/fireworks.gif'">

    <div class="top left">
      <h2>Team A</h2>
      <div  v-for="player in this.$root.$data.team_a" :key="player.id">
        <div class="team-player-tile">
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
          <img class='sm' :src="'../images/players/'+ player.id + '.jpg'" v-on:click="rmFromB(player)">
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HeadToHead',
  props: {
    
  },
  data() {
    return {
      winner: false,
      celebrate: false,
      win_msg: '',
    };
  },

  methods: {

    hide_celebration(){
      setTimeout(() => this.celebrate = false, 5000);
    },

    simulate() {

      let a_pts = Math.floor((Math.random() * 8), 1)
      let b_pts = Math.floor((Math.random() * 10), 1)
      let game;
      if(a_pts > b_pts){
        game = {a: a_pts, b: b_pts, winner: 'A', innings: 9}
      }
      else if(b_pts > a_pts){
        game = {a: a_pts, b: b_pts, winner: 'B', innings: 9}
      }
      else{

        if (Math.floor((Math.random() * 2), 1) === 1){
          a_pts += Math.floor((Math.random() * 3), 2)
          game = {a: a_pts, b: b_pts, winner: 'A', innings: 10}
        }
        else{
          b_pts += Math.floor((Math.random() * 3), 2)
          game = {a: a_pts, b: b_pts, winner: 'B', innings: 11}
        }
      }


      this.$data.winner = true;
      this.$data.celebrate = true;
      this.$data.win_msg = 'Team ' + game['winner'] + ' Wins ' + Math.max(game['a'], game['b']) + ' to ' + Math.min(game['a'], game['b']) + ' in ' + game['innings'] + ' innings';
      this.hide_celebration();

      if (game['winner'] === 'A'){
        this.$root.$data.featured = this.$root.$data.team_a[Math.floor((Math.random() * 8), 2)].id
      }
      else{
        this.$root.$data.featured = this.$root.$data.team_b[Math.floor((Math.random() * 8), 2)].id
      }
    },

    fillA() {
      let rndPlayer;
      while (this.$root.$data.team_a.length !== 9){ 
        rndPlayer = this.$root.$data.players[Math.floor((Math.random()*this.$root.$data.players.length), 1)];
        this.$root.$data.team_a.push(rndPlayer)

        const index = this.$root.$data.players.findIndex(x => x.id === rndPlayer.id);
        if (index > -1) {
          this.$root.$data.players.splice(index, 1);
        }
      }

      console.log(this.$root.$data.players.length)

    },
    fillB() {
      let rndPlayer;
      while (this.$root.$data.team_b.length !== 9){ 
        rndPlayer = this.$root.$data.players[Math.floor((Math.random()*this.$root.$data.players.length), 1)];
        this.$root.$data.team_b.push(rndPlayer)

        const index = this.$root.$data.players.findIndex(x => x.id === rndPlayer.id);
        if (index > -1) {
          this.$root.$data.players.splice(index, 1);
        }
      }

      console.log(this.$root.$data.players.length)

    }

  },

  computed: {
    teamANotFull() {
      return this.$root.$data.team_a.length !== 9
    },
    teamBNotFull(){
      return this.$root.$data.team_b.length !== 9
    },
    BothFull(){
      return this.$root.$data.team_b.length === 9  && this.$root.$data.team_a.length === 9
    },
    
  }
}
</script>


<style scoped>
.fireworks{
  height: 400px;
}

.confetti{
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
}

.sim-btn:hover{
  opacity: 0.5;
}

.sim-btn{
  border: none;
  background-color: rgb(75, 75, 75);
  padding: 10px;
  color: white;
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

.sm{
  width: 50px;
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

</style>