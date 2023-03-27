<script>
// creo un componente que me permita crear un nuevo personaje
export default {
  name: 'Create',
  data() {
    return {
      name: '',
      description: '',
      thumbnail: '',
      characters: []
    }
  },
  methods: {
    createCharacter() {
      const character = {
        name: this.name,
        description: this.description,
        thumbnail: this.thumbnail
      }
      this.characters.push(character)
      localStorage.setItem('charactersNew', JSON.stringify(this.characters))
      this.name = ''
      this.description = ''
      this.thumbnail = ''
    }
  },
  created() {
    this.characters = JSON.parse(localStorage.getItem('charactersNew')) || []
    console.log(this.characters)
  }
}
</script>

<template>
  <div>
    <input type="text" placeholder="Name" class="input input-bordered input-secondary mr-5" v-model="name" />
    <input type="text" placeholder="Description" class="input input-bordered input-secondary mr-5" v-model="description" />
    <input type="text" placeholder="Thumbnail" class="input input-bordered input-secondary mr-5" v-model="thumbnail" />
    <button class="btn btn-primary" @click="createCharacter">Create</button>
  </div>
</template>

<style scoped>

</style>