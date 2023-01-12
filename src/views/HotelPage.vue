<script>
import Hotel from "./HotelPage-Hotels.vue"

export default {
    components: {
        Hotel
    }
}
</script>

<template>
    <div class="row my-5">
        <Hotel />
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
    background: #6f4af0 !important;
}

.header-link {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
}
</style>