<template>
  <div>
    <button
      type="button"
      class="bg-orange hover:bg-dark-orange duration-300 transition-colors font-serif text-white rounded-lg border-none font-bold px-10 py-2 shadow-lg text-lg"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonLabel: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
</style>