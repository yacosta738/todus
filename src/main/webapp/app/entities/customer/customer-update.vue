<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="todusApp.customer.home.createOrEditLabel"
          data-cy="CustomerCreateUpdateHeading"
          v-text="$t('todusApp.customer.home.createOrEditLabel')"
        >
          Create or edit a Customer
        </h2>
        <div>
          <div class="form-group" v-if="customer.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="customer.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.customer.name')" for="customer-name">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="customer-name"
              data-cy="name"
              :class="{ valid: !$v.customer.name.$invalid, invalid: $v.customer.name.$invalid }"
              v-model="$v.customer.name.$model"
              required
            />
            <div v-if="$v.customer.name.$anyDirty && $v.customer.name.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.name.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small
                class="form-text text-danger"
                v-if="!$v.customer.name.maxLength"
                v-text="$t('entity.validation.maxlength', { max: 60 })"
              >
                This field cannot be longer than 60 characters.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.customer.phone')" for="customer-phone">Phone</label>
            <input
              type="text"
              class="form-control"
              name="phone"
              id="customer-phone"
              data-cy="phone"
              :class="{ valid: !$v.customer.phone.$invalid, invalid: $v.customer.phone.$invalid }"
              v-model="$v.customer.phone.$model"
            />
            <div v-if="$v.customer.phone.$anyDirty && $v.customer.phone.$invalid">
              <small
                class="form-text text-danger"
                v-if="!$v.customer.phone.pattern"
                v-text="$t('entity.validation.pattern', { pattern: 'Phone' })"
              >
                This field should follow pattern for "Phone".
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.customer.createdAt')" for="customer-createdAt">Created At</label>
            <div class="d-flex">
              <input
                id="customer-createdAt"
                data-cy="createdAt"
                type="datetime-local"
                class="form-control"
                name="createdAt"
                :class="{ valid: !$v.customer.createdAt.$invalid, invalid: $v.customer.createdAt.$invalid }"
                :value="convertDateTimeFromServer($v.customer.createdAt.$model)"
                @change="updateInstantField('createdAt', $event)"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.customer.updatedAt')" for="customer-updatedAt">Updated At</label>
            <div class="d-flex">
              <input
                id="customer-updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                class="form-control"
                name="updatedAt"
                :class="{ valid: !$v.customer.updatedAt.$invalid, invalid: $v.customer.updatedAt.$invalid }"
                :value="convertDateTimeFromServer($v.customer.updatedAt.$model)"
                @change="updateInstantField('updatedAt', $event)"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.customer.user')" for="customer-user">User</label>
            <select class="form-control" id="customer-user" data-cy="user" name="user" v-model="customer.user">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="customer.user && userOption.id === customer.user.id ? customer.user : userOption"
                v-for="userOption in users"
                :key="userOption.id"
              >
                {{ userOption.login }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label v-text="$t('todusApp.customer.follower')" for="customer-follower">Follower</label>
            <select
              class="form-control"
              id="customer-follower"
              data-cy="follower"
              multiple
              name="follower"
              v-if="customer.followers !== undefined"
              v-model="customer.followers"
            >
              <option
                v-bind:value="getSelected(customer.followers, customerOption)"
                v-for="customerOption in customers"
                :key="customerOption.id"
              >
                {{ customerOption.id }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="$v.customer.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./customer-update.component.ts"></script>
