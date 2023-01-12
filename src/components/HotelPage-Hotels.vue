<template>
    <div class="col-5">
        <img src="../assets/1-main.jpg" class="hotel-img round" />
    </div>
    <div class="col-7">
        <div class="card hotel-card">
            <nav id="tabs" class="d-flex justify-content-center text-center">
                <ul class="nav w-100">
                    <li class="nav-item col-4">
                        <a href="#tab-info" class="nav-link tab" style="">Info</a>
                    </li>
                    <li class="nav-item col-4">
                        <a href="#tab-prices" class="nav-link tab">Hinnad</a>
                    </li>
                    <li class="nav-item col-4">
                        <a href="#tab-facilities" class="nav-link tab">Mugavused</a>
                    </li>
                </ul>
            </nav>
            <div class="hotel-card-bg" data-bs-spy="scroll" data-target="#tabs" data-bs-smooth-scroll="true"
                tabindex="0" style="padding: 0 20px 0 20px; overflow-y: scroll;">
                <!-- Info -->
                <div id="tab-info" class="py-4">
                    <div class="d-flex align-items-center justify-content-between py-5">
                        <div class="">
                            <h1 id="hotel-name" class="text-start" style="font-weight: 600; margin-bottom: 0;">
                                Hotelli nimi
                            </h1>
                            <h3 id="hotel-location" style="margin-bottom: 0;">Asukoht</h3>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="../assets/star.png" class="star" />
                            <h1 id="hotel-rating" class="text-start" style="margin: 0 0 0 5px;">4,6</h1>
                        </div>
                    </div>
                    <div class="py-5">
                        <p id="hotel-desc" style="font-size: large;">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            Quisque quis tincidunt ante.
                            Mauris
                            hendrerit quam nisl, mollis porta sapien commodo tempus. In id commodo eros. Aliquam aliquet
                            ut
                            tortor at elementum. Mauris ante est, tempor pulvinar bibendum non, luctus pharetra sapien.
                            Pellentesque pellentesque non odio a vulputate. In accumsan nisl condimentum pharetra
                            gravida. Pellentesque et lacus quis nulla mattis euismod. Integer at purus lobortis,
                            eleifend arcu ut, dignissim massa. </p>
                    </div>
                </div>
                <!-- Prices -->
                <div id="tab-prices" class="py-4">
                    <div class="d-flex align-items-center justify-content-between py-5">
                        <div class="col-4">
                            <select class="form-select">
                                <option hidden>Majutuse tüüp</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-4 py-2">
                            <div class="row">
                                <h5 class="col text-end my-1">Voodikohad:</h5>
                                <h5 id="room-beds" class="col-2 p-0 my-1">2</h5>
                            </div>
                            <div class="row">
                                <h5 class="col text-end my-1">Lisa voodikohad:</h5>
                                <h5 id="room-extrabeds" class="col-2 p-0 my-1">0</h5>
                            </div>
                        </div>
                    </div>
                    <div class="py-4">
                        <h3>Toa mugavused:</h3>
                        <p id="room-facilities" style="font-size: large;">WC, Vann, Dušš, TV, Konditsioneer</p>
                        <h3>Lisa valikud:</h3>
                        <p id="room-options" style="font-size: large;">Hommikusöök, Saun</p>
                    </div>
                    <div class="d-flex justify-content-end pb-4">
                        <h2 style="font-weight: 600;">Hind:</h2>
                        <h2 id="room-price" style="font-weight: 600;">500€</h2>
                    </div>
                </div>
                <!-- Facilities -->
                <div id="tab-facilities" class="py-4">
                    <div class="py-5">
                        <h3>Hotelli mugavused:</h3>
                        <p id="hotel-facilities" class="pb-4 m-0" style="font-size: large;">Wi-fi, Hommikusöök, Bassein,
                            Saun, Restoran,
                            Konditsioneer,
                            Lift,
                            Toateenindus</p>
                    </div>
                </div>
                <!-- Book button -->
                <div id="book" class="d-flex justify-content-center py-5">
                    <button id="book-btn" type="button" class="btn btn-outline-primary py-2 px-4">Broneeri</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.round {
    border-radius: 20px !important;
}

.hotel-img {
    object-fit: cover;
    height: 30vw;
    max-height: 550px;
    width: 100%;
}

.hotel-card {
    background-color: #f4f3ef !important;
    height: 30vw !important;
    max-height: 550px !important;
    border: none !important;
    border-radius: 20px !important;
}

.hotel-card-bg {
    background-color: #d9d9d9 !important;
    border-radius: 0 0 20px 20px !important;
}

.tab {
    color: #000000 !important;
    background-color: #bebebe !important;
    text-decoration: none !important;
    font-size: large;
    padding: 12px 0 12px 0 !important;
    border: none !important;
    border-radius: 20px 20px 0 0 !important;
}

.tab.active {
    background-color: #d9d9d9 !important;
}

.tab:focus {
    background-color: #d9d9d9;
}

.star {
    object-fit: contain;
    height: 2vw;
    width: 2vw;
}

#book-btn {
    font-size: x-large;
    border-radius: 10px;
}

.btn-outline-primary {
    --bs-btn-color: #6f4af0 !important;
    --bs-btn-border-color: #6f4af0 !important;
    --bs-btn-hover-bg: #6f4af0 !important;
    --bs-btn-hover-border-color: #6f4af0 !important;
    --bs-btn-active-bg: #5335bd !important;
    --bs-btn-active-border-color: #5335bd !important;
}
</style>