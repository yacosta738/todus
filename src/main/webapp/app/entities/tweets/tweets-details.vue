<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="tweets">
        <h2 class="jh-entity-heading" data-cy="tweetsDetailsHeading">
          <span v-text="$t('todusApp.tweets.detail.title')">Tweets</span> {{ tweets.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('todusApp.tweets.content')">Content</span>
          </dt>
          <dd>
            <span>{{ tweets.content }}</span>
          </dd>
          <dt>
            <span v-text="$t('todusApp.tweets.createdAt')">Created At</span>
          </dt>
          <dd>
            <span v-if="tweets.createdAt">{{ $d(Date.parse(tweets.createdAt), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('todusApp.tweets.updatedAt')">Updated At</span>
          </dt>
          <dd>
            <span v-if="tweets.updatedAt">{{ $d(Date.parse(tweets.updatedAt), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('todusApp.tweets.customer')">Customer</span>
          </dt>
          <dd>
            <div v-if="tweets.customer">
              <router-link :to="{ name: 'CustomerView', params: { customerId: tweets.customer.id } }">{{ tweets.customer.id }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="tweets.id" :to="{ name: 'TweetsEdit', params: { tweetsId: tweets.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./tweets-details.component.ts"></script>
