<script>
export default {
  name: 'FavoriteIcon',
  props: {
    selected: {
      type: Boolean,
      required: false
    }
  }
}
</script>



<template>
<font-awesome-icon size="2xl" icon="fa-solid fa-star" 
    class="estrella"
   :class="{ selected: selected}"/>
</template>

<style scoped>
.estrella {
  cursor: pointer;
  color: rgb(183, 183, 183);
  border: 2px;
  border-color: black;
}

.estrella.selected {
  color: #4b8cfb;
  
}
</style>