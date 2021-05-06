<template>
  <nav>
    <div
      class="bg-orange flex items-center justify-center w-min rounded cursor-pointer absolute mt-2 mr-2 right-0 z-50"
      @click="menuStateHandle"
    >
      <ion-icon name="menu-outline" size="large"></ion-icon>
    </div>
    <ul
      class="fixed flex flex-col items-center bg-orange w-screen h-screen justify-evenly z-10 font-sans font-bold text-white transition-all duration-1000"
      :class="[menuState ? 'show-menu' : 'hide-menu']"
    >
      <li
        class="mr-2 flex items-center transform transition-transform hover:scale-110"
      >
        <div class="bg-white w-6 h-0.5"></div>
        <a href="#" class="ml-1 mr-1" @click="menuStateHandle">Home</a>
        <div class="bg-white w-6 h-0.5"></div>
      </li>
      <li
        class="mr-2 flex items-center transform transition-transform hover:scale-110"
      >
        <div class="bg-white w-6 h-0.5"></div>
        <a href="#" class="ml-1 mr-1" @click="menuStateHandle">The Cup</a>
        <div class="bg-white w-6 h-0.5"></div>
      </li>
      <li
        class="mr-2 flex items-center transform transition-transform hover:scale-110"
      >
        <div class="bg-white w-6 h-0.5"></div>
        <a href="#" class="ml-1 mr-1" @click="menuStateHandle">Our Staff</a>
        <div class="bg-white w-6 h-0.5"></div>
      </li>
      <li
        class="mr-2 flex items-center transform transition-transform hover:scale-110"
      >
        <div class="bg-white w-6 h-0.5"></div>
        <a href="#" class="ml-1 mr-1" @click="menuStateHandle">Flavors</a>
        <div class="bg-white w-6 h-0.5"></div>
      </li>
      <li
        class="flex flex items-center transform transition-transform hover:scale-110"
      >
        <div class="bg-white w-6 h-0.5"></div>
        <a href="#" class="ml-1 mr-1" @click="menuStateHandle">Meet Us</a>
        <div class="bg-white w-6 h-0.5"></div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Menu",
  setup() {
    const menuState = ref(false);

    const menuStateHandle = () => {
      menuState.value = !menuState.value;
    };

    return { menuState, menuStateHandle };
  },
});
</script>

<style scoped>
ion-icon {
  color: #f7f1f0;
}

.show-menu {
  clip-path: circle(900px at 100% -10%);
}

.hide-menu {
  clip-path: circle(0px at 100% -10%);
}
</style>