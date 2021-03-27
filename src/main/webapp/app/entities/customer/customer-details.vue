<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="customer">
        <h2 class="jh-entity-heading" data-cy="customerDetailsHeading">
          <span v-text="$t('todusApp.customer.detail.title')">Customer</span> {{ customer.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('todusApp.customer.slug')">Slug</span>
          </dt>
          <dd>
            <span>{{ customer.slug }}</span>
          </dd>
          <dt>
            <span v-text="$t('todusApp.customer.createdAt')">Created At</span>
          </dt>
          <dd>
            <span v-if="customer.createdAt">{{ $d(Date.parse(customer.createdAt), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('todusApp.customer.updatedAt')">Updated At</span>
          </dt>
          <dd>
            <span v-if="customer.updatedAt">{{ $d(Date.parse(customer.updatedAt), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('todusApp.customer.user')">User</span>
          </dt>
          <dd>
            {{ customer.user ? customer.user.login : '' }}
          </dd>
          <dt>
            <span v-text="$t('todusApp.customer.follower')">Follower</span>
          </dt>
          <dd>
            <span v-for="(follower, i) in customer.followers" :key="follower.id"
              >{{ i > 0 ? ', ' : '' }}
              <router-link :to="{ name: 'CustomerView', params: { customerId: follower.id } }">{{ follower.id }}</router-link>
            </span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="customer.id" :to="{ name: 'CustomerEdit', params: { customerId: customer.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./customer-details.component.ts"></script>
