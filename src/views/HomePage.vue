<script>
import Hotel from "../components/HomePage-Hotels.vue"

export default {
    data() {
        return {
            hotels: []
        }
    },
    props: {
        search: ''
    },
    computed: {
        filteredHotels() {
            return this.hotels.filter(hotel => {
                return hotel.Nimi.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    components: {
        Hotel
    },
    methods: {
        async getAllHotels() {
            const response = await fetch("http://192.168.16.94:5000/hotels");
            const finalResponse = await response.json();
            finalResponse.forEach(element => {
                this.hotels.push(element)
            });
        }
    },
    mounted() {
        setTimeout(() => this.getAllHotels(), 700)
    }
}
</script>


<template>
    <div class="my-5">
        <svg v-if="!hotels.length" class="spinner col-12 mx-auto" viewBox="0 0 50 50" style="margin-top: 33vh;">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <div class="row row-cols-4" v-else>
            <div v-if="!search" v-for="hotel in hotels">
                <Hotel :hotel_id="hotel.Hotelli_ID" :nimi="hotel.Nimi" :aadress="hotel.Aadress" :hind="hotel.Hind"
                    :pilt="hotel.pilt" />
            </div>
            <div v-else v-for="hotel in filteredHotels">
                <Hotel :hotel_id="hotel.Hotelli_ID" :nimi="hotel.Nimi" :aadress="hotel.Aadress" :hind="hotel.Hind"
                    :pilt="hotel.pilt" />
            </div>
        </div>    
    </div>
</template>

<style src="../css/homePage.css">

</style>