<script>
//creo un componente que me permita filtrar los personajes
export default {
  name: 'Filtered',
  data() {
    return {
      characters: [],
      allcharacters: []
    }
  },
  methods: {
    searchCharacter(event) {
      const search = event.target.value
      //console.log(search)
      // filtro los personajes por el nombre
      const filteredCharacters = this.allcharacters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
      this.characters = filteredCharacters

    }
  },
  created() {
    this.characters = JSON.parse(localStorage.getItem('characters'))
    this.allcharacters = JSON.parse(localStorage.getItem('characters'))
  }
}

</script>

<template>
  <div>
    <input type="text" placeholder="Search Character" class="input input-bordered input-secondary mr-5" @input="searchCharacter" />
  </div>
</template>















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
      <h1 class="text-2xl">No hay personajes favoritos</h1>
    </div>
  </div>
</template>