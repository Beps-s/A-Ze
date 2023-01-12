<template>
    <div class="container mt-3" style="margin-left:100px">
        <div class="card border-2" style="width: 68.2rem; height: 38rem; border-width: 1px; border-color: #858282;">
            <div class="text-center pt-4">
                <h1><strong>Lisa oma majutus siia, et see oleks kõigile kättesaadav</strong></h1>
            </div>
            <div class="card-body">
                <form id="addForm" class="row g-4">
                    <div class="col-md-6">
                        <label for="nimiHotell" class="inp">
                            <input type="text" id="nimiHotell" placeholder="&nbsp;" required>
                            <span class="label">Hotelli nimi</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="teenusedHotell" class="inp">
                            <input type="text" id="teenusedHotell" placeholder="&nbsp;" required>
                            <span class="label">Hotellis pakutavad teenused</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="kirjeldusHotell" class="inp">
                            <input type="text" id="kirjeldusHotell" placeholder="&nbsp;" required>
                            <span class="label">Hotelli Kirjeldus</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="muuHotell" class="inp">
                            <input type="text" id="muuHotell" placeholder="&nbsp;" required>
                            <span class="label">Muud teenused</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label for="aadressHotell" class="inp">
                            <input name="aadressHotell" id="aadressHotell" required autocomplete="off"
                                placeholder="&nbsp;">
                            <span class="label">Aadress</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                    <div class="col-md-6 input-file-container mr-2">
                        <input type="file" accept="image/png, image/jpeg" class="input-file"
                            id="piltHotell" onchange="loadFile(event)">
                            <label tabindex="0" for="piltHotell" class="input-file-trigger">Lae ülesse pilt hotellist</label>
                        <div class="col-md-10 justify-content-center text-center">
                            <p class="pt-4"><img class="image250" id="output" /></p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom" style="background-color: #fff">
                <button type="submit" form="addForm" class="sub-button btn btn-primary"><strong>Lisa oma hotell</strong></button>
            </div>
        </div>
    </div>
</template>