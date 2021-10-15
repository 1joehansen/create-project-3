<template>
<div>
    <h1 class="mx-auto">Shopping Cart</h1>
    <h4>{{ cartEmpty }}</h4>

  <CartList :cartList="this.$root.$data.cart" />
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    cartEmpty: function () {
      if (this.$root.$data.cart.length === 0){
        return "Cart is Empty"
      }
      else{
        return "Cart is Fun"
      }

    },
    products() {
      return this.$root.$data.products.filter(product => product.country === this.country);
    },
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>

<style scoped>
h1 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
</style>