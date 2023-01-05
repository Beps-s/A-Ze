<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Header -->
  <div id="wholepage">
    <div class="container-fluid text-center">
      <header class="row align-items-center mx-auto py-2">
        <RouterLink to="/" class="col-3 align-self-start"><img style="height: 6em;" src="./assets/logo.PNG">
        </RouterLink>
        <div class="col mx-auto px-4 input-group w-25">
          <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
          <input class="form-control" placeholder="Otsi majutust">
        </div>
        <div class="col-3 mx-auto">
          <a class="mx-4 header-link" data-bs-toggle="modal" data-bs-target="#registerModal"><font-awesome-icon icon="fa-solid fa-user-plus"/> Registreeri</a>
          <a class="mx-4 header-link" data-bs-toggle="modal" data-bs-target="#loginModal"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Logi sisse</a>
        </div>
      </header>
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>

<!-- Login modal -->
<div class="modal fade" id="loginModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Sisesta oma kasutajaandmed</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="md-form mb-3">
            <label data-success="right">E-mail</label>
            <input type="email" class="form-control" style=" background-color: #BEBEBE;">
          </div>
          <div class="md-form mb-3">
            <label data-success="right">Parool</label>
            <input type="password" class="form-control" style=" background-color: #BEBEBE;">
          </div>
        </div>
        <div class="modal-footer justify-content-center" style=" background-color: #F4F3EF;">
          <button type="button" class="btn btn-primary">Logi sisse</button>
        </div>
      </div>
    </div>
  </div>

<!-- Register modal -->
  <div class="modal fade" id="registerModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Sisesta oma kasutajaandmed</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="email" class="col-form-label">E-mail</label>
              <input type="email" class="form-control" id="email" style=" background-color: #BEBEBE;">
            </div>
            <div class="mb-3">
              <label for="password" class="col-form-label">Parool</label>
              <input type="password" class="form-control" id="password" style=" background-color: #BEBEBE;">
            </div>
            <div class="mb-3">
              <label for="password-again" class="col-form-label">Parool uuesti</label>
              <input type="password" class="form-control" id="password-again" style=" background-color: #BEBEBE;">
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-center" style="background-color: #f4f3ef">
          <button type="button" class="btn btn-primary">Registreeri</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
* {
  background-color: #f4f3ef;
}

.form-control {
box-shadow: none !important;}

.btn-primary {
  background: #6F4AF0 !important;
}

.header-link {
  text-decoration: none;
  color: #000000;
  font-weight: 600;
}

a {
  cursor: pointer;
}

</style>