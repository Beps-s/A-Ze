<script>
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
        setTimeout(() => this.getAllHotels(), 700)
    }
}
</script>


<template>
    <div class="row row-cols-4 my-5">
        <svg v-if="!hotels.length" class="spinner col-12" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <div v-else v-for="hotel in hotels">
            <Hotel :nimi="hotel.Nimi" :hind="hotel.Hind" :pilt="hotel.pilt" />
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
  background: -webkit-linear-gradient(right, #6F4AF0, #c94ef2) !important;
}

.btn-primary:hover {
  background: #6f4af0 !important;
}

.header-link {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
}

.form-control {
  box-shadow: none !important;
}

a {
  cursor: pointer;
}
</style>