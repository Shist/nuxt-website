<template>
  <div class="spinner-container">
    <div class="spinner"></div>
    <p class="loading-text">Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color-white, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  border: 8px solid $color-spinner-border;
  border-top: 8px solid $color-spinner-border-top;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  margin-left: 20px;
  @include default-text(36px, 36px, $color-black);
}
</style>
