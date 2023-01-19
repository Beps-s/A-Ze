<script>
export default {
    data() {
        return {
            hotel: [],
            rooms: [],
            selectedRoomID: '',
            selectedRoom: null,
            algusKuupaev: '',
            loppKuupaev: '',
            inimesteArv: '',
            lasteArv: '',
            makseLiik: '',
            diff: null,
            message: '',
            
        }
    },
    methods: {
        insertReservation: async function () {
            let dateDiff = ((new Date(this.loppKuupaev) - new Date(this.algusKuupaev)) / (1000 * 3600 * 24))
            const insertReservationRequest = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Algus_kuupaev: this.algusKuupaev,
                    Lopp_kuupaev: this.loppKuupaev,
                    Inimeste_arv: this.inimesteArv,
                    Laste_arv: this.lasteArv,
                    SessionID: localStorage.getItem('SessionID'),
                    Makse_Liik: this.makseLiik,
                    Summa: this.selectedRoom.Hind * 2,
                    Toa_ID: this.selectedRoom.Toa_ID
                })
            }
            try {
                await fetch('http://192.168.16.94:5000/reservations', insertReservationRequest)
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            this.message = "Midagi läks valesti"
                        } else {
                            this.message = "Edukalt broneeritud"
                        }
                    })
            } catch (error) {
                this.message = "Midagi läks valesti"
            }

        },
        async getHotelData() {
            const hotelRequest = {
                method: "GET"
            }
            await fetch("http://192.168.16.94:5000/hotels/" + this.$route.params.id, hotelRequest)
                .then(response => response.json())
                .then(data => this.hotel = data[0])

            await fetch("http://192.168.16.94:5000/rooms/" + this.$route.params.id, hotelRequest)
                .then(response => response.json())
                .then(data => data.forEach(element => {
                    this.rooms.push(element)
                }))
        },
        getSelectedRoomData() {
            var elementPos = this.rooms.map(function (x) { return x.Toa_ID; }).indexOf(this.selectedRoomID);
            this.selectedRoom = this.rooms[elementPos]
        },
    },
    created() {
        setTimeout(() => this.getHotelData(), 700)
    }
}    
</script>

