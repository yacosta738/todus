<template>
  <div class="flex items-center space-x-2 mt-5">
    <!--Author's profile photo-->
    <img class="w-10 h-10 object-cover object-center rounded-full" :src="avatar" :alt="fullName" />
    <div>
      <!--Author name-->
      <h3 class="inline-link font-bold">{{ fullName }}</h3>
      <p class="text-gray-500 font-semibold text-sm">@{{ login }}</p>
    </div>
    <div class="">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" src="./user-profile.component.ts"></script>
