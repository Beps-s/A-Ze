<script>
export default {
    data() {
        return {
            hotel: [],
            rooms: [],
            selectedRoomID: null,
            selectedRoom: null
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
        },
        getSelectedRoomData() {
            var elementPos = this.rooms.map(function(x) {return x.Toa_ID; }).indexOf(this.selectedRoomID);
            //console.log(this.rooms[elementPos].Hind)
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
                            <a href="#tab-prices" class="nav-link tab">Hinnad</a>
                        </li>
                        <li class="nav-item col-4">
                            <a href="#tab-facilities" class="nav-link tab">Teenused</a>
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
                            <div class="col-6">
                                <select @change="getSelectedRoomData" v-model="selectedRoomID" class="form-select">
                                    <option hidden>Majutuse tüüp</option>
                                    <option v-for="room in rooms" :value="room.Toa_ID">{{ room.Liik }}</option>
                                </select>
                                <div class="d-flex align-items-center pt-2">
                                    <input id="startDate" type="date" class="form-control" />
                                    <p class="m-0 px-2" style="font-size: large;">kuni</p>
                                    <input id="endDate" type="date" class="form-control" />
                                </div>
                            </div>
                            <div class="col-4 py-2" v-if="this.selectedRoom">
                                <div class="row">
                                    <h5 class="col text-end my-1">Voodikohad: </h5>
                                    <h5 id="room-beds" class="col-2 p-0 my-1">{{ this.selectedRoom.Voodikohad }}</h5>
                                </div>
                                <div class="row">
                                    <h5 class="col text-end my-1">Lisa voodikohad:</h5>
                                    <h5 id="room-extrabeds" class="col-2 p-0 my-1">{{ this.selectedRoom.Lisa_voodikohad }} </h5>
                                </div>
                            </div>
                        </div>
                        <div class="py-4" v-if="this.selectedRoom">
                            <h3>Toa mugavused:</h3>
                            <p id="room-facilities" style="font-size: large;">{{ this.selectedRoom.Mugavused }}</p>
                        </div>
                        <div class="d-flex justify-content-end pb-4" v-if="this.selectedRoom">
                            <h2 style="font-weight: 600;">Hind:</h2>
                            <h2 id="room-price" style="font-weight: 600;">{{ this.selectedRoom.Hind }}€</h2>
                        </div>
                    </div>
                    <!-- Facilities -->
                    <div id="tab-facilities" class="py-4">
                        <div class="py-5">
                            <h3>Hotelli teenused:</h3>
                            <p id="hotel-facilities" class="pb-4 m-0" style="font-size: large;">{{ hotel.Hotelli_teenused }}</p>
                        </div>
                    </div>
                    <!-- Book button -->
                    <div id="book" class="d-flex justify-content-center py-5">
                        <button id="book-btn" type="button" class="btn-primary py-2 px-4">Broneeri</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../css/hotelPage.css">

</style>