<template>
    <div class="row my-5">
        <svg v-if="!hotel" class="spinner col-2 mx-auto" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <div class="col-5">
            <img v-bind:src="'http://192.168.16.94:5000/' + hotel.pilt" class="hotel-img round" />
        </div>
        <div class="col-7">
            <div class="card hotel-card">
                <nav id="tabs" class="d-flex justify-content-center text-center">
                    <ul class="nav w-100">
                        <li class="nav-item col-4">
                            <a href="#tab-info" class="nav-link tab">Info</a>
                        </li>
                        <li class="nav-item col-4">
                            <a href="#tab-facilities" class="nav-link tab">Teenused</a>
                        </li>
                        <li class="nav-item col-4">
                            <a href="#tab-prices" class="nav-link tab">Broneerimine</a>
                        </li>
                    </ul>
                </nav>
                <div class="hotel-card-bg" data-bs-spy="scroll" data-bs-target="#tabs" data-bs-smooth-scroll="true"
                    tabindex="0" style="padding: 0 20px 0 20px; overflow-y: scroll;">
                    <!-- Info -->
                    <div id="tab-info" class="py-4">
                        <div class="d-flex align-items-center justify-content-between py-5">
                            <div class="">
                                <h1 id="hotel-name" class="text-start" style="font-weight: 600; margin-bottom: 0;">
                                    {{ hotel.Nimi }}</h1>
                                <h3 id="hotel-location" style="margin-bottom: 0;">{{ hotel.Aadress }}</h3>
                            </div>
                            <div class="d-flex align-items-center">
                                <font-awesome-icon icon="fa-solid fa-star" style="font-size: 30px;" />
                                <h1 id="hotel-rating" class="text-start" style="margin: 0 0 0 5px;">{{ hotel.Tarnid }}
                                </h1>
                            </div>
                        </div>
                        <div class="py-5">
                            <p id="hotel-desc" style="font-size: large;">{{ hotel.Kirjeldus }}</p>
                        </div>
                    </div>
                    <!-- Facilities -->
                    <div id="tab-facilities" class="py-4">
                        <div class="py-5">
                            <h3>Hotelli teenused:</h3>
                            <p id="hotel-facilities" class="pb-4 m-0" style="font-size: large;">{{
                                hotel.Hotelli_teenused
                            }}</p>
                        </div>
                    </div>
                    <!-- Prices -->
                    <div id="tab-prices" class="py-4">
                        <div class="d-flex align-items-top justify-content-between py-4">
                            <div class="col-6">
                                <select @change="getSelectedRoomData" v-model="selectedRoomID" class="form-select">
                                    <option value="" disabled hidden>Majutuse tüüp</option>
                                    <option v-for="room in rooms" :value="room.Toa_ID">{{ room.Liik }}</option>
                                </select>
                                <div class="d-flex align-items-center pt-2">
                                    <input id="startDate" v-model="algusKuupaev" type="date"
                                        class="form-control px-2" />
                                    <p class="m-0 px-2" style="font-size: large;">kuni</p>
                                    <input id="endDate" type="date" class="form-control px-2" v-model="loppKuupaev" />
                                </div>
                                <div class="pt-3" v-if="this.selectedRoom">
                                    <label for="peopleAmount" style="font-size: large;">Inimeste arv</label>
                                    <input type="number" id="peopleAmount" v-model="inimesteArv"
                                        class="form-control" min="1" pattern="[0-9]" step="1" placeholder="&nbsp;"
                                        required />
                                    <label for="childrenAmount" class="pt-3" style="font-size: large;">Laste arv</label>
                                    <input type="number" id="childrenAmount" v-model="lasteArv"
                                        class="form-control" min="1" pattern="[0-9]" step="1" placeholder="&nbsp;"
                                        required />
                                </div>
                            </div>
                            <div class="col-6" v-if="this.selectedRoom">
                                <div class="d-flex text-end justify-content-center">
                                    <h5 class="col pe-1 my-1">Voodikohad: </h5>
                                    <h5 id="room-beds" class="col-1 p-0 my-1">{{ this.selectedRoom.Voodikohad }}</h5>
                                </div>
                                <div class="d-flex text-end justify-content-center pb-2">
                                    <h5 class="col pe-1 my-1">Lisa voodikohad:</h5>
                                    <h5 id="room-extrabeds" class="col-1 p-0 my-1">{{
                                        this.selectedRoom.Lisa_voodikohad
                                    }} </h5>
                                </div>
                                <div class="text-end pt-5" v-if="this.selectedRoom">
                                    <h3>Toa mugavused:</h3>
                                    <p id="room-facilities" style="font-size: large;">{{ this.selectedRoom.Mugavused }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end" v-if="this.selectedRoom">
                            <h2 class="m-0" style="font-weight: 600;">Hind:</h2>
                            <h2 id="room-price" class="m-0" style="font-weight: 600;"> {{ this.selectedRoom.Hind }}€ /
                                öö</h2>
                            <h2 id="room-price" class="m-0" v-if="diff" style="font-weight: 600;"> {{
                                this.selectedRoom.Hind
                            }}€ / öö</h2>
                        </div>
                        <div class="d-flex justify-content-end" v-if="this.diff">
                            <h2 class="m-0" style="font-weight: 600;">Hind kokku:</h2>
                            <h2 id="room-price" class="m-0" style="font-weight: 600;"> {{ this.diff }}€ / öö</h2>
                        </div>

                    </div>
                    <!-- Book button -->
                    <div id="book" class="d-flex justify-content-center py-5">
                        <h2 id="room-price" class="m-0" style="font-weight: 600;"> {{ this.message }}</h2>
                        <button id="book-btn" data-bs-toggle="modal" data-bs-target="#confirmModal" type="button"
                            class="btn-primary col-4 py-2 px-4">Broneeri</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Confirm modal -->
    <div class="modal" data-bs-backdrop="static" id="confirmModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="wrapper">
                    <div class="d-grid d-md-flex justify-content-md-end">
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="title-text">
                        <div class="title">Kinnita makseviis</div>
                    </div>
                    <div class="form-container">
                        <div class="form-inner">
                            <form action="#" @submit.prevent @submit="insertReservation">
                                <div class="field">
                                    <select id="paymentChoice" v-model="makseLiik" class="form-select" style="height: 45px;">
                                        <option value="" disabled hidden>Makseviis</option>
                                        <option>Kaardimakse</option>
                                        <option>Sularahamakse</option>
                                        <option>Arve</option>
                                    </select>
                                </div>
                                <div class="field btn">
                                    <div class="btn-layer"></div>
                                    <input type="submit" value="Kinnita" data-bs-dismiss="modal">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style src="../css/hotelPage.css">

</style>