<template>
    <div class="wrapper">
      <Navbar/>
      <router-view />
    </div>
  </template>

  <script setup>
  import Navbar from './components/Navbar.vue'

  </script>

<style scoped>
.wrapper{
  width: 60%;
    margin: 2rem auto;
    background-color: white;
    padding: 2rem;
}
</style>