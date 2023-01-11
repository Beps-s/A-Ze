<template>
    <div class="container mt-4">
        <div class="card border-2" style="width: 68.2rem; height: 38rem; border-width: 1px; border-color: #858282;">
            <div class="text-center pt-4">
                <h1><strong>Lisa oma majutus siia, et see oleks kõigile kättesaadav</strong></h1>
            </div>
            <div class="card-body">
                <form class="row g-4">
                    <div class="col-md-6">
                        <label for="nimiHotell" class="inp">
                            <input type="text" id="nimiHotell" placeholder="&nbsp;">
                            <span class="label">Hotelli nimi</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="teenusedHotell" class="inp">
                            <input type="text" id="teenusedHotell" placeholder="&nbsp;">
                            <span class="label">Hotellis pakutavad teenused</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="kirjeldusHotell" class="inp">
                            <input type="text" id="kirjeldusHotell" placeholder="&nbsp;">
                            <span class="label">Hotelli Kirjeldus</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="muuHotell" class="inp">
                            <input type="text" id="muuHotell" placeholder="&nbsp;">
                            <span class="label">Muud teenused</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="aadressHotell" class="inp">
                            <input name="aadressHotell" class="form-control add-hotel-input" id="aadressHotell" required
                                autocomplete="off" placeholder="&nbsp;">
                            <span class="label">Aadress</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="piltHotell" class="inp" style="display: none; " >Pilt hotellist</label>
                        <input type="file" accept="image/png, image/jpeg" class="form-control add-hotel-input"
                            id="piltHotell" onchange="loadFile(event)">
                        <div class="col-md-10 justify-content-center text-center">
                            <p class="pt-4"><img id="output" width="250" /></p>
                        </div>
                    </div>
                    <div class="col-mt-12 text-center align-bottom">
                        <button type="submit" class="btn btn-primary">Lisa oma hotell</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>