<template>
  <!--  <div class="modal-body">-->
  <!--    <div class="row justify-content-center">-->
  <!--      <div class="col-md-8">-->
  <!--        <b-alert show data-cy="loginError" variant="danger" v-if="authenticationError" v-html="$t('login.messages.error.authentication')">-->
  <!--          <strong>Failed to sign in!</strong> Please check your credentials and try again.-->
  <!--        </b-alert>-->
  <!--      </div>-->
  <!--      <div class="col-md-8">-->
  <!--        <b-form role="form" v-on:submit.prevent="doLogin()">-->
  <!--          <b-form-group v-bind:label="$t('global.form[\'username.label\']')" label-for="username">-->
  <!--            <b-form-input-->
  <!--              id="username"-->
  <!--              type="text"-->
  <!--              name="username"-->
  <!--              autofocus-->
  <!--              v-bind:placeholder="$t('global.form[\'username.placeholder\']')"-->
  <!--              v-model="login"-->
  <!--              data-cy="username"-->
  <!--            >-->
  <!--            </b-form-input>-->
  <!--          </b-form-group>-->
  <!--          <b-form-group v-bind:label="$t('login.form.password')" label-for="password">-->
  <!--            <b-form-input-->
  <!--              id="password"-->
  <!--              type="password"-->
  <!--              name="password"-->
  <!--              v-model.trim="name"-->
  <!--              v-bind:placeholder="$t('login.form[\'password.placeholder\']')"-->
  <!--              v-model="password"-->
  <!--              data-cy="password"-->
  <!--            >-->
  <!--            </b-form-input>-->
  <!--          </b-form-group>-->
  <!--          <b-form-checkbox id="rememberMe" name="rememberMe" v-model="rememberMe" checked>-->
  <!--            <span v-text="$t('login.form.rememberme')">Remember me</span>-->
  <!--          </b-form-checkbox>-->
  <!--          <div>-->
  <!--            <b-button data-cy="submit" type="submit" variant="primary" v-text="$t('login.form.button')">Sign in</b-button>-->
  <!--          </div>-->
  <!--        </b-form>-->
  <!--        <p></p>-->
  <!--        <div>-->
  <!--          <b-alert show variant="warning">-->
  <!--            <b-link-->
  <!--              :to="'/account/reset/request'"-->
  <!--              class="alert-link"-->
  <!--              v-text="$t('login.password.forgot')"-->
  <!--              data-cy="forgetYourPasswordSelector"-->
  <!--              >Did you forget your password?</b-link-->
  <!--            >-->
  <!--          </b-alert>-->
  <!--        </div>-->
  <!--        <div>-->
  <!--          <b-alert show variant="warning">-->
  <!--            <span v-text="$t('global.messages.info.register.noaccount')">You don't have an account yet?</span>-->
  <!--            <b-link :to="'/register'" class="alert-link" v-text="$t('global.messages.info.register.link')">Register a new account</b-link>-->
  <!--          </b-alert>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="flex flex-col justify-center items-center px-8 pt-52">
    <div class="w-1/3">
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
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-6 px-3 text-grey-darker text-lg" id="username"
               type="text"
               placeholder="Email or username">
      </div>
      <div class="mb-8 w-full">
        <label class="block text-grey-darker text-sm font-bold mb-2 hidden" for="password">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-6 px-3 text-grey-darker text-lg" id="password"
               type="password"
               placeholder="Password">
      </div>
      <button class="text-white bg-blue-500 w-full rounded-full text-2xl text-extrabold p-4 mb-8">Log In</button>
    </div>
    <div class="flex justify-between">
      Forgot password?
      ·
      Sign up for Twitter
    </div>
  </div>
</template>

<script lang="ts" src="./login.component.ts"></script>
