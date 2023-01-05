<template>
    <div class="container">
        <h1 class="">Lisa oma majutus siia, et see oleks kõigile kättesaadav</h1>
        <br>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="hotellNimi" class="form-label">Hotelli Nimi</label>
                <input type="text" class="form-control add-hotel-input" id="hotellNimi">
            </div>
            <div class="col-md-6">
                <label for="teenusedHotell" class="form-label">Pakutavad teenused</label>
                <input type="text" class="form-control add-hotel-input" id="teenusedHotell">
            </div>
            <div class="col-md-6">
                <label for="kirjeldusHotell" class="form-label">Kirjeldus</label>
                <textarea class="form-control add-hotel-input" id="kirjeldusHotell"></textarea> 
            </div>
            <div class="col-md-6">
                <label for="teenusedMuud" class="form-label">Muud teenused</label>
                <input type="text" class="form-control add-hotel-input" id="teenusedMuud">
            </div>
            <div class="col-md-6">
                <label for="aadressHotell" class="form-label">Aadress</label>
                <input type="text" class="form-control add-hotel-input" id="aadressHotell">
            </div>
            <div class="col-md-6">
                <label for="piltHotell" class="form-label">Pilt</label>
                <input type="file" accept="image/png, image/jpeg" class="form-control add-hotel-input" id="piltHotell">
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Lisa oma hotell</button>
            </div>
        </form>
    </div>
</template>

<style>

.form-control.add-hotel-input {
background-color: #BEBEBE !important;}

</style>