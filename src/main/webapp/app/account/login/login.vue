<template>
  <div class="flex flex-col justify-center items-center px-8 pt-52">
    <alerts v-if="authenticationError" :show="authenticationError" strong-and-text
            :text="$t('login.messages.error.authentication')"
            :alert-type="alertError"></alerts>
    <form class="w-1/3" v-on:submit.prevent="doLogin()">
      <div
        class="logo twitter-color w-24 transition-3 twitter-light-blue-on-hover p-2 ml-2 cursor-pointer rounded-full">
        <svg viewBox="0 0 24 24">
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
      </div>
      <h1 class="text-6xl text-black mb-8">Log in to Twitter</h1>

      <div class="mb-8 w-full">
        <label class="block">
          <input id="username" type="text" v-model="login"
                 class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
                 :placeholder="$t('global.form[\'username.placeholder\']')">
        </label>
      </div>
      <div class="mb-8 w-full">
        <label class="block">
          <input id="password" type="password" v-model="password"
                 class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
                 :placeholder="$t('login.form[\'password.placeholder\']')">
        </label>
      </div>
      <label class="flex items-center my-2">
        <input id="rememberMe" v-model="rememberMe" type="checkbox" class="form-checkbox">
        <span class="ml-2 text-lg" v-text="$t('login.form.rememberme')">Remember me</span>
      </label>
      <button class="text-white bg-blue-500 w-full rounded-full text-2xl text-extrabold p-4 mb-8" type="submit"
              v-text="$t('login.form.button')">Sign In
      </button>
    </form>
    <div class="flex justify-around">
      <router-link to="/account/reset/request" class="m-1" v-text="$t('login.password.forgot')">Forgot password?
      </router-link>
      <span class="m-1">·</span>
      <router-link to="/register" class="m-1" v-text="$t('global.messages.info.register.link')">Sign up for Twitter
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./login.component.ts"></script>
