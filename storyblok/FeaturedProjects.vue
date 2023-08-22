<script lang="ts" setup>
defineProps<{
  blok: object
}>()
</script>
<template>
  <div class="conatiner" v-editable="blok">
    <h1 style="margin-left: 10px;">{{ blok.title }}</h1>
    <div class="featured-projects">
      <div class="project" v-for="project in blok.projects" :key="project._uid">
        <NuxtLink
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
        >
          <img
              :src="project.content.image?.filename"
              :alt="project.content.image?.alt"
          />
          <p>{{ project.content.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>