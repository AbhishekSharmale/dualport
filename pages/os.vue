<template>
  <div class="os-redirect">
    <div class="redirect-message">
      <h2>🚀 Redirecting to OS Interface...</h2>
      <p>You're being redirected to the full OS experience!</p>
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script setup>
// Redirect to the actual OS portfolio
if (process.client) {
  window.location.href = 'https://port-os.pages.dev'
}

useHead({
  title: 'OS Interface - Redirecting...',
  meta: [
    { 'http-equiv': 'refresh', content: '0; url=https://port-os.pages.dev' }
  ]
})
</script>

<style scoped>
.os-redirect {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #00ff00;
  font-family: 'JetBrains Mono', monospace;
}

.redirect-message {
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #333;
  border-top: 3px solid #00ff00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 2rem auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>