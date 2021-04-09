<template>
  <div class="flex justify-center items-center px-4 mx-4">
    <div
      v-if="dropdownOpen"
      class="absolute right-0 bottom-16 mx-4 mb-2 w-60 bg-gray-50 border-2 border-gray-400 rounded-2xl overflow-hidden shadow-xl z-20"
    >
      <svg viewBox="0 0 24 24" class="todus-arrow-down">
        <g>
          <path
            d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"
          ></path>
        </g>
      </svg>
      <user-profile :avatar="imageUrl" :full-name="fullName" :login="login">
        <div class="mx-2 cursor-pointer hover:scale-50">
          <font-awesome-icon icon="bell" />
        </div>
      </user-profile>
      <span class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">medium</span>
      <span
        @click="logout()"
        class="block px-4 py-2 text-sm cursor-pointer text-gray-800 border-b hover:bg-gray-200"
        v-text="$t('global.menu.account.logout')"
        >Logout</span
      >
    </div>
    <div class="absolute bottom-0 right-0 px-4 mx-4 rounded-full hover:bg-gray-200" @click="dropdownOpen = !dropdownOpen">
      <user-profile :avatar="imageUrl" :full-name="fullName" :login="login">
        <div class="mx-2 cursor-pointer hover:scale-50">
          <font-awesome-icon icon="ellipsis-h" />
        </div>
      </user-profile>
    </div>
  </div>
</template>
<script lang="ts" src="./user-profile-menu.component.ts"></script>
<style lang="scss" scoped>
.todus-arrow-down {
  //  for make menu
  bottom: -11px;
  color: black;
  display: inline-block;
  fill: currentcolor;
  filter: drop-shadow(rgb(47, 51, 54) 1px -1px 1px);
  font-size: 13px;
  max-width: 100%;
  position: absolute;
  vertical-align: text-bottom;
  transform: rotate(180deg);
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 24px;
  height: 1.25em;
  z-index: 30;
}
</style>
