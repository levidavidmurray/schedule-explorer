import {
  getModule,
  Module, Mutation,
  MutationAction,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import {Moment} from 'moment';

@Module({
  namespaced: true,
  name: 'schedule',
  store,
  dynamic: true,
})
class ScheduleModule extends VuexModule {
  public selectedDate: Moment | null = null;
  public selectedTime: Moment | null = null;

  get date() {
    return this.selectedDate || null;
  }

  get time() {
    return this.selectedTime || null;
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
}

export default getModule(ScheduleModule);
