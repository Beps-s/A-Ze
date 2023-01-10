<script>
import "../css/custom.css"
import Hotel from "./HomePage-Hotels.vue"

export default {
    components: {
        Hotel
    }
}
</script>

<template>
    <h1>SEE ON HOMEPAGE</h1>
    <div class="row row-cols-4">
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
    </div>
</template>