<script setup>
import { ref } from 'vue'
import Cardss from '../components/Card.vue'
import '../assets/main.css'
import marvel from '../assets/marvel.jpg'
import Create from '../components/Create.vue'
import FavoriteIcon from '../components/FavoriteIcon.vue'

const charactersFiltered = ref([])

const loadData = async () => {
  if (localStorage.length === 0) {
    const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=1eba77a39ee351e1409b23eb324a772f&hash=601879f85f8260e02e868b8443c63a91&ts=1')
    const data = await response.json()
    const characters = data.data.results
    const characterss = JSON.parse(localStorage.getItem('characters')) || []
    characterss.push(...characters)
    localStorage.setItem('characters', JSON.stringify(characterss))
    charactersFiltered.value = characterss
  } else {
    const characters = JSON.parse(localStorage.getItem('characters')) || []
    const favCharacters = JSON.parse(localStorage.getItem('favCharacters')) || []
    const charactersWithFav = characters.map(character => {
      const isFav = favCharacters.find(favCharacter => favCharacter.id === character.id)
      if (isFav) {
        return {
          ...character,
          selected: true
        }
      } else {
        return {
          ...character,
          selected: false
        }
      }
    })
    charactersFiltered.value = charactersWithFav
  }
}

const searchCharacter = (e) => {
  const filterText = e ? e.target.value : "";
  let characters = JSON.parse(localStorage.getItem('characters'));
  const filtered = characters.filter(character => character.name.toLowerCase().includes(filterText.toLowerCase()));
  charactersFiltered.value = filtered;
}

const saveFav = characterId => {
  const index = charactersFiltered.value.findIndex(character => character.id === characterId)
  charactersFiltered.value[index].selected = !charactersFiltered.value[index].selected
  const character = charactersFiltered.value.find(character => character.id === characterId)
  const favCharacters = JSON.parse(localStorage.getItem('favCharacters')) || []
  const isFav = favCharacters.find(favCharacter => favCharacter.id === characterId)
  if (isFav) {
    const index = favCharacters.findIndex(favCharacter => favCharacter.id === characterId)
    favCharacters.splice(index, 1)
  } else {
    favCharacters.push(character)
  }
  localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
}

loadData();
</script>

<template>
  <div class="flex flex-col items-center bg-black ">
    <div class=" flex  items-center flex-row m-5 ">
      <img :src="marvel" alt="marvel" class="w-42 h-32 mr-12" />
      <input type="text" placeholder="Search Character" class="input input-bordered input-secondary w-full max-w-xs m-5"
        @input="searchCharacter" />
      <router-link to="/favorite">
        <button class="btn btn-primary mr-5">Favorite
        </button>
      </router-link>
      <Create />
    </div>
    <div class="container">
      <section v-for="character in charactersFiltered" :key="character.id" class="flex flex-col ">
        <Cardss :name="character.name" :thumbnail="character.thumbnail.path + '.' + character.thumbnail.extension"/>
        <FavoriteIcon :class="{ selected: character.selected }" class="mt-2" @click="saveFav(character.id)" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin-bottom: 50px;
}
</style>