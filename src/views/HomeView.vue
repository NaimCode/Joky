<script setup>
import LoginButtonVue from '../components/LoginButton.vue';
import Logo from '../components/Logo.vue';
import LoginButton from "../components/LoginButton.vue"

import RandomJokes from '../components/RandomJokes.vue';
</script>

<template>
  <main class="page">
    <header>
      <Logo/>
      <LoginButton/>
    </header>
    <section>
    <RandomJokes/>
    
    </section>
  </main>
</template>

<style scoped>
.page {
  height: 100vh;
  width: 100%;
  background-color: var(--primary);
}
header{
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
section{
  padding: 0 30px;
}
</style>