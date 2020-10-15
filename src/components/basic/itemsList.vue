<template>
  <q-list bordered>
    <q-item
      bordered
      separator
      v-for="item in getDialog.restaurantData.products"
      :key="`${item.id}`"
    >
      <q-item-section avatar>
        <q-avatar rounded>
          <img :src="item.img">
        </q-avatar>
      </q-item-section>

      <q-item-section>{{item.name}}</q-item-section>

      <q-item-section side>
        <q-item-label>
          <q-btn
            flat
            round
            color="primary"
            icon="fas fa-chevron-left"
            @click="removeFromCart(item)"
          />
          {{ getCartItemNumber(item) }}
          <q-btn
            flat
            round
            color="primary"
            icon="fas fa-chevron-right"
            @click="addToCart(item)"
          />
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-item-label caption>R${{item.price}}</q-item-label>
      </q-item-section>

    </q-item>
  </q-list>
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
