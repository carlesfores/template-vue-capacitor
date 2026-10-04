<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/options">Options</router-link>
  </nav>
  <RouterView />
</template>

<style lang="scss">
nav {
  display: flex;
  gap: 1rem;
}
</style>
