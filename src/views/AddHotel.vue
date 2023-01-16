<script>
import VueMultiselect from 'vue-multiselect';
export default {
    components: { VueMultiselect },
    mounted() {
        function initAutocomplete() {
            var address = document.getElementById('aadressHotell');
            var autocomplete = new google.maps.places.Autocomplete(address);
        }
        initAutocomplete();
    },
    data() {
        return {
            loadFile: function (event) {
                var image = document.getElementById('output');
                image.src = URL.createObjectURL(event.target.files[0]);
                image.style.border = "1px solid #858282";
                image.style.borderRadius = "5px";
            },
            nimiHotell: '',
            teenusedHotell: '',
            kirjeldusHotell: '',
            muuHotell: '',
            tarnidHotell: '',
            sessionID: localStorage.getItem('SessionID'),
            selected: [],
            options: ['WC', 'Dušš', 'Hommikusöök', '1', '2', '3', '4', '5']
        }
    },
    methods: {

        insertHotel: async function (e) {
            const insertHotelRequest = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Nimi: this.nimiHotell,
                    Tarnid: this.tarnidHotell,
                    Kirjeldus: this.kirjeldusHotell,
                    Aadress: document.getElementById('aadressHotell').value,
                    Hotelli_teenused: this.selected,
                    Muud_teenused: this.muuHotell,
                    Pilt: piltHotell.files[0].name,
                    Omanik: this.sessionID
                })
            }
            await fetch('http://192.168.16.94:5000/hotels', insertHotelRequest)
                .then(response => response.json())
                .then(data => { (console.log(data)) })
        },
    }
}
</script>
<template>
    <div class="d-flex justify-content-center mt-3">
        <div class="card addhotel-card border-2" style="">
            <div class="text-center pt-4">
                <h1><strong>Lisa oma majutus siia, et see oleks kõigile kättesaadav</strong></h1>
            </div>
            <div class="card-body">
                <form id="addForm" class="row g-4">
                    <div class="col-md-6">
                        <div class="py-2">
                            <label for="nimiHotell" class="inp">
                                <input type="text" id="nimiHotell" v-model="nimiHotell" placeholder="&nbsp;" required>
                                <span class="label">Hotelli nimi</span>
                            </label>
                        </div>
                        <div class="py-2">
                            <div>
                                <VueMultiselect v-model="selected" :options="options" :multiple="true"
                                    :close-on-select="true" placeholder="Hotellis pakutavad teenused">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="py-3">
                            <label for="aadressHotell" class="inp">
                                <input name="aadressHotell" id="aadressHotell" autocomplete="off" placeholder="&nbsp;"
                                    required>
                                <span class="label">Aadress</span>
                            </label>
                        </div>
                        <div class="py-2 d-flex justify-content-center">
                            <div class="rating">
                                <input v-model="tarnidHotell" id="star5" name="star" type="radio" value="5"
                                    class="radio-btn hide" />
                                <label for="star5">☆</label>
                                <input v-model="tarnidHotell" id="star4" name="star" type="radio" value="4"
                                    class="radio-btn hide" />
                                <label for="star4">☆</label>
                                <input v-model="tarnidHotell" id="star3" name="star" type="radio" value="3"
                                    class="radio-btn hide" />
                                <label for="star3">☆</label>
                                <input v-model="tarnidHotell" id="star2" name="star" type="radio" value="2"
                                    class="radio-btn hide" />
                                <label for="star2">☆</label>
                                <input v-model="tarnidHotell" id="star1" name="star" type="radio" value="1"
                                    class="radio-btn hide" />
                                <label for="star1">☆</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="py-2">
                            <label for="teenusedHotell" class="inp">
                                <input type="text" id="teenusedHotell" v-model="teenusedHotell" placeholder="&nbsp;"
                                    required>
                                <span class="label">Hotelli kirjeldus</span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="muuHotell" class="inp">
                                <input type="text" id="muuHotell" v-model="muuHotell" placeholder="&nbsp;">
                                <span class="label">Muud teenused</span>
                            </label>
                        </div>
                        <div class="pt-2">
                            <form id="piltForm" action="http://192.168.16.94:5000/upload" method="POST"
                                enctype="multipart/form-data">
                                <input type="file" name="image" accept="image/png, image/jpeg" class="input-file"
                                    id="piltHotell" @change="loadFile">
                                <label tabindex="0" for="piltHotell" class="input-file-trigger">Lae ülesse pilt
                                    hotellist</label>
                            </form>
                        </div>
                        <div class="pt-4 justify-content-center text-center">
                            <img class="image250" id="output" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom">
                <button @click="insertHotel" id="book-btn" type="submit" form="addForm"
                    class="btn btn-outline-primary"><strong>Lisa oma
                        hotell</strong></button>
            </div>
        </div>
    </div>
</template>

<style src="../css/addHotel.css">

</style>
<style src="../css/multiselect.css">

</style>
