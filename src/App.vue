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
<div class="modal" data-bs-backdrop="static" id="loginModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="wrapper">
          <div class="d-grid d-md-flex justify-content-md-end">
            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="title-text">
            <div class="title login">Login</div>
          </div>
          <div class="form-container">
            <div class="form-inner">
              <form action="#" class="login">
                <div class="field">
                  <input type="text" placeholder="E-maili Aadress" required>
                </div>
                <div class="field">
                  <input type="password" placeholder="Parool" required>
                </div>
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Logi sisse">
                </div>
                <div class="signup-link">
                  Pole kasutajat? <a href="">Registreeri siin</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Register modal -->
  <div class="modal" data-bs-backdrop="static" id="registerModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="wrapper">
          <div class="d-grid d-md-flex justify-content-md-end">
            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="title-text">
            <div class="title register">Registreeri</div>
          </div>
          <div class="form-container">
            <div class="form-inner">
              <form action="#" class="login">
                <div class="field">
                  <input type="text" placeholder="E-maili Aadress" required>
                </div>
                <div class="field">
                  <input type="password" placeholder="Parool" required>
                </div>
                <div class="field">
                  <input type="password" placeholder="Parool uuesti" required>
                </div>
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Loo konto">
                </div>
                <div class="signup-link">
                  Kasutaja juba olemas? <a href="">Logi sisse</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>