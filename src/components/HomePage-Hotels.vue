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
        <div class="card h-100">
            <RouterLink v-bind:to="'/hotel/' + hotel_id" class="card-link">
                <img v-bind:src="'http://192.168.16.94:5000/' + pilt" class="card-img-top">
                <div class="card-body text-center">
                    <h5 id="hotel-name" class="card-title" style="margin: 0">{{ nimi }}</h5>
                    <p>{{ aadress }}</p>
                    <p id="hotel-cost" style="margin: 0;">Alates {{ hind }}€</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style>
.home-card {
    background-color: #f4f3ef !important;
    border: none !important;
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