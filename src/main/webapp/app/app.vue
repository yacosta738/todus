<template>
  <!-- container start -->
  <div id="app" class="container mx-auto">
    <ribbon></ribbon>
    <div v-if="$store.getters.layout === 'simple-layout'">
      <router-view></router-view>
    </div>
    <!-- container start -->
    <div v-else class="flex justify-between items-start">
      <jhi-navbar></jhi-navbar>
      <!-- middle column start -->
      <div class="w-full py-0 border border-t-0 border-b-0">
        <toolbar />
        <router-view></router-view>
      </div>
      <!-- middle column end -->
      <right-menu></right-menu>
    </div>
    <!-- container end -->
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
