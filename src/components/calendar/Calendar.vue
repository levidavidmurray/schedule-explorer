<template>
	<div class="calendar-wrapper">
		<div class="month-select">
			<h4 class="month-label">{{ monthLabel }}</h4>
			<div class="buttons">
				<icon-button @click="decrementMonth()" icon="chevron-left"/>
				<icon-button @click="incrementMonth()" icon="chevron-right"/>
			</div>
		</div>
		<div class="calendar-grid">
			<span class="day" v-for="day in days">{{ day }}</span>
			<span v-for="_ in blankDays"></span>
			<div v-for="date in dates" :class="dateStyles(date)">
				<div class="date-activatable" @click="selectDate(date)">
					<div class="bg"></div>
					<span>{{ date.date() }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import moment, {Moment, weekdaysShort} from 'moment';
  import IconButton from '@/components/buttons/IconButton.vue';
  import ScheduleStore from '@/store/modules/schedule.store';

  @Component({components: {IconButton}})
  export default class Calendar extends Vue {
    public currentMonth: Moment = moment();
    public days: string[] = weekdaysShort();

    public decrementMonth() {
      this.currentMonth = this.currentMonth.clone().subtract(1, 'months');
    }

    public incrementMonth() {
      this.currentMonth = this.currentMonth.clone().add(1, 'months');
    }

    public selectDate(date: Moment) {
      ScheduleStore.setDate(date);
      this.$forceUpdate();
    }

    public dateStyles(date: Moment) {
      return {
        date: true,
        today: date.isSame(moment(), 'days'),
        selected: date.isSame(this.selectedDate),
      };
    }

    get selectedDate() {
      return ScheduleStore.selectedDate!;
    }

    get blankDays() {
      const firstDate = this.currentMonth.clone().startOf('month');
      const blankArr: string[] = [];

      for (const day of this.days) {
        if (firstDate.format('ddd') === day) {
          return blankArr;
        }

        blankArr.push(day);
      }
    }

    get dates() {
      const datesArr: Moment[] = [];
      for (let i = 1; i <= this.currentMonth.daysInMonth(); i++) {
        datesArr.push(this.currentMonth.date(i).clone());
      }

      return datesArr;
    }

    get monthLabel() {
      return this.currentMonth.format('MMMM YYYY');
    }
  }
</script>

<style scoped lang="scss">
	.calendar-wrapper {
		grid-column: 1;
		grid-row: 1;
		display: flex;
		flex-direction: column;

		.month-select {
			display: flex;
			justify-content: space-between;
			margin-bottom: 8px;

			.month-label {
				font-size: 22px;
			}

			.buttons {
				display: flex;
				justify-content: center;
				width: 80px;

				.base-button:first-of-type {
					margin-right: 8px;
				}
			}
		}

		.calendar-grid {
			flex-grow: 1;
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			grid-template-rows: repeat(6, 42px);
			grid-column-gap: 4px;
			grid-row-gap: 4px;

			.day {
				text-transform: uppercase;
				justify-self: center;
				align-self: end;
				font-size: 0.9em;
				font-weight: bold;
				margin-bottom: 8px;
			}

			.date {
				color: var(--color-gray-dark);
				padding: 3px;
				cursor: pointer;
				position: relative;

				.date-activatable {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;

					.bg {
						position: absolute;
						width: 100%;
						height: 100%;
						z-index: 1;
						border-radius: 8px;
						transition: transform 0.5s ease;
						transform: scale(0);
					}

					span {
						user-select: none;
						position: relative;
						z-index: 2;
					}
				}

				&.today {
					.date-activatable {
						font-weight: bold;
						color: var(--color-primary-active);

						.bg {
							background-color: var(--color-lavender);
							transform: scale(1);
						}
					}
				}

				&.selected {
					.date-activatable {
						span {
							transition: color 0.1s 0.1s ease, transform 0.2s ease-out;
							color: white;
							animation: date-select-anim 0.4s ease-out;
						}

						.bg {
							background-color: var(--color-primary-active);
							transform: scale(1);
						}
					}
				}
			}
		}

		@keyframes date-select-anim {
			0% {
				transform: scale(1);
			}
			60% {
				transform: scale(0.8);
			}
			100% {
				transform: scale(1);
			}
		}

	}
</style>
