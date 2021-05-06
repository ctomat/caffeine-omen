<template>
  <div
    class="coffee-header bg-cover bg-no-repeat flex flex-col justify-center items-center h-64"
  >
    <div class="bg-orange bg-opacity-50 rounded-lg">
      <h1
        class="font-serif font-bold text-white text-center text-2xl py-5 px-7"
      >
        A unique cup. <br />
        A unique experience.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style>
</style>