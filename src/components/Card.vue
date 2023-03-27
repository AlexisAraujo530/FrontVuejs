<script>
export default {
  name: 'Cardss',
  props: {
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="card card-normal bg-base-100 h-58">
  <figure><img :src="thumbnail" alt="thumbnail" class="w-36 h-36 rounded-full mx-auto border-2 border-white mt-4
    "/></figure>
  <div class="card-body text-center">
    <h1 >{{ name }}</h1>
  </div>
</div>
</template>

