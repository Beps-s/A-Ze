<script>
import Hotel from "../components/HotelPage-Hotels.vue"

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

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  width: 50px;
  height: 50px;
}
.spinner .path {
  stroke: #93bfec;
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