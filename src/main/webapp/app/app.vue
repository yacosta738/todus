<template>
  <!-- container start -->
  <div id="app" class="container mx-auto">
    <ribbon></ribbon>
      <!-- container start -->
    <div class="flex justify-between items-start">
      <left-menu></left-menu>
      <!-- middle column start -->
      <div class="w-full py-0 border border-t-0 border-b-0 ">
        <jhi-navbar></jhi-navbar>
      <router-view></router-view>
      </div>
      <!-- middle column end -->
      <right-menu></right-menu>
    </div>
      <!-- container end -->
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
