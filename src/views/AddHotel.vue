<script>
import "../css/style.css"
</script>
<template>
    <div class="d-flex justify-content-center mt-3">
        <div class="card addhotel-card border-2" style="">
            <div class="text-center pt-4">
                <h1><strong>Lisa oma majutus siia, et see oleks kõigile kättesaadav</strong></h1>
            </div>
            <div class="card-body">
                <form id="addForm" class="row g-4">
                    <div class="col-md-6">
                        <div class="py-2">
                            <label for="nimiHotell" class="inp">
                                <input type="text" id="nimiHotell" placeholder="&nbsp;" required>
                                <span class="label">Hotelli nimi</span>
                                <span class="focus-bg"></span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="kirjeldusHotell" class="inp">
                                <input type="text" id="kirjeldusHotell" placeholder="&nbsp;" required>
                                <span class="label">Hotelli Kirjeldus</span>
                                <span class="focus-bg"></span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="aadressHotell" class="inp">
                                <input name="aadressHotell" id="aadressHotell" required autocomplete="off"
                                    placeholder="&nbsp;">
                                <span class="label">Aadress</span>
                                <span class="focus-bg"></span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="aadressHotell" class="inp">
                                <input name="aadressHotell" id="aadressHotell" required autocomplete="off"
                                    placeholder="&nbsp;">
                                <span class="label">Tärnid</span>
                                <span class="focus-bg"></span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="py-2">
                            <label for="teenusedHotell" class="inp">
                                <input type="text" id="teenusedHotell" placeholder="&nbsp;" required>
                                <span class="label">Hotellis pakutavad teenused</span>
                                <span class="focus-bg"></span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="muuHotell" class="inp">
                                <input type="text" id="muuHotell" placeholder="&nbsp;" required>
                                <span class="label">Muud teenused</span>
                                <span class="focus-bg"></span>
                            </label>
                        </div>
                        <div class="pt-2">
                            <input type="file" accept="image/png, image/jpeg" class="input-file" id="piltHotell"
                                onchange="loadFile(event)">
                            <label tabindex="0" for="piltHotell" class="input-file-trigger">Lae ülesse pilt
                                hotellist</label>
                        </div>
                        <div class="pt-4 justify-content-center text-center">
                            <img class="image250" id="output" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center align-bottom">
                <button type="submit" form="addForm" class="sub-button btn"><strong>Lisa oma
                        hotell</strong></button>
            </div>
        </div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    height: 100vh;
    display: grid;
    font-family: Roboto;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
}

.addhotel-card {
    width: 68.2rem;
    background-color: #d9d9d9 !important;
    border: none !important;
    border-radius: 20px !important;
}

.inp {
    position: relative;
    margin: auto;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
}

.inp .label {
    position: absolute;
    top: 20px;
    left: 12px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    transform-origin: 0 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
    pointer-events: none;
}

.inp .focus-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
}

.inp input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 16px 12px 0 12px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    background: rgba(0, 0, 0, 0.02);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    color: #000;
    transition: all 0.15s ease;
}

.inp input:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
}

.inp input:not(:placeholder-shown)+.label {
    color: rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus {
    background: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 #c94ef2;
}

.inp input:focus+.label {
    color: #c94ef2;
    transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus+.label+.focus-bg {
    transform: scaleX(1);
    transition: all 0.1s ease;
}

.image250 {
    display: inline-block;
    object-fit: cover;
    width: 100%;
    max-width: auto;
    height: 100%;
    max-height: 30vh;
}

.js .input-file-trigger {
    display: block;
    padding: 16px 15px;
    background: #6f4af0;
    color: #fff;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
}

.js .input-file {
    position: absolute;
    opacity: 0;
    padding: 13px;
    cursor: pointer;
}

.js .input-file:hover+.input-file-trigger,
.js .input-file:focus+.input-file-trigger,
.js .input-file-trigger:hover,
.js .input-file-trigger:focus {
    background: #947af1;
    color: #fff;
}

.card-footer {
    background-color: transparent !important;
    border: none !important;
    padding: 16px !important;
}

.sub-button {
    display: block;
    width: 20%;
    color: #fff !important;
    background: -webkit-linear-gradient(right, #6f4af0, #c94ef2) !important;
    border: -webkit-linear-gradient(right, #6f4af0, #c94ef2) !important;
    border-radius: 10px !important;
    padding: 12px 28px !important;
    font-size: 18px !important;
    cursor: pointer;
    text-align: center;
}

.sub-button:hover {
    background: #947af1 !important;
    border: #947af1 1px solid !important;
}

input[type="file"]::-webkit-file-upload-button {
    cursor: pointer;
}
</style>