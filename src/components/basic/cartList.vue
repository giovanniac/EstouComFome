<template>
  <div>
    <q-list bordered>
      <q-item
        bordered
        separator
        v-show="!!getFullCart.products"
        v-for="item in getFullCart.products"
        :key="`${item.id}-${create_UUID()}`"
      >
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="item.img">
          </q-avatar>
        </q-item-section>

        <q-item-section>{{item.name}}</q-item-section>

        <q-item-section side>
          <q-item-label caption>R${{item.price}}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        bordered
        separator
        v-show="getFullCart.products.length === 0"
      >
        <q-item-section>Não há itens no carrinho!</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  methods: {
    addToCart (item) {
      this.$store.dispatch('Cart/addToCart', { ...item, restaurantId: this.getDialog.restaurantData.id })
    },
    removeFromCart (item) {
      this.$store.dispatch('Cart/removeFromCart', { ...item, restaurantId: this.getDialog.restaurantData.id })
    },
    create_UUID () {
      var dt = new Date().getTime()
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
      return uuid
    }
  },
  computed: {
    getCartItemNumber: function () {
      return (item) => this.$store.getters['Cart/getCartItemNumber']({ ...item, restaurantId: this.getDialog.restaurantData.id })
    },
    getFullCart () {
      return this.$store.getters['Cart/getFullCart']
    },
    getDialog () {
      return this.$store.getters['Restaurants/getDialog']
    }
  }

}
</script>

<style>
</style>
