<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          I'm Hugry!
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view class="dark-nord-background" />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {
    }
  }
}
</script>
