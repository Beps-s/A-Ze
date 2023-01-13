<script setup>
import { nextTick } from 'vue';
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
      message: '',
      sessionID: localStorage.getItem('SessionID')
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
          <a v-if="!sessionID" class="mx-4 header-link" data-bs-toggle="modal" data-bs-target="#registerModal"><font-awesome-icon icon="fa-solid fa-user-plus"/> Registreeri</a>
          <RouterLink to="/addHotel" v-else="sessionID"><a class="mx-4 header-link"><font-awesome-icon icon="fa-solid fa-plus"/> Lisa majutus</a></RouterLink>
          <a v-if="!sessionID" class="mx-4 header-link" data-bs-toggle="modal" data-bs-target="#loginModal"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Logi sisse</a>
          <a v-else="sessionID" class="mx-4 header-link"><font-awesome-icon icon="fa-solid fa-user"/> Minu konto</a>
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
                  <input type="submit" value="Logi sisse" data-bs-dismiss="modal">
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
                  <input type="text" v-model="eesnimiReg" placeholder="Eesnimi" id="register-eesnimi" required>
                </div>
                <div class="field">
                  <input type="text" v-model="perenimiReg" placeholder="Perenimi" id="register-perenimi" required>
                </div>
                <div class="field">
                  <input type="email" v-model="emailReg" placeholder="E-maili Aadress" id="register-email" required>
                </div>
                <div class="field">
                  <input type="text" v-model="telefonReg" placeholder="Telefoni number" id="register-telefon" required>
                </div>
                <div class="field">
                  <input type="password" v-model="paroolReg" placeholder="Parool" id="register-parool" required>
                </div>
                <div class="field">
                  <input type="password" v-model="paroolUuestiReg" placeholder="Parool uuesti" id="register-parool-kordus" required>
                </div>
                <h3>{{ message }}</h3>
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Loo konto" data-bs-dismiss="modal">
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