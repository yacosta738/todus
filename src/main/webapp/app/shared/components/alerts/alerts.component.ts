import 'reflect-metadata'
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {AlertType, messageText} from "@/shared/components/alerts/alert-type.enum";

@Component
export default class Alerts extends Vue {
  @Prop({type: Boolean, required: true, default: false}) readonly show: boolean;
  @Prop({type: Boolean}) readonly strongAndText: boolean;
  @Prop({type: String, required: true}) readonly text: string;
  @Prop() readonly alertType: AlertType;
  alertClass: string = "bg-green-100 border border-green-400 text-green-700";
  showAlert: boolean = false;

  @Watch('alertType')
  changeAlertClass() {
    switch (this.alertType) {
      case AlertType.ERROR:
        this.alertClass = "bg-red-100 border border-red-400 text-red-700";
        break;
      case AlertType.SUCCESS:
        this.alertClass = "bg-green-100 border border-green-400 text-green-700";
        break;
      case AlertType.WARNING:
        this.alertClass = "bg-yellow-100 border border-yellow-400 text-yellow-700";
        break;
      default:
        this.alertClass = "bg-green-100 border border-green-400 text-green-700";
    }
  }

  created() {
    this.showAlert = this.show;
  }

  closeAlert() {
    this.showAlert = false;
    this.$emit('closeAlert');
  }
  get strongText(): string {
    return messageText(this.text);
  }

  get simpleText(): string {
    return messageText(this.text, false);
  }
}
