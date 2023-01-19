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
    <div class="col">
        <div class="card book-card">
            <RouterLink v-bind:to="'/hotel/' + hotel_id" class="card-link">
                <img v-bind:src="'http://192.168.16.94:5000/' + pilt" class="card-img-top">
                <div class="card-body d-flex justify-content-between align-items-start p-2">
                    <div>
                        <h5 id="hotel-name" class="card-title m-0">{{ nimi }}</h5>
                        <p class="m-0">{{ aadress }}</p>
                    </div>
                    <h5 id="hotel-cost" class="text-end col-4 m-0">{{ hind }} €</h5>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style>
.book-card {
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