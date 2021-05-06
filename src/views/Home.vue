<template>
  <div>
    <Header />
    <div class="flex justify-center mt-4">
      <Logo />
    </div>
    <div class="mt-4">
      <TextBox
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
    <div class="flex justify-center mt-4">
      <Button buttonLabel="Drink" />
    </div>
    <div class="flex justify-center mt-2 animate-bounce">
      <ion-icon name="caret-down-outline" size="large"></ion-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header.vue";
import Logo from "@/components/Logo.vue";
import TextBox from "@/components/TextBox.vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Logo,
    TextBox,
    Button,
  },
});
</script>

<style scoped>
ion-icon {
  color: #261911;
}
</style>

