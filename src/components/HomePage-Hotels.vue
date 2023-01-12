<script>
    export default {
        props: [
            "nimi",
            "pilt",
            "hind"
        ]
    }
</script>


<template>
    <div class="col">
        <div class="card h-100">
            <a class="card-link" href="/hotel">
                <img src="{{ image }}" class="card-img-top">
                <div class="card-body text-center">
                    <h5 id="hotel-name" class="card-title" style="margin: 0">{{ nimi }}</h5>
                    <p id="hotel-cost" style="margin: 0;">Alates {{ hind }}€</p>
                </div>
            </a>
        </div>
    </div>
</template>