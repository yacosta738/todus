<template>
  <div>
    <h1>Landing Page</h1>
    <p>
      Login
      <router-link :to="{ name: 'Login' }">
        <span>here</span>
      </router-link>
    </p>
    <p>
      Register
      <router-link :to="{ name: 'Register' }">
        <span>here</span>
      </router-link>
    </p>
  </div>
</template>

<script lang="ts" src="./landing-page.component.ts"></script>

<style scoped></style>
