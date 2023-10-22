<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style>
 /*we can add CSS code here later*/
</style>