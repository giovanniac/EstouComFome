<template>
  <q-dialog v-model="getDialog.showDialog">
    <q-card class="my-card">
      <q-parallax
        :src="getDialog.restaurantData.img ? getDialog.restaurantData.img : ''"
        :height="150"
      />
      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="fas fa-times"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          @click="setDialog({})"
        />

        <div class="text-h6 text-bold">{{ getDialog.restaurantData.title ? getDialog.restaurantData.title : '' }}</div>
        <div style="font-size: 1.3em">
          {{ getDialog.restaurantData.category ? getDialog.restaurantData.category.join(', ') : '' }}
        </div>
        <q-rating
          v-model="getDialog.restaurantData.rating"
          size="2em"
          color="red"
          readonly
        />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div>
          <q-scroll-area style="height: 350px;">
            <items-list v-if="getDialog.type === 'shop'" />
            <cart-list v-if="getDialog.type === 'cart'" />
          </q-scroll-area>
        </div>
      </q-card-section>

      <q-card-actions v-show="getDialogType === 'shop'">
        <q-btn
          color="primary"
          label="Carrinho"
          class="col-12"
          icon="fas fa-shopping-cart"
          @click="setDialogType('cart')"
        />
      </q-card-actions>

      <q-card-actions v-show="getDialogType === 'cart'">
        <q-btn
          color="primary"
          label="Restaurante"
          class="col-12"
          icon="fas fa-utensils"
          @click="setDialogType('shop')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import itemsList from './itemsList'
import cartList from './cartList'
export default {
  name: 'DialogCard',
  components: {
    itemsList,
    cartList
  },
  computed: {
    getDialog () {
      return this.$store.getters['Restaurants/getDialog']
    },
    getDialogType () {
      return this.$store.getters['Restaurants/getDialog'].type
    }
  },
  methods: {
    getIcon (subject) {
      return this.$store.getters['Restaurants/getIcon'](subject)
    },
    setDialog (data) {
      this.$store.dispatch('Restaurants/setDialog', data)
    },
    setDialogType (type = 'shop') {
      this.$store.dispatch('Restaurants/setDialogType', { type: type })
    }
  }
}
</script>

<style>
@media only screen and (min-width: 500px) {
  .my-card {
    min-width: 100%;
  }
}
@media only screen and (min-width: 1000px) {
  .my-card {
    min-width: 45%;
  }
}
@media only screen and (min-width: 1500px) {
  .my-card {
    min-width: 35%;
  }
}
</style>
