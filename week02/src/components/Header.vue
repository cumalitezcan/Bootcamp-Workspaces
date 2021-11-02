<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <div class="container-fluid">
        <router-link :to="{ name: 'HomePage' }">
          <a class="btn btn-light btn-rounded" style="background-color:#2accff; color:white;">Hotelliso</a>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
</template>
