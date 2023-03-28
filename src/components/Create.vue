<script>
export default {
  name: 'Create',
  data() {
    return {
      id: '',
      name: '',
      description: '',
      thumbnail: '',
    }
  },
  methods: {
    createCharacter() {
      const newCharacter = {
        id: Math.random().toString(36).substr(2, 9),
        name: this.name,
        description: this.description,
        thumbnail: {
          path: this.thumbnail,
          extension: 'jpg'
        }  
      }
      const characters = JSON.parse(localStorage.getItem('characters')) || []
      characters.push(newCharacter)
      localStorage.setItem('characters', JSON.stringify(characters))
      this.$router.push('/')
      if (this.name === '' || this.description === '' || this.thumbnail === '') {
        return alert('Please fill all fields')
      } else {
        alert('Character created')
      }
     window.location.pathname = '/'
    }
  }
}
</script>

<template>
  <label for="my-modal-5" class="btn btn-primary">New Character</label>
  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-4xl font-bold mb-5">Create Character</h1>
      <input type="text" placeholder="Name" class="input input-bordered input-secondary mr-5" v-model="name" />
      <input type="text" placeholder="Description" class="input input-bordered input-secondary mr-5" v-model="description" />
      <input type="text" placeholder="Thumbnail" class="input input-bordered input-secondary mr-5" v-model="thumbnail" />
      <div class="modal-action">
        <label for="my-modal-5" class="btn btn-primary" @click="createCharacter">Create</label>
        <label for="my-modal-5" class="btn btn-error" >Cancel</label>
    </div>
  </div>
</div>
</template>