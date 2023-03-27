<script>
import Cardss from './Card.vue'
import { ref } from 'vue'

export default {
  name: 'ListFavorite',
  components: {
    Cardss
  },
  setup() {
    const characterss = ref([])
    const loadData = async () => {
      const favCharacters = JSON.parse(localStorage.getItem('favCharacters')) || []
      characterss.value = favCharacters
    }
    loadData()
    return {
      characterss
    }
  }
}
</script>


<template>
  <div class="flex flex-col  bg-black items-center h-screen">
    <div class=" flex  items-center flex-row m-5 ">
      <router-link to="/">
      <button class="btn btn-primary mr-5">Home
      </button>
        </router-link>
        <h1 class="text-center text-2xl font-bold text-white 
         ">Favorite Characters</h1>
        </div>
         <div class="container">
         <section  v-for="character in characterss"
          :key="character.id"
          class="w-48 shadow-xl
          " >
            <Cardss :name="character.name" :thumbnail="character.thumbnail.path + '.' + character.thumbnail.extension" />
          </section>
        </div>
        <div v-if="characterss.length === 0" class="text-center">
      <h1 class="text-2xl">No Favorite Characters</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
}

</style>
