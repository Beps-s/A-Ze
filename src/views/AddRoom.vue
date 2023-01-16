<template>
    <div class="d-flex justify-content-center mt-3">
        <div class="card addroom-card">
            <h1 class="text-center pt-4"><strong>Lisa oma hotelli ruumi detailid.</strong></h1>
            <div class="card-body">
                <form id="addRoomForm" class="row g-4">
                    <div class="col-md-6">
                        <div class="py-2">
                            <label for="liikRuum" class="inp">
                                <select class="form-select room-dropdown inp">
                                    <option hidden>Liik</option>
                                    <option value="Single Room">Üheinimesetuba</option>
                                    <option value="Double Room">Kaheinimesetuba (Double)</option>
                                    <option value="Twin Room">Kaheinimesetuba (Twin)</option>
                                    <option value="Suite">Sviit</option>
                                    <option value="President Suite">Presidendi sviit</option>
                                </select>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="hindRuum" class="inp">
                                <input type="number" name="hindRuum" id="hindRuum" required autocomplete="off"
                                    placeholder="&nbsp;">
                                <span class="label">Hind</span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="mugavusedRuum" class="inp">
                                <select class="form-select room-dropdown inp">
                                    <option hidden>Mugavused</option>
                                    <option value="Single Room">Üheinimesetuba</option>
                                    <option value="Double Room">Kaheinimesetuba (Double)</option>
                                    <option value="Twin Room">Kaheinimesetuba (Twin)</option>
                                    <option value="Suite">Sviit</option>
                                    <option value="President Suite">Presidendi sviit</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="py-2">
                            <label for="voodikohadRuum" class="inp">
                                <input type="number" name="voodikohadRuum" id="voodikohadRuum" required
                                    autocomplete="off" placeholder="&nbsp;">
                                <span class="label">Voodikohad</span>
                            </label>
                        </div>
                        <div class="py-2">
                            <label for="lisavoodiRuum" class="inp">
                                <input type="number" name="lisavoodiRuum" id="lisavoodiRuum" required autocomplete="off"
                                    placeholder="&nbsp;">
                                <span class="label">Lisa voodikohad</span>
                            </label>
                        </div>
                        <div class="py-2">
                            <button id="room-btn" type="submit" form="addRoomForm" class="sub-button btn">
                                <strong>Lisa oma hotelli ruum</strong>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.addroom-card {
    width: 68.2rem;
    background-color: #d9d9d9 !important;
    border: none !important;
    border-radius: 20px !important;
}

.room-dropdown {
    padding: 12px !important;
    height: 56px !important;
    background: rgba(0, 0, 0, 0.02);
    background-color: #fff !important;
    border: transparent !important;
    border-radius: 10px;
}

#room-btn {
    height: 56px;
}
</style>