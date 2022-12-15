<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container text-center">
    <header class="row justify-content-evenly">
      <h1>AMAZING HOTEL SYSTEM</h1>
      <RouterLink to="/" class="btn btn-primary col-4">GO HOME</RouterLink>
      <RouterLink to="/addhotel" class="btn btn-primary col-4">GO ADD A HOTEL</RouterLink>
    </header>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>