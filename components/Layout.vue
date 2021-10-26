<template>
  <div>
    <VueAnnouncer />
    <a href="#main" class="skip-link">Skip to main</a>
    <header class="bg-purple-700 h-48 p-10 text-white">
      <h1>Nuxt a11y app</h1>
      <nav role="navigation" aria-label="primary">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="p-10">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.skip-link {
  background: #319795;
  color: #fff;
  font-weight: 700;
  left: 50%;
  padding: 4px;
  position: absolute;
  transform: translateY(-100%);
}

.skip-link:focus {
  transform: translateY(0%);
}
</style>
