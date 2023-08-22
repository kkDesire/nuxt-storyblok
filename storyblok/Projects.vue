<script lang="ts" setup>
defineProps<{
  blok: object
}>()
</script>
<template>
  <div class="container project-page">
    <div class="project-title">
      <h1>{{ blok.name || "New Project" }}</h1>
      <NuxtLink :to="{name: 'index'}">Go Back</NuxtLink>
    </div>
    <div class="project-description">
      <img :src="blok.image?.filename || 'https://picsum.photos/300/175'" :alt="blok.image?.alt"/>
      <p>{{blok.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti eum facilis nam non nulla quam tempora tenetur totam! Adipisci alias aspernatur assumenda commodi cumque deserunt ducimus iure libero molestias."}}</p>
    </div>
  </div>
</template>