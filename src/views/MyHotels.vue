<script>
import Hotel from "../components/MyHotels-Hotels.vue"

export default {
    data() {
        return {
            hotels: []
        }
    },
    components: {
        Hotel
    },
    methods: {
        getMyHotels: async function (e) {
            const getMyHotelsRequest = {
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem("SessionID")
                }
            }
            const response = await fetch("http://192.168.16.94:5000/owner", getMyHotelsRequest);
            const finalResponse = await response.json();
            finalResponse.forEach(element => {
                this.hotels.push(element)

            })
            console.log(this.hotels);;
        }
    },
    mounted() {
        setTimeout(() => this.getMyHotels(), 700)
    }
}
</script>

<template>
    <div class="row row-cols-4 my-5">
        <svg v-if="!hotels.length" class="spinner col-2 mx-auto" viewBox="0 0 50 50" style="margin-top: 33vh;">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <div v-else v-for="hotel in hotels">
            <Hotel :hotel_id="hotel.Hotelli_ID" :nimi="hotel.Nimi" :aadress="hotel.Aadress" :pilt="hotel.pilt" />
        </div>
    </div>
</template>