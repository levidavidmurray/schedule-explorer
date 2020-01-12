import {
  getModule,
  Module, Mutation,
  MutationAction,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import {Moment} from 'moment';
import {UserInfo} from '@/components/workflow/types';

@Module({
  namespaced: true,
  name: 'schedule',
  store,
  dynamic: true,
})
class ScheduleModule extends VuexModule {
  public selectedDate: Moment | null = null;
  public selectedTime: Moment | null = null;

  public userInfo: UserInfo = {
    fullName: '',
    email: '',
    phone: '',
  };

  get date() {
    return this.selectedDate || null;
  }

  get time() {
    return this.selectedTime || null;
  }

  get fullName() {
    return this.userInfo.fullName;
  }

  get email() {
    return this.userInfo.email;
  }

  get phone() {
    return this.userInfo.phone;
  }

  @Mutation
  public setDate(date: Moment) {
    this.selectedDate = date;
  }

  @Mutation
  public setTime(time: Moment) {
    this.selectedTime = time;
  }

  @Mutation
  public clearTime() {
    this.selectedTime = null;
  }

  @Mutation
  public clearDate() {
    this.selectedDate = null;
  }

  @Mutation
  public setFullName(fullName: string) {
    this.userInfo.fullName = fullName;
  }

  @Mutation
  public setEmail(email: string) {
    this.userInfo.email = email;
  }

  @Mutation
  public setPhone(phone: string) {
    this.userInfo.phone = phone;
  }
}

export default getModule(ScheduleModule);
