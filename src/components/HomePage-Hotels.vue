<script>
import { RouterLink } from 'vue-router';

export default {
    props: [
        "nimi",
        "pilt",
        "hind",
        "hotel_id",
        "aadress"
    ],
    components: { RouterLink }
}
</script>


<template>
    <div class="col" style="padding-top: 12px; padding-bottom: 12px;">
        <div class="card home-card h-100">
            <RouterLink v-bind:to="'/hotel/' + hotel_id" class="card-link">
                <img v-bind:src="'http://192.168.16.94:5000/' + pilt" class="card-img-top">
                <div class="card-body d-flex justify-content-between align-items-top p-2">
                    <div>
                        <h5 id="hotel-name" class="card-title m-0">{{ nimi }}</h5>
                        <p class="m-0 pt-1">{{ aadress }}</p>
                    </div>
                    <p id="hotel-cost" class="text-end col-4 m-0">Alates {{ hind }}€</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style>
.card {
    --bs-card-inner-border-radius: 20px !important;
}

.home-card {
    background-color: #f4f3ef !important;
    border: none !important;
    border-radius: 20px !important;
}

.card-img-top {
    object-fit: cover !important;
    height: 20vw !important;
    max-height: 306px !important;
    border-radius: 20px;
}

a:link {
    text-decoration: none;
    color: #000000;
}

.card-link:visited {
    color: gray;
}

a:hover {
    color: #6f4af0 !important;
}
</style>