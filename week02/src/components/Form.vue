<template>
  <form class="col-md-4 p-1">
    <div class="border">
      <h3 class="text-center text-decoration-underline">X Hoteli</h3>
      <div class="row mt-2">
        <div class="col-md-6">
          <label for="input1" class="form-label">T.C. No</label>
          <input
            type="number"
            class="form-control"
            id="input1"
            placeholder="XXXXXXXXXXX"
          />
        </div>

        <div class="col-md-6">
          <label for="input2" class="form-label">Cep Telefon No</label>
          <input
            type="number"
            class="form-control"
            id="input2"
            placeholder="5XXXXXXXXX"
          />
        </div>
      </div>
      <hr class="text-primary" />
      <div class="row mt-2">
        <div class="col-md-6">
          <label for="input4" class="form-label">Ad</label>
          <input type="text" class="form-control" id="input4" />
        </div>
        <div class="col-md-6">
          <label for="input5" class="form-label">Soyad</label>
          <input type="text" class="form-control" id="input5" />
        </div>
      </div>

      <hr class="text-primary" />

      <div class="row mt-2">
        <div class="col-md-6">
          <label for="input3" class="form-label">Hes Kodu</label>
          <input
            type="text"
            class="form-control"
            id="input3"
            placeholder="X9X9-9999-99"
          />
        </div>

        <div class="col-md-6">
          <label for="input6" class="form-label">Email</label>
          <input type="email" class="form-control" id="input6" />
        </div>
      </div>

      <hr class="text-primary" />

      <div class="row mt-2">
        <div class="col-md-4">
          <label class="form-label">Cinsiyet</label>
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="gridRadios1"> Erkek </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2"> Bayan </label>
          </div>
        </div>
        <div class="col-md-4">
          <label for="input7" class="form-label">Yaş</label>
          <input type="number" class="form-control" id="input7" />
        </div>
        <div class="col-md-4">
          <label for="input8" class="form-label">Gün Sayısı</label>
          <input type="number" class="form-control" id="input8" />
        </div>
      </div>

      <hr class="text-primary" />
      <div class="mt-3 d-grid gap-2 mb-2">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </div>
  </form>
</template>
