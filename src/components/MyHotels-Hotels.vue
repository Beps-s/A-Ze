<script>
import { RouterLink } from 'vue-router';

export default {
    props: [
        "nimi",
        "pilt",
        "hotel_id",
        "aadress"
    ],
    components: { RouterLink },

}
</script>

<template>
    <div class="col">
        <div class="card book-card">
            <RouterLink v-bind:to="'/hotel/' + hotel_id" class="card-link">
                <img v-bind:src="'http://192.168.16.94:5000/' + pilt" class="card-img-top">
                <div class="card-body d-flex justify-content-between align-items-center p-2">
                    <div>
                        <h5 id="hotel-name" class="card-title m-0">{{ nimi }}</h5>
                        <p class="m-0">{{ aadress }}</p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>