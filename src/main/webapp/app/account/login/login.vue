<template>
  <div class="flex flex-col justify-center items-center px-8 pt-52">
    <div v-if="authenticationError"
         class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <div class="px-4 mx-2" v-html="$t('login.messages.error.authentication')">
        <strong class="font-bold">Failed to sign in!</strong>
        <span class="block sm:inline">Please check your credentials and try again.</span>
      </div>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="authenticationError = false">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"><title>Close</title><path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </div>
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
        <label class="block text-grey-darker text-sm font-bold mb-2 hidden" for="username">
          {{ $t('global.form[\'username.label\']') }}
        </label>
        <input class="shadow appearance-none border rounded w-full py-6 px-3 text-grey-darker text-lg" id="username"
               type="text" v-model="login"
               v-bind:placeholder="$t('global.form[\'username.placeholder\']')">
      </div>
      <div class="mb-8 w-full">
        <label class="block text-grey-darker text-sm font-bold mb-2 hidden" for="password">
          {{ $t('login.form.password') }}
        </label>
        <input class="shadow appearance-none border rounded w-full py-6 px-3 text-grey-darker text-lg" id="password"
               type="password" v-model="password"
               :placeholder="$t('login.form[\'password.placeholder\']')">
      </div>
      <label class="flex items-center my-2">
        <input id="rememberMe" v-model="rememberMe" type="checkbox" class="form-checkbox">
        <span class="ml-2" v-text="$t('login.form.rememberme')">Remember me</span>
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
