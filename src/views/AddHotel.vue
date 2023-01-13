<script>
export default{
    data(){
        return {
            nimiHotell: '',
            teenusedHotell: '',
            kirjeldusHotell: '',
            muuHotell: '',
            aadressHotell: '',
            piltHotell: '',
            sessionID: localStorage.getItem('SessionID')
        }
    },
    methods: {
        onSelect(){
                const file = this.$refs.file.files[0]
                this.piltHotell = file
        },
        insertHotel: async function(e){
            const insertHotelRequest = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  Nimi: this.nimiHotell,
                  Tarnid: this.tarnidHotell,
                  Kirjeldus: this.kirjeldusHotell,
                  Aadress: this.aadressHotell,
                  Hotelli_teenused: this.teenusedHotell,
                  Muud_teenused: this.muuHotell,
                  Pilt: this.piltHotell,
                  Omanik: this.sessionID
              }) 
            }
            await fetch('http://192.168.16.94:5000/hotels', insertHotelRequest)
                .then(response => response.json())
                .then(data => {(console.log(data))})            
        }
    }
}
</script>
<template>
    <div class="container mt-3" style="margin-left:100px">
        <div class="card border-2" style="width: 68.2rem; height: 39rem; border-width: 1px; border-color: #858282;">
            <div class="text-center pt-4">
                <h1><strong>Lisa oma majutus siia, et see oleks kõigile kättesaadav</strong></h1>
            </div>
            <div class="card-body">
                <form id="addForm" class="row g-4">
                    <div class="col-md-6">
                        <label for="nimiHotell" class="inp">
                            <input type="text" id="nimiHotell" v-model="nimiHotell" placeholder="&nbsp;" required>
                            <span class="label">Hotelli nimi</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="teenusedHotell" class="inp">
                            <input type="text" id="teenusedHotell" v-model="teenusedHotell" placeholder="&nbsp;" required>
                            <span class="label">Hotellis pakutavad teenused</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="kirjeldusHotell" class="inp">
                            <input type="text" id="kirjeldusHotell" v-model="kirjeldusHotell" placeholder="&nbsp;" required>
                            <span class="label">Hotelli Kirjeldus</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="muuHotell" class="inp">
                            <input type="text" id="muuHotell" v-model="muuHotell" placeholder="&nbsp;">
                            <span class="label">Muud teenused</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="aadressHotell" class="inp">
                            <input name="aadressHotell" id="aadressHotell" v-model="aadressHotell" required autocomplete="off"
                                placeholder="&nbsp;">
                            <span class="label">Aadress</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="aadressHotell" class="inp">
                            <input name="tarnidHotell" id="tarnidHotell" v-model="tarnidHotell" require autocomplete="off" placeholder="&nbsp;">
                            <span class="label">Tärnid</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6 input-file-container mr-2">
                        <input type="file" accept="image/png, image/jpeg" @change="onSelect" ref="file" class="input-file" id="piltHotell"
                            onchange="loadFile(event)">
                        <label tabindex="0" for="piltHotell" class="input-file-trigger">Lae ülesse pilt
                            hotellist</label>
                        <div class="col-md-10 justify-content-center text-center">
                            <p class="pt-4"><img class="image250" id="output" /></p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom" style="background-color: #fff">
                <button @click="insertHotel" id="book-btn" class="sub-button btn btn-primary"><strong>Lisa oma
                        hotell</strong></button>
            </div>
        </div>
    </div>
</template>

<style>

body {
    height: 100vh;
    display: grid;
    font-family: Roboto;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
}

.image250 {
    display: inline-block;
    width: 100%;
    max-width: 150px;
    height: 100%;
    max-height: 150px;
}

* {
    box-sizing: border-box;
}

.inp {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 500px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
}

.inp .label {
    position: absolute;
    top: 20px;
    left: 12px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    transform-origin: 0 0;
    transform: translate3d(0, 0, 0);
    transition: all .2s ease;
    pointer-events: none;
}

.inp .focus-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
}

.inp input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 16px 12px 0 12px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    background: rgba(0, 0, 0, 0.02);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    color: #000;
    transition: all .15s ease;
}

.inp input:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
}

.inp input:not(:placeholder-shown)+.label {
    color: rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus {
    background: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 #0077FF;
}

.inp input:focus+.label {
    color: #0077FF;
    transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus+.label+.focus-bg {
    transform: scaleX(1);
    transition: all .1s ease;
}

.card {
    background-color: #fff !important;
}

.input-file-container {
    position: relative;
    width: 250px;
}

.js .input-file-trigger {
    display: block;
    padding: 16px 15px;
    background: -webkit-linear-gradient(right, #947af1, #c94ef2);
    color: #fff;
    font-size: 1em;
    border-radius: 10px;
    margin-right: 15px;
    cursor: pointer;
}

.js .input-file {
    position: absolute;
    width: 250px;
    opacity: 0;
    padding: 13px;
    cursor: pointer;
}

.js .input-file:hover+.input-file-trigger,
.js .input-file:focus+.input-file-trigger,
.js .input-file-trigger:hover,
.js .input-file-trigger:focus {
    background: #6f4af0;
    color: #fff;
}

input[type=file]::-webkit-file-upload-button {
    cursor: pointer;
}

</style>