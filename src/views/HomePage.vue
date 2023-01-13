<script>
import "../css/style.css"
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
        <svg v-if="!hotels.length" class="spinner col-12" viewBox="0 0 50 50" style="margin-top: 33vh;">
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

.header-link {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
}

a {
    cursor: pointer;
}

.btn-primary {
    background: -webkit-linear-gradient(right, #6f4af0, #c94ef2) !important;
    border: -webkit-linear-gradient(right, #6f4af0, #c94ef2) !important;
}

.btn-primary:hover {
    background: #6f4af0 !important;
    border: none !important;
}

.form-control {
    box-shadow: none !important;
}

.spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: 50px;
    height: 50px;
}

.spinner .path {
    stroke: #947af1;
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