/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import TweetsComponent from '@/entities/tweets/tweets.vue';
import TweetsClass from '@/entities/tweets/tweets.component';
import TweetsService from '@/entities/tweets/tweets.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('b-badge', {});
localVue.component('jhi-sort-indicator', {});
localVue.directive('b-modal', {});
localVue.component('b-button', {});
localVue.component('router-link', {});

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {},
    show: () => {},
  },
};

describe('Component Tests', () => {
  describe('Tweets Management Component', () => {
    let wrapper: Wrapper<TweetsClass>;
    let comp: TweetsClass;
    let tweetsServiceStub: SinonStubbedInstance<TweetsService>;

    beforeEach(() => {
      tweetsServiceStub = sinon.createStubInstance<TweetsService>(TweetsService);
      tweetsServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<TweetsClass>(TweetsComponent, {
        store,
        i18n,
        localVue,
        stubs: { jhiItemCount: true, bPagination: true, bModal: bModalStub as any },
        provide: {
          tweetsService: () => tweetsServiceStub,
        },
      });
      comp = wrapper.vm;
    });

    it('Should call load all on init', async () => {
      // GIVEN
      tweetsServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 'ABC' }] });

      // WHEN
      comp.retrieveAllTweetss();
      await comp.$nextTick();

      // THEN
      expect(tweetsServiceStub.retrieve.called).toBeTruthy();
      expect(comp.tweets[0]).toEqual(jasmine.objectContaining({ id: 'ABC' }));
    });

    it('should load a page', async () => {
      // GIVEN
      tweetsServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 'ABC' }] });
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();

      // THEN
      expect(tweetsServiceStub.retrieve.called).toBeTruthy();
      expect(comp.tweets[0]).toEqual(jasmine.objectContaining({ id: 'ABC' }));
    });

    it('should re-initialize the page', async () => {
      // GIVEN
      tweetsServiceStub.retrieve.reset();
      tweetsServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 'ABC' }] });

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();
      comp.clear();
      await comp.$nextTick();

      // THEN
      expect(tweetsServiceStub.retrieve.callCount).toEqual(2);
      expect(comp.page).toEqual(1);
      expect(comp.tweets[0]).toEqual(jasmine.objectContaining({ id: 'ABC' }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,asc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // GIVEN
      comp.propOrder = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,asc', 'id']);
    });
    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      tweetsServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 'ABC' });
      comp.removeTweets();
      await comp.$nextTick();

      // THEN
      expect(tweetsServiceStub.delete.called).toBeTruthy();
      expect(tweetsServiceStub.retrieve.callCount).toEqual(1);
    });
  });
});
