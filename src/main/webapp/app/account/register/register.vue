<template>
  <div class="flex flex-col justify-center items-center px-8 pt-28">
    <!--Alerts-->
    <alerts v-if="success" :show="success" strong-and-text :text="$t('register.messages.success')" :alert-type="typeSuccess" />
    <alerts v-if="error" :show="error" strong-and-text :text="$t('register.messages.error.fail')" :alert-type="typeError" />
    <alerts
      v-if="errorUserExists"
      :show="errorUserExists"
      strong-and-text
      :text="$t('register.messages.error.userexists')"
      :alert-type="typeError"
    />
    <alerts
      v-if="errorEmailExists"
      :show="errorEmailExists"
      strong-and-text
      :text="$t('register.messages.error.emailexists')"
      :alert-type="typeError"
    />

    <form class="w-1/3" id="register-form" name="registerForm" role="form" v-on:submit.prevent="register()" v-if="!success" no-validate>
      <div class="logo twitter-color w-24 transition-3 twitter-light-blue-on-hover p-2 ml-2 cursor-pointer rounded-full">
        <svg viewBox="0 0 24 24">
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            ></path>
          </g>
        </svg>
      </div>
      <h1 v-text="$t('register.title')" id="register-title" data-cy="registerTitle" class="text-6xl text-black mb-8">Registration</h1>
      <div class="mb-8 w-full">
        <label class="block">
          <input
            v-model="$v.registerAccount.login.$model"
            id="username"
            name="login"
            required
            minlength="1"
            maxlength="50"
            pattern="^[a-zA-Z0-9!#$&'*+=?^_`{|}~.-]+@?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            v-bind:placeholder="$t('global.form[\'username.placeholder\']')"
            data-cy="username"
            :class="{ valid: !$v.registerAccount.login.$invalid, invalid: $v.registerAccount.login.$invalid }"
            class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
          />
        </label>
        <div v-if="$v.registerAccount.login.$anyDirty && $v.registerAccount.login.$invalid">
          <small class="form-text-error" v-if="!$v.registerAccount.login.required" v-text="$t('register.messages.validate.login.required')">
            Your username is required.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.login.minLength"
            v-text="$t('register.messages.validate.login.minlength')"
          >
            Your username is required to be at least 1 character.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.login.maxLength"
            v-text="$t('register.messages.validate.login.maxlength')"
          >
            Your username cannot be longer than 50 characters.
          </small>
          <small class="form-text-error" v-if="!$v.registerAccount.login.pattern" v-text="$t('register.messages.validate.login.pattern')">
            Your username can only contain letters and digits.
          </small>
        </div>
      </div>
      <div class="mb-8 w-full">
        <label class="block">
          <input
            type="text"
            name="firstName"
            id="user-name"
            data-cy="name"
            :class="{ valid: !$v.registerAccount.firstName.$invalid, invalid: $v.registerAccount.firstName.$invalid }"
            v-model="$v.registerAccount.firstName.$model"
            required
            :placeholder="$t('settings.form[\'firstname.placeholder\']')"
            class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
          />
        </label>
        <div v-if="$v.registerAccount.firstName.$anyDirty && $v.registerAccount.firstName.$invalid">
          <small class="form-text-error" v-if="!$v.registerAccount.firstName.required" v-text="$t('entity.validation.required')">
            This field is required.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.firstName.maxLength"
            v-text="$t('entity.validation.maxlength', { max: 50 })"
          >
            This field cannot be longer than 50 characters.
          </small>
        </div>
      </div>
      <div class="mb-8 w-full">
        <label class="block">
          <input
            type="text"
            name="firstName"
            id="user-name"
            data-cy="name"
            :class="{ valid: !$v.registerAccount.lastName.$invalid, invalid: $v.registerAccount.firstName.$invalid }"
            v-model="$v.registerAccount.lastName.$model"
            required
            :placeholder="$t('settings.form[\'lastname.placeholder\']')"
            class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
          />
        </label>
        <div v-if="$v.registerAccount.lastName.$anyDirty && $v.registerAccount.lastName.$invalid">
          <small class="form-text-error" v-if="!$v.registerAccount.lastName.required" v-text="$t('entity.validation.required')">
            This field is required.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.lastName.maxLength"
            v-text="$t('entity.validation.maxlength', { max: 50 })"
          >
            This field cannot be longer than 50 characters.
          </small>
        </div>
      </div>

      <div class="mb-8 w-full">
        <label class="block">
          <input
            type="email"
            id="email"
            name="email"
            :class="{ valid: !$v.registerAccount.email.$invalid, invalid: $v.registerAccount.email.$invalid }"
            v-model="$v.registerAccount.email.$model"
            minlength="5"
            maxlength="254"
            email
            required
            v-bind:placeholder="$t('global.form[\'email.placeholder\']')"
            data-cy="email"
            class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
          />
        </label>

        <div v-if="$v.registerAccount.email.$anyDirty && $v.registerAccount.email.$invalid">
          <small class="form-text-error" v-if="!$v.registerAccount.email.required" v-text="$t('global.messages.validate.email.required')">
            Your email is required.
          </small>
          <small class="form-text-error" v-if="!$v.registerAccount.email.email" v-text="$t('global.messages.validate.email.invalid')">
            Your email is invalid.
          </small>
          <small class="form-text-error" v-if="!$v.registerAccount.email.minLength" v-text="$t('global.messages.validate.email.minlength')">
            Your email is required to be at least 5 characters.
          </small>
          <small class="form-text-error" v-if="!$v.registerAccount.email.maxLength" v-text="$t('global.messages.validate.email.maxlength')">
            Your email cannot be longer than 100 characters.
          </small>
        </div>
      </div>
      <div class="mb-8 w-full">
        <label class="block">
          <input
            type="password"
            id="firstPassword"
            name="password"
            :class="{ valid: !$v.registerAccount.password.$invalid, invalid: $v.registerAccount.password.$invalid }"
            v-model="$v.registerAccount.password.$model"
            minlength="4"
            maxlength="50"
            required
            v-bind:placeholder="$t('global.form[\'newpassword.placeholder\']')"
            data-cy="firstPassword"
            class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
          />
        </label>

        <div v-if="$v.registerAccount.password.$anyDirty && $v.registerAccount.password.$invalid">
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.password.required"
            v-text="$t('global.messages.validate.newpassword.required')"
          >
            Your password is required.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.password.minLength"
            v-text="$t('global.messages.validate.newpassword.minlength')"
          >
            Your password is required to be at least 4 characters.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.registerAccount.password.maxLength"
            v-text="$t('global.messages.validate.newpassword.maxlength')"
          >
            Your password cannot be longer than 50 characters.
          </small>
        </div>
      </div>
      <div class="mb-8 w-full">
        <label class="block">
          <input
            type="password"
            id="secondPassword"
            :class="{ valid: !$v.confirmPassword.$invalid, invalid: $v.confirmPassword.$invalid }"
            v-model="$v.confirmPassword.$model"
            minlength="4"
            maxlength="50"
            required
            v-bind:placeholder="$t('global.form[\'confirmpassword.placeholder\']')"
            data-cy="secondPassword"
            class="form-input mt-1 block p-4 w-full border rounded border-gray-400 focus-within:border-blue-100"
          />
        </label>
        <div v-if="$v.confirmPassword.$dirty && $v.confirmPassword.$invalid">
          <small
            class="form-text-error"
            v-if="!$v.confirmPassword.required"
            v-text="$t('global.messages.validate.confirmpassword.required')"
          >
            Your confirmation password is required.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.confirmPassword.minLength"
            v-text="$t('global.messages.validate.confirmpassword.minlength')"
          >
            Your confirmation password is required to be at least 4 characters.
          </small>
          <small
            class="form-text-error"
            v-if="!$v.confirmPassword.maxLength"
            v-text="$t('global.messages.validate.confirmpassword.maxlength')"
          >
            Your confirmation password cannot be longer than 50 characters.
          </small>
          <small class="form-text-error" v-if="!$v.confirmPassword.sameAsPassword" v-text="$t('global.messages.error.dontmatch')">
            The password and its confirmation do not match!
          </small>
        </div>
      </div>
      <button
        class="text-white bg-blue-500 w-full rounded-full text-2xl text-extrabold p-4 mb-8"
        type="submit"
        :disabled="$v.$invalid"
        v-text="$t('register.form.button')"
        data-cy="submit"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./register.component.ts"></script>
