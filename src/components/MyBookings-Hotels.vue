<template>
    <div class="col">
        <div class="card book-card">
            <img src="pilt" class="card-img-top">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <div>
                    <h5 id="hotel-name" class="card-title m-0">Hotelli nimi</h5>
                    <p class="m-0">Aadress</p>
                </div>
                <h5 id="hotel-cost" class="m-0">Hind €</h5>
            </div>
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