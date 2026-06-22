<template>
  <div>
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <PromoBanner />
    </ClientOnly>
    <Navigation />
    <NuxtPage />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  background: #3d3832;
  width: 100%;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

#__nuxt {
  min-height: 100vh;
  background: #3d3832;
}
</style>
