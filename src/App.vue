<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="wholepage">
    <div class="container-fluid text-center">
      <header class="row align-items-center mx-auto py-2">
        <RouterLink to="/" class="col-3 align-self-start"><img style="height: 6em;" src="./assets/logo.PNG"></RouterLink>
        <div class="col mx-auto px-4 input-group w-25">
          <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></span>
          <input class="form-control" placeholder="Otsi majutust">
        </div>
        <div class="col-3 mx-auto">
          <a class="mx-4 header-link"><font-awesome-icon icon="fa-solid fa-user-plus"/> Registreeri</a>
          <a class="mx-4 header-link"><font-awesome-icon icon="fa-solid fa-right-to-bracket"/> Logi sisse</a>
      </div>
      </header>
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style>
  * {
    background-color: #f4f3ef;
  }

  .btn-primary {
    background: #6F4AF0 !important;
  }

  .header-link {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
  }
</style>