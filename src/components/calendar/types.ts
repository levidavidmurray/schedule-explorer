import {Moment} from 'moment';

export interface ScheduleSlot {
  time: Moment;
  available: boolean;
}
