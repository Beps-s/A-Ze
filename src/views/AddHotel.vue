<template>
    <div class="container mt-4">
        <h1 class="pb-4">Lisa oma majutus siia, et see oleks kõigile kättesaadav</h1>
        <form class="row g-4">
            <div class="col-md-6">
                <label for="hotellNimi" class="form-label">Hotelli Nimi</label>
                <input type="text" class="form-control add-hotel-input" id="hotellNimi" placeholder="Teie hotelli nimi">
            </div>
            <div class="col-md-6">
                <label for="teenusedHotell" class="form-label">Pakutavad teenused</label>
                <input type="text" class="form-control add-hotel-input" id="teenusedHotell" placeholder="Hotelli poolt pakutavad teenused">
            </div>
            <div class="col-md-6">
                <label for="kirjeldusHotell" class="form-label">Kirjeldus</label>
                <textarea class="form-control add-hotel-input" id="kirjeldusHotell" placeholder="Hotelli kirjeldus"></textarea> 
            </div>
            <div class="col-md-6">
                <label for="teenusedMuud" class="form-label">Muud teenused</label>
                <input type="text" class="form-control add-hotel-input" id="teenusedMuud" placeholder="Muud teenused/meelelahutus hotelli lähedal ">
            </div>
            <div class="col-md-6">
                <label for="aadressHotell" class="form-label">Aadress</label>
                <input name="aadressHotell" class="form-control add-hotel-input" id="aadressHotell" required autocomplete="off" placeholder="Hotelli asukoht">
            </div>
            <div class="col-md-6">
                <label for="piltHotell" class="form-label">Pilt</label>
                <input type="file" accept="image/png, image/jpeg" class="form-control add-hotel-input" id="piltHotell">
            </div>
            <div class="col-mt-12 text-center">
                <button type="submit" class="btn btn-primary mt-4">Lisa oma hotell</button>
            </div>
        </form>
    </div>
</template>