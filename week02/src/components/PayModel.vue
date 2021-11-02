<template>
  <!-- Button trigger modal -->
  <div class="text-center">
    <button
      type="button"
      class="btn btn-outline-info btn-lg"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      @click="buy"
    >
      Ödeme İşlemine Geçiş
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div v-show="status" class="spinner-border text-warning">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-if="!status" class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Ödeme Ekranı</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>İsim Soyisim: {{ user.name }} {{ user.surname }}</p>
            <p>Telefon No: {{ user.phone }}</p>
            <p>Email Adres: {{ user.email }}</p>
            <p>Giriş Tarihi: {{ getDate }}</p>
            <p>Çıkış Tarihi: {{ releaseDate }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button
              @click="showMessage"
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Öde
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],

  data() {
    return {
      status: false,
      modal: false,
    };
  },

  methods: {
    buy() {
      this.modal = true;
      this.status = true;
      setTimeout(() => {
        this.status = false;
      }, 3000);
    },
    showMessage() {
      alert("Ödeme İşlemi Gerçekleştirilmiştir...\n Anasayfaya Yönlendiriliyorsunuz");
      this.$router.push("/");
    },
  },
  computed: {
    getDate() {
      const d = new Date().toString().split(" ").slice(1, 4).join(" ");
      return d;
    },
    releaseDate() {
      let d = new Date(Date.now() + this.user.count * 24 * 60 * 60 * 1000);
      return d.toString().split(" ").slice(1, 4).join(" ");
    },
  },
};
</script>
