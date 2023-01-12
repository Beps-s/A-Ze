<script>
    import "../css/custom.css"
    import Hotel from "../components/HomePage-Hotels.vue"   

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
            async getAllHotels() {
                const response = await fetch("http://192.168.16.94:5000/hotels");
                const finalResponse = await response.json();
                finalResponse.forEach(element => {
                    this.hotels.push(element)
                });
            }
        },
        mounted() {
            setTimeout(() => this.getAllHotels(), 1000)
        }
    }
</script>


<template>
    <div class="row row-cols-4">
        <h1 v-if="!hotels.length">Loading...</h1>
        <div v-else v-for="hotel in hotels">
            <Hotel :nimi="hotel.Nimi" :hind="hotel.Hind" :pilt="hotel.pilt"/>
        </div>
    </div>
</template>