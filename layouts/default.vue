<template>
  <div>
    <header>
      <h1>My Nuxt App</h1>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>Footer content here</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

main {
  padding: 20px;
}
</style>
