<template>
  <!-- tweets wrapper start -->
  <div class="tweets-wrapper">
    <div class="innner">
      <tweet v-for="i in 25" :key="i"></tweet>
    </div>
  </div>
  <!-- tweets wrapper end -->
</template>

<script lang="ts" src="./tweets-wrapper.component.ts"></script>

<style scoped>

</style>
