/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import VueRouter from 'vue-router';

import * as config from '@/shared/config/config';
import TweetsDetailComponent from '@/entities/tweets/tweets-details.vue';
import TweetsClass from '@/entities/tweets/tweets-details.component';
import TweetsService from '@/entities/tweets/tweets.service';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Tweets Management Detail Component', () => {
    let wrapper: Wrapper<TweetsClass>;
    let comp: TweetsClass;
    let tweetsServiceStub: SinonStubbedInstance<TweetsService>;

    beforeEach(() => {
      tweetsServiceStub = sinon.createStubInstance<TweetsService>(TweetsService);

      wrapper = shallowMount<TweetsClass>(TweetsDetailComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: { tweetsService: () => tweetsServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundTweets = { id: 'ABC' };
        tweetsServiceStub.find.resolves(foundTweets);

        // WHEN
        comp.retrieveTweets('ABC');
        await comp.$nextTick();

        // THEN
        expect(comp.tweets).toBe(foundTweets);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundTweets = { id: 'ABC' };
        tweetsServiceStub.find.resolves(foundTweets);

        // WHEN
        comp.beforeRouteEnter({ params: { tweetsId: 'ABC' } }, null, cb => cb(comp));
        await comp.$nextTick();

        // THEN
        expect(comp.tweets).toBe(foundTweets);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        comp.previousState();
        await comp.$nextTick();

        expect(comp.$router.currentRoute.fullPath).toContain('/');
      });
    });
  });
});
