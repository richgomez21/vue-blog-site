<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/blog">Blog</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
 /*we can add CSS code here later*/
</style>