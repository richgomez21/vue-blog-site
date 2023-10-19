<template>
  <nav>
    <router-link to="/">HOME</router-link>&nbsp;
    <router-link to="/blog">BLOG</router-link>
  </nav>
  <router-view></router-view>
  <footer>FOOT</footer>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
 /*we can add CSS code here later*/
</style>