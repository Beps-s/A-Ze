<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
export default{
  data(){
    return {
      emailLogin: '',
      paroolLogin: '',
      eesnimiReg: '',
      perenimiReg: '',
      paroolReg: '',
      emailReg: '',
      telefonReg: '',
      paroolUuestiReg: '',
      message: ''
    }
  },
  methods: {
    register: async function(e){
      e.preventDefault()
      if(this.paroolReg != this.paroolUuestiReg){
        this.message = 'Paroolid ei kattu'
      }else if(this.parool == this.paroolUuesti){
        const registerRequest = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  Tuup: 'Klient',
                  Nimi: this.eesnimiReg + this.perenimiReg,
                  Email: this.emailReg,
                  Telefon: this.telefonReg,
                  parool: this.paroolReg
              }) 
            }
        await fetch('http://192.168.16.94:5000/users', registerRequest)
          .then(response => response.json())
          .then(data => {
            if(data.Error){
              this.message = data.Error
            }else {
              this.message = 'Konto edukalt loodud'
            }
          })
      }
    },
    login: async function(e){
      e.preventDefault()
      const loginRequest = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  Email: this.emailLogin,
                  parool: this.paroolLogin
              }) 
            }
      await fetch('http://192.168.16.94:5000/sessions', loginRequest)
        .then(response => response.json())
        .then(data => {
          if(data.error){
            this.message = data.error
          }else{
            this.message = "Edukalt sisse logitud"
            localStorage.setItem('SessionID', data.sessionID)
          }
        })
    }
  }
}
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
              <form action="#" @submit="login" class="login">
                <div class="field">
                  <input type="email" v-model="emailLogin" placeholder="E-maili Aadress" required>
                </div>
                <div class="field">
                  <input type="password" v-model="paroolLogin" placeholder="Parool" required>
                </div>
                <h3>{{ message }}</h3>
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Logi sisse">
                </div>
                <div class="signup-link">
                  Pole kasutajat? <a data-bs-toggle="modal" data-bs-target="#registerModal">Registreeri siin</a>
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
              <form action="#" @submit="register" class="login">
                <div class="field">
                  <input type="text" v-model="eesnimi" placeholder="Eesnimi" id="register-eesnimi" required>
                </div>
                <div class="field">
                  <input type="text" v-model="perenimi" placeholder="Perenimi" id="register-perenimi" required>
                </div>
                <div class="field">
                  <input type="email" v-model="email" placeholder="E-maili Aadress" id="register-email" required>
                </div>
                <div class="field">
                  <input type="text" v-model="telefon" placeholder="Telefoni number" id="register-telefon" required>
                </div>
                <div class="field">
                  <input type="password" v-model="parool" placeholder="Parool" id="register-parool" required>
                </div>
                <div class="field">
                  <input type="password" v-model="paroolUuesti" placeholder="Parool uuesti" id="register-parool-kordus" required>
                </div>
                <h3>{{ message }}</h3>
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Loo konto">
                </div>
                <div class="signup-link">
                  Kasutaja juba olemas? <a data-bs-toggle="modal" data-bs-target="#loginModal">Logi sisse</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>