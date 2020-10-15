<template>
  <q-page>
    <q-card flat>
      <q-card-section>

        <div class="row q-col-gutter-sm">
          <div
            v-for="item in getRestaurants"
            :key="item.title"
            class="col-12 col-md-4"
          >
            <custom-card :item='item' />
          </div>
        </div>

      </q-card-section>
    </q-card>
    <dialog-card />
  </q-page>
</template>

<script>
import CustomCard from '../components/basic/customCard'
import DialogCard from '../components/basic/dialogCard'
export default {
  name: 'PageIndex',
  components: {
    CustomCard,
    DialogCard
  },
  data () {
    return {
      model: { subjectsSelector: '' }
    }
  },
  computed: {
    getRestaurants () {
      return this.$store.getters['Restaurants/getRestaurants']
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>
