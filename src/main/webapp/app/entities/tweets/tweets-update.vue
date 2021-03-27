<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="todusApp.tweets.home.createOrEditLabel"
          data-cy="TweetsCreateUpdateHeading"
          v-text="$t('todusApp.tweets.home.createOrEditLabel')"
        >
          Create or edit a Tweets
        </h2>
        <div>
          <div class="form-group" v-if="tweets.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="tweets.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.tweets.content')" for="tweets-content">Content</label>
            <input
              type="text"
              class="form-control"
              name="content"
              id="tweets-content"
              data-cy="content"
              :class="{ valid: !$v.tweets.content.$invalid, invalid: $v.tweets.content.$invalid }"
              v-model="$v.tweets.content.$model"
              required
            />
            <div v-if="$v.tweets.content.$anyDirty && $v.tweets.content.$invalid">
              <small class="form-text text-danger" v-if="!$v.tweets.content.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small
                class="form-text text-danger"
                v-if="!$v.tweets.content.maxLength"
                v-text="$t('entity.validation.maxlength', { max: 160 })"
              >
                This field cannot be longer than 160 characters.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.tweets.createdAt')" for="tweets-createdAt">Created At</label>
            <div class="d-flex">
              <input
                id="tweets-createdAt"
                data-cy="createdAt"
                type="datetime-local"
                class="form-control"
                name="createdAt"
                :class="{ valid: !$v.tweets.createdAt.$invalid, invalid: $v.tweets.createdAt.$invalid }"
                :value="convertDateTimeFromServer($v.tweets.createdAt.$model)"
                @change="updateInstantField('createdAt', $event)"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.tweets.updatedAt')" for="tweets-updatedAt">Updated At</label>
            <div class="d-flex">
              <input
                id="tweets-updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                class="form-control"
                name="updatedAt"
                :class="{ valid: !$v.tweets.updatedAt.$invalid, invalid: $v.tweets.updatedAt.$invalid }"
                :value="convertDateTimeFromServer($v.tweets.updatedAt.$model)"
                @change="updateInstantField('updatedAt', $event)"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('todusApp.tweets.customer')" for="tweets-customer">Customer</label>
            <select class="form-control" id="tweets-customer" data-cy="customer" name="customer" v-model="tweets.customer">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="tweets.customer && customerOption.id === tweets.customer.id ? tweets.customer : customerOption"
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
            :disabled="$v.tweets.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./tweets-update.component.ts"></script>
