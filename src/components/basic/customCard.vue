<template>
  <q-card v-bind="$attrs">
    <q-parallax
      :src="item.img"
      :height="200"
    />

    <q-card-section>
      <div class="text-h6 text-bold">{{ item.title }}</div>
      <div>
        {{ $t(item.category.join(', ')) }}
      </div>
      <q-rating
        v-model="item.rating"
        size="2em"
        color="red"
        readonly
      />
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ item.description }}
    </q-card-section>

    <q-card-section class="row justify-end">
      <q-btn
        label="Ler mais"
        color="primary"
        @click="setDialog(item)"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    setDialog (restaurant) {
      this.$store.dispatch('Restaurants/setDialogType', { type: 'shop' })
      this.$store.dispatch('Restaurants/setDialog', restaurant)
    }
  }
}
</script>
