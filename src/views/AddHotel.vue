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
            console.log(insertHotelRequest.body)
            await fetch('http://192.168.16.94:5000/hotels', insertHotelRequest)
                .then(response => response.json())
                .then(data => {(console.log(data))})            
        }
    }
}
</script>
<template>
    <div class="container mt-3" style="margin-left:100px">
        <div class="card border-2" style="width: 68.2rem; height: 38rem; border-width: 1px; border-color: #858282;">
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
                        <input type="file" accept="image/png, image/jpeg" @change="onSelect" ref="file" class="input-file"
                            id="piltHotell" onchange="loadFile(event)">
                            <label tabindex="0" for="piltHotell" class="input-file-trigger">Lae ülesse pilt hotellist</label>
                        <div class="col-md-10 justify-content-center text-center">
                            <p class="pt-4"><img class="image250" id="output" /></p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom" style="background-color: #fff">
                <button @click="insertHotel" class="sub-button btn btn-primary"><strong>Lisa oma hotell</strong></button>
            </div>
        </div>
    </div>
</template>