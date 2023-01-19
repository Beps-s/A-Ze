<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { mapState } from 'vuex'
</script>
<script>
export default {
  data() {
    return {
      search: '',
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
  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  },
  methods: {
    register: async function (e) {
      e.preventDefault()
      if (this.paroolReg != this.paroolUuestiReg) {
        this.message = 'Paroolid ei kattu'
      } else if (this.parool == this.paroolUuesti) {
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
            if (data.Error) {
              this.message = data.Error
            } else {
              localStorage.setItem('SessionID', data.sessionID)
              this.$store.commit('setLoggedIn', true)
              this.message = 'Konto edukalt loodud'
              setTimeout(() => {
                this.message = ''
              }, 5000)
            }
          })
      }
    },
    login: async function (e) {
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
          if (data.error) {
            this.message = data.error
          } else {
            this.message = ''
            localStorage.setItem('SessionID', data.sessionID)
            this.$store.commit('setLoggedIn', true)
          }
        })
    },
    logout: async function () {
      const logoutRequest = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionID: localStorage.getItem('SessionID')
        })
      }
      await fetch('http://192.168.16.94:5000/sessions', logoutRequest)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            this.message = data.error
          } else {
            localStorage.removeItem('SessionID')
            this.$store.commit('setLoggedIn', false)
            this.sessionID = null
          }
        })
    }
  },
  mounted() {
    setTimeout(() => this.$router.currentRoute.value, 2000)
  }
}
</script>
<template>
  <!-- Header -->
  <div id="wholepage">
    <div class="container-fluid text-center">
      <header class="row align-items-center mx-auto py-2">
        <RouterLink to="/" class="col-3 align-self-start"><img class="logo" src="./assets/logo.PNG">
        </RouterLink>
        <div class="col mx-auto px-4 input-group w-25">
          <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
          <input class="form-control" placeholder="Otsi majutust" v-model="search">
        </div>
        <div class="col-3 mx-auto d-flex justify-content-evenly">
          <RouterLink to="/addHotel" v-if="loggedIn || sessionID">
            <a class="header-link"><font-awesome-icon icon="fa-solid fa-plus" /> Lisa majutus</a>
          </RouterLink>
          <a v-else class="header-link" data-bs-toggle="modal" data-bs-target="#registerModal">
            <font-awesome-icon icon="fa-solid fa-user-plus" /> Registreeri
          </a>
          <a v-if="loggedIn || sessionID" class="header-link dropdown-toggle" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-user" /> Minu konto
          </a>
          <a v-else class="header-link" data-bs-toggle="modal" data-bs-target="#loginModal">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Logi sisse
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Minu andmed</a></li>
            <RouterLink to="/myBookings">
              <li><a class="dropdown-item" href="#">Minu broneeringud</a></li>
            </RouterLink>
            <li>
              <RouterLink to="/myhotels">
            <li><a class="dropdown-item" href="#">Minu hotellid</a></li>
            </RouterLink>
            <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" @click="logout">Logi välja</a></li>
          </ul>
        </div>
      </header>
    </div>
    <div class="container">
      <RouterView :search="search"/>
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
                  <input type="password" v-model="paroolUuestiReg" placeholder="Parool uuesti"
                    id="register-parool-kordus" required>
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

<style src="../src/css/logReg.css">

</style>