<script>
import VueMultiselect from 'vue-multiselect';

export default {
    components: { VueMultiselect },
    data() {
        return {
            sessionID: localStorage.getItem('SessionID'),
            selected: [],
            options: ['Single room', 'Double room', 'Triple room', 'Twin room', 'Suite'],
            selected2: [],
            options2: ['WC', 'Dušš', 'A/C', '4', '5'],
        }
    },
}
</script>

<template>
    <div class="d-flex justify-content-center mt-3">
        <div class="card addroom-card">
            <h1 class="text-center pt-4"><strong>Lisa oma hotelli tube</strong></h1>
            <div class="card-body">
                <form id="addRoomForm" class="row g-4">
                    <div class="col-md-6">
                        <div class="py-2">
                            <div>
                                <VueMultiselect v-model="selected" :options="options" placeholder="Toa liik">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="pt-3">
                            <label for="voodikohadRuum" class="inp">
                                <input type="number" id="voodikohadRuum" min="1" pattern="[0-9]"
                                    onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                    step="1" autocomplete="off" placeholder="&nbsp;" required>
                                <span class="label">Voodikohad</span>
                            </label>
                        </div>
                        <div class="pt-2">
                            <label for="hindRuum" class="inp">
                                <input type="number" id="hindRuum" min="0" onkeypress="return event.charCode != 45"
                                    autocomplete="off" placeholder="&nbsp;" required>
                                <span class="label">Hind</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="py-2">
                            <div>
                                <VueMultiselect v-model="selected2" :options="options2" :multiple="true"
                                    :close-on-select="true" placeholder="Toa mugavused">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="pt-3">
                            <label for="lisavoodiRuum" class="inp">
                                <input type="number" id="lisavoodiRuum" min="0" pattern="[0-9]"
                                    onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                    step="1" autocomplete="off" placeholder="&nbsp;">
                                <span class="label">Lisa voodikohad</span>
                            </label>
                        </div>
                        <div class="pt-2">
                            <label for="tubadearvRuum" class="inp">
                                <input type="number" id="lisavoodiRuum" min="1" pattern="[0-9]"
                                    onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
                                    step="1" autocomplete="off" placeholder="&nbsp;" required>
                                <span class="label">Seda liiki tubade arv</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom">
                <button type="submit" form="addRoomForm" id="room-btn" class="btn-primary py-2 px-4"><strong>Lisa
                        valitud
                        liiki tuba</strong></button>
            </div>
        </div>
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