<script setup>
import { ref } from 'vue'
import Cardss from '../components/Card.vue'
import '../assets/main.css'
import marvel from '../assets/marvel.jpg'
import Create from '../components/Create.vue'
import FavoriteIcon from '../components/FavoriteIcon.vue'
//import Filtered from '../components/Filter.vue'



const characters = ref([])
 
let allcharacters = []


const loadData = async () => {
  const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=1eba77a39ee351e1409b23eb324a772f&hash=601879f85f8260e02e868b8443c63a91&ts=1')
  const  data  = await response.json()
  //console.log(data.data.results)
  characters.value = data.data.results
  allcharacters = data.data.results
}

const searchCharacter = (e) => {
  const search = e.target.value
  const filteredCharacters = allcharacters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
  characters.value = filteredCharacters
}



const saveFav = characterId => {
  const index = characters.value.findIndex(character => character.id === characterId)
  characters.value[index].selected = !characters.value[index].selected
  const character = characters.value.find(character => character.id === characterId)
  const favCharacters = JSON.parse(localStorage.getItem('favCharacters')) || []
  const isFav = favCharacters.find(favCharacter => favCharacter.id === characterId)
  if (isFav) {
    const index = favCharacters.findIndex(favCharacter => favCharacter.id === characterId)
    favCharacters.splice(index, 1)
  } else {
    favCharacters.push(character)
  }
  localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
  //console.log(favCharacters)
}

// creo una funcion que me traiga los characters del local storage y los agregue a la variable characters
const getCharacters = () => {
  const characterss = localStorage.getItem('characters')
 console.log("esto",characterss.name)
 
   
}


getCharacters()

loadData()
</script>
<template >
  <div   
  class="flex flex-col items-center bg-black h-screen">
    <div class=" flex  items-center flex-row m-5 ">
    <img :src="marvel" 
     alt="marvel" class="w-42 h-32 mr-12" />

     <input type="text" placeholder="Search Character" class="input input-bordered input-secondary w-full max-w-xs m-5" @input="searchCharacter" />

    <!-- <Filtered/> -->

    <router-link to="/favorite">
    <button class="btn btn-primary mr-5">Favorite
    </button>
  </router-link>
    <Create />
    </div>
    <div class="container">
    <section  v-for="character in characters"
    :key="character.id"
    class="flex flex-col ">
       <Cardss :name="character.name" :thumbnail="character.thumbnail.path + '.' + character.thumbnail.extension" />
       <FavoriteIcon  
       :class = "{selected: character.selected}"
       class="mt-2"
       @click="saveFav(character.id)"
       />
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
}

</style>

<!-- v-for="character in characters" :key="character.id" -->

