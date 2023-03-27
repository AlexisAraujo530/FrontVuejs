<!-- <script>
import HomeView from './views/HomeView.vue'
import ListFavorite from './components/ListFavorite.vue';
import { RouterView, RouterLink
} from 'vue-router';

export default {
  name: 'App',
  components: {
    HomeView,
    ListFavorite,

  }
}
</script>

<template>
  <RouterView >
  <div id="app">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorite">Favorite</RouterLink>
    <HomeView />
  </div>
</RouterView>
</template> -->


<template>
  <div id="app">
  </div>
  <router-view />
</template>