<template>
  <div class="bg-pink text-center py-5 px-7 font-sans">
    <p class="font-light">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextBox",
  props: {
    text: String,
  },
});
</script>

<style>
</style>