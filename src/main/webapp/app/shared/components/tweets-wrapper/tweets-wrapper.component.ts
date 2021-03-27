import { Component, Vue} from "vue-property-decorator";
import Tweet from "./tweet/tweet.vue";
@Component({components:{Tweet}})
export default class TweetsWrapper extends Vue {}
