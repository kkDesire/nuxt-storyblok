<script setup>
const story = await useAsyncStoryblok("home", {
      version: "draft",
      resolve_relations: "featuredProjects.projects"
    },
    {
      resolveRelations: "featuredProjects.projects"
    }
);
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>