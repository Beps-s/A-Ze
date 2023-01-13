<script>
    export default {
        data() {
            return {
                hotel: [],
                rooms: [],
                selectedRoom: ""
            }
        },
        methods: {
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
                console.log(this.hotel)
                console.log(this.rooms)
            }

        },
        computed: {
            selectedRoom: {
                get() {
                    return this.selectedRoom
                },
                set(newRoom) {
                    this.selectedRoom = newRoom
                }
            }
        },
        created() {
            setTimeout(() => this.getHotelData(), 700)
        }
    }    
</script>

<template>
    <div class="row my-5">
        <svg v-if="!hotel" class="spinner col-12" viewBox="0 0 50 50">
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
                            <a href="#tab-info" class="nav-link tab" style="">Info</a>
                        </li>
                        <li class="nav-item col-4">
                            <a href="#tab-prices" class="nav-link tab">Hinnad</a>
                        </li>
                        <li class="nav-item col-4">
                            <a href="#tab-facilities" class="nav-link tab">Mugavused</a>
                        </li>
                    </ul>
                </nav>
                <div class="hotel-card-bg" data-bs-spy="scroll" data-target="#tabs" data-bs-smooth-scroll="true"
                    tabindex="0" style="padding: 0 20px 0 20px; overflow-y: scroll;">
                    <!-- Info -->
                    <div id="tab-info" class="py-4">
                        <div class="d-flex align-items-center justify-content-between py-5">
                            <div class="">
                                <h1 id="hotel-name" class="text-start" style="font-weight: 600; margin-bottom: 0;">
                                    {{ hotel.Nimi }}
                                </h1>
                                <h3 id="hotel-location" style="margin-bottom: 0;">{{ hotel.Aadress }}</h3>
                            </div>
                            <div class="d-flex align-items-center">
                                <font-awesome-icon icon="fa-solid fa-star" style="font-size: 30px;"/>
                                <h1 id="hotel-rating" class="text-start" style="margin: 0 0 0 5px;">{{ hotel.Tarnid }}</h1>
                            </div>
                        </div>
                        <div class="py-5">
                            <p id="hotel-desc" style="font-size: large;">{{ hotel.Kirjeldus }}</p>
                        </div>
                    </div>
                    <!-- Prices -->
                    <div id="tab-prices" class="py-4">
                        <div class="d-flex align-items-center justify-content-between py-5">
                            <div class="col-4">
                                <select class="form-select">
                                    <option hidden>Majutuse tüüp</option>
                                    <option v-for="room in rooms" :value="room.Toa_ID">{{ room.Liik }}</option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <div class="row">
                                    <h5 class="col text-end my-1">Voodikohad:</h5>
                                    <h5 id="room-beds" class="col-2 p-0 my-1">2</h5>
                                </div>
                                <div class="row">
                                    <h5 class="col text-end my-1">Lisa voodikohad:</h5>
                                    <h5 id="room-extrabeds" class="col-2 p-0 my-1">0</h5>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <h3>Toa mugavused:</h3>
                            <p id="room-facilities" style="font-size: large;">WC, Vann, Dušš, TV, Konditsioneer</p>
                            <h3>Lisa valikud:</h3>
                            <p id="room-options" style="font-size: large;">Hommikusöök, Saun</p>
                        </div>
                        <div class="d-flex justify-content-end pb-4">
                            <h2 style="font-weight: 600;">Hind:</h2>
                            <h2 id="room-price" style="font-weight: 600;">{{ hotel.Hind }}€</h2>
                        </div>
                    </div>
                    <!-- Facilities -->
                    <div id="tab-facilities" class="py-4">
                        <div class="py-5">
                            <h3>Hotelli mugavused:</h3>
                            <p id="hotel-facilities" class="pb-4 m-0" style="font-size: large;">Wi-fi, Hommikusöök,
                                Bassein,
                                Saun, Restoran,
                                Konditsioneer,
                                Lift,
                                Toateenindus</p>
                        </div>
                    </div>
                    <!-- Book button -->
                    <div id="book" class="d-flex justify-content-center py-5">
                        <button id="book-btn" type="button" class="btn btn-outline-primary py-2 px-4">Broneeri</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
* {
    font-family: "Roboto", sans-serif;
}

body {
    background-color: #f4f3ef !important;
}

.btn-primary {
    background: #6f4af0 !important;
}

.header-link {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
}

.round {
    border-radius: 20px !important;
}

.hotel-img {
    object-fit: cover;
    height: 30vw;
    max-height: 550px;
    width: 100%;
}

.hotel-card {
    background-color: #f4f3ef !important;
    height: 30vw !important;
    max-height: 550px !important;
    border: none !important;
    border-radius: 20px !important;
}

.hotel-card-bg {
    background-color: #d9d9d9 !important;
    border-radius: 0 0 20px 20px !important;
}

.tab {
    color: #000000 !important;
    background-color: #bebebe !important;
    text-decoration: none !important;
    font-size: large;
    padding: 12px 0 12px 0 !important;
    border: none !important;
    border-radius: 20px 20px 0 0 !important;
}

.tab.active {
    background-color: #d9d9d9 !important;
}

.tab:focus {
    background-color: #d9d9d9;
}

.star {
    object-fit: contain;
    height: 2vw;
    width: 2vw;
}

#book-btn {
    font-size: x-large;
    border-radius: 10px;
}

.btn-outline-primary {
    --bs-btn-color: #6f4af0 !important;
    --bs-btn-border-color: #6f4af0 !important;
    --bs-btn-hover-bg: #6f4af0 !important;
    --bs-btn-hover-border-color: #6f4af0 !important;
    --bs-btn-active-bg: #5335bd !important;
    --bs-btn-active-border-color: #5335bd !important;
}    
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  width: 50px;
  height: 50px;
}
.spinner .path {
  stroke: #93bfec;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
 }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
 }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
 }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
 }
}
</style>