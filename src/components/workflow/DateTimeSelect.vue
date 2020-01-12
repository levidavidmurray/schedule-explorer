<template>
	<div class="date-time-select">
		<calendar/>
		<button-list ref="buttonList">
			<base-button
					class="time-button"
					v-for="(slot, index) in scheduleSlots"
					@click="selectTime(slot.time)"
					:fill="getFill(slot.time)"
					:disabled="!slot.available"
					:key="index"
					height="48px"
			>
				{{ slot.time.format('H:mm') }}
			</base-button>
		</button-list>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Calendar from '@/components/calendar/Calendar.vue';
  import ButtonList from '@/components/calendar/ButtonList.vue';
  import moment, {Moment} from 'moment';
  import ScheduleStore from '@/store/modules/schedule.store';
  import {ScheduleSlot} from '@/components/calendar/types';

  @Component({
    components: {ButtonList, Calendar},
  })
  export default class DateTimeSelect extends Vue {
    public scheduleSlots: ScheduleSlot[] = [];

    public created() {
      this.genSlots();
    }

    public selectTime(time: Moment) {
      ScheduleStore.setTime(time);
    }

    public getFill(time: Moment) {
      if (ScheduleStore.time && time.isSame(ScheduleStore.time)) {
        return 'primary';
      }

      return 'outline';
    }

    @Watch('date')
    public onDateChange() {
      this.genSlots();
      ScheduleStore.clearTime();
      const buttonList = this.$refs.buttonList as Vue;
      buttonList.$el.scrollTop = 0;
    }

    get date() {
      return ScheduleStore.date;
    }

    public genSlots() {
      const startTime = moment().hours(9).minutes(0);
      const slots: ScheduleSlot[] = [];
      for (let i = 1; i < 10; i++) {
        const time = startTime.clone().add(15 * i, 'minutes');
        slots.push({time, available: Math.random() > 0.6});
      }

      this.scheduleSlots = slots;
    }
  }
</script>

<style scoped lang="scss">
	.date-time-select {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto;
		padding-right: 8px;

		.button-list {
			max-height: 356px;
			overflow-x: hidden;
			align-self: end;

			.time-button {
				font-size: 16px;
			}
		}
	}
</style>
