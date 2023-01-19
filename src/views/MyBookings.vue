<script>
import Hotel from "../components/MyBookings-Hotels.vue"

export default {
    data() {
        return {
            loggedIn: localStorage.getItem('SessionID'),
            reservations: [],
            reservationPaid: false,
        }
    },
    components: {
        Hotel
    },
    methods: {
        getMyBookings: async function () {
            const getMyBookingsRequest = {
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem("SessionID")
                }
            }
            const response = await fetch("http://192.168.16.94:5000/reservations", getMyBookingsRequest);
            const finalResponse = await response.json();
            finalResponse.forEach(element => {
                this.reservations.push(element)
                console.log(this.reservations)
            })
        },
        async payReservation(index) {
            const payReservationRequest = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Arve_ID: this.reservations[index].Arve_ID
                })
            }
            await fetch('http://192.168.16.94:5000/invoice', payReservationRequest)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        console.log(data.error)
                    } else {
                        this.reservationPaid = true
                    }
                })
        }
    },
    mounted() {
        if (this.loggedIn.length < 1) {
            console.log(this.loggedIn)
            return
        } else {
            console.log(this.loggedIn)
            setTimeout(() => this.getMyBookings(), 700)
        }
    }
}
</script>

<template>
    <div class="row row-cols-4 my-5">
        <svg v-if="!reservations.length" class="spinner col-2 mx-auto" viewBox="0 0 50 50" style="margin-top: 33vh;">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <div v-else v-for="(reservation, index) in reservations" :key="reservation">
            <Hotel :hotel_id="reservation.Hotelli_ID" :nimi="reservation.Nimi" :aadress="reservation.Aadress"
                :pilt="reservation.pilt" :hind="reservation.Summa" />
            <div class="p-2 pt-0">
                <p class="card-title m-0">Alates {{ reservation.Algus_kuupaev.substring(0, 10) }} kuni {{
                    reservation.Lopp_kuupaev.substring(0, 10)
                }}</p>
                <div v-if="reservation.Sooritatud == 0 && !this.reservationPaid" class="d-flex flex-column">
                    <p class="w-100">Makse broneeringu eest on sooritamata</p>
                    <button type="button" @click="payReservation(index)" class="btn-primary col-6 py-2 px-4 m-auto"
                        style="font-size: large; border-radius: 10px;">Maksa</button>
                </div>
                <div v-if="reservation.Sooritatud == 1 || this.reservationPaid">
                    <p>Broneeringu eest makstud</p>
                </div>
            </div>
        </div>
    </div>
</template>
