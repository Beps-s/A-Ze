<script>
import VueMultiselect from 'vue-multiselect';

export default {
    components: { VueMultiselect },
    data() {
        return {
            formVisible: true,
            message: '',
            sessionID: localStorage.getItem('SessionID'),
            liikTuba: [],
            options: ['Single room', 'Double room', 'Triple room', 'Twin room', 'Suite'],
            voodikohadTuba: '',
            hindTuba: '',
            mugavusedTuba: [],
            options2: ['WC', 'Vann', 'Duss', 'Televiisor', 'A/C'],
            lisaVoodikohadTuba: '',
            tubadeArv: '',
        }
    },
    methods: {
        insertRoom: async function() {
            const insertRoomRequest = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('SessionID')
                },
                body: JSON.stringify({
                    Hind: this.hindTuba,
                    Liik: this.liikTuba,
                    Voodikohad: this.voodikohadTuba,
                    Lisa_voodikohad: this.lisaVoodikohadTuba,
                    Mugavused: this.mugavusedTuba,
                    Arv: this.tubadeArv
                })
            }
            await fetch('http://192.168.16.94:5000/rooms', insertRoomRequest)
            .then(response => response.json())
                .then(data => {
                    if(data.success == true){
                        this.formVisible  = false
                        this.message = ''
                    }if(data.error){
                        this.message = 'Midagi läks valesti'
                    }
                })
        },
        showForm: function(){
            this.formVisible = true
        }
    },
}
</script>

<template>
    <div v-if="!formVisible && sessionID" class="card-footer text-center align-bottom">
        <h1 class="text-center pt-4 pb-4"><strong>Edukalt lisatud</strong></h1>
        <button @click="showForm" id="room-btn" class="btn btn-outline-primary"><strong>Lisa veel tube</strong></button>
    </div>
    <div v-if="formVisible && sessionID" class="d-flex justify-content-center mt-3">
        <div class="card addroom-card">
            <h1 class="text-center pt-4"><strong>Lisa oma hotellile tube</strong></h1>
            <div class="card-body">
                <form id="addRoomForm" class="row g-4">
                    <div class="col-md-6">
                        <div class="py-2">
                            <div>
                                <VueMultiselect v-model="liikTuba" :options="options" placeholder="Toa liik">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="pt-3">
                            <label for="voodikohadRuum" class="inp">
                                <input type="number" id="voodikohadRuum" v-model="voodikohadTuba" min="1" pattern="[0-9]"
                                    onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                    step="1" autocomplete="off" placeholder="&nbsp;" required>
                                <span class="label">Voodikohad</span>
                            </label>
                        </div>
                        <div class="pt-2">
                            <label for="hindRuum" class="inp">
                                <input type="number" id="hindRuum" min="0" v-model="hindTuba" onkeypress="return event.charCode != 45"
                                    autocomplete="off" placeholder="&nbsp;" required>
                                <span class="label">Hind</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="py-2">
                            <div>
                                <VueMultiselect v-model="mugavusedTuba" :options="options2" :multiple="true"
                                    :close-on-select="true" placeholder="Toa mugavused">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="pt-3">
                            <label for="lisavoodiRuum" class="inp">
                                <input type="number" id="lisavoodiRuum" v-model="lisaVoodikohadTuba" min="0" pattern="[0-9]"
                                    onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                    step="1" autocomplete="off" placeholder="&nbsp;">
                                <span class="label">Lisa voodikohad</span>
                            </label>
                        </div>
                        <div class="pt-2">
                            <label for="tubadearvRuum" class="inp">
                                <input type="number" id="tubadeArv" v-model="tubadeArv" min="1" pattern="[0-9]"
                                    onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                    step="1" autocomplete="off" placeholder="&nbsp;" required>
                                <span class="label">Seda liiki tubade arv</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom">
                <button @click="insertRoom"  id="room-btn" class="btn btn-outline-primary"><strong>Lisa valitud liiki tuba</strong></button>
            </div>
            <h1 class="text-center pt-4 pb-4"><strong>{{ message }}</strong></h1>
        </div>
    </div>
    <div class="row row-cols-8 my-5" v-else="!loggedIn">
        <h1>Te peate olema sisse logitud, et tube lisada</h1>
    </div>
</template>
 

<style>
.addroom-card {
    width: 68.2rem;
    background-color: #d9d9d9 !important;
    border: none !important;
    border-radius: 20px !important;
}

.room-dropdown {
    padding: 12px !important;
    height: 56px !important;
    background: rgba(0, 0, 0, 0.02);
    background-color: #fff !important;
    border: transparent !important;
    border-radius: 10px;
}

#room-btn {
    height: 56px;
}
</style>