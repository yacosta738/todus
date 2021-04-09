import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue {
  @Prop({ type: String, required: true }) readonly fullName: string;
  @Prop({ type: String, required: true }) readonly login: string;
  @Prop({ type: String, default: 'https://i.pravatar.cc/300' }) readonly avatar: string;
}
