<template>
  <div class="featured">
    <h1>Game MVP</h1>
    <img class='featured-player' :src="'../images/players/' + this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].id + '.jpg'">
    <h1>{{  this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].name }}</h1>

    <p class="desc">PROVO -- The season's journey of World Series MVP {{  this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].name }} did not begin with the Atlanta Braves. But it did end with the newly crowned champs, merging the stories of a player and a team that followed a very similar trajectory.

{{  this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].name }} emerged as the clear-cut MVP of the Braves' six-game victory over the Houston Astros with a thundering three-run, third-inning homer off starter Luis Garcia, giving the Braves an early lead that they expanded the rest of the way.

"[Winning MVP] means a lot to me, to my family, to the organization," {{  this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].name }} said, via Braves interpreter Franco Garcia. "It's something really special."

Before {{  this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].name }}'s blast, Game 6 had taken on the hue of a possible budding pitchers' duel, with Garcia and Atlanta lefty Max Fried putting up early zeros. But with one swing of {{  this.$root.$data.players_og[Math.floor((Math.random() * this.$root.$data.players_og.length), 1)].name }}'s dangerous bat, Garcia's night was over, and Atlanta was on its way to its first title since 1995.</p>
  </div>
</template>



<script>
export default {
  name: 'Featured',
  props: {
    
  },
  data() {
    return {
           
    };
  },

  methods: {

  },

  computed: {
  }
}
</script>


<style scoped>

.desc{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.featured-player{
  height: 20vw;
}

</style>