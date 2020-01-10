<template>
	<div class="calendar-wrapper">
		<div class="month-select">
			<h4 class="month-label">{{ monthLabel }}</h4>
			<div class="buttons">
				<icon-button @click="decrementMonth()" icon="chevron-left"/>
				<icon-button @click="incrementMonth()" icon="chevron-right"/>
			</div>
		</div>
		<div class="day-labels">
		</div>
		<div class="calendar-days">
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import moment, {Moment} from 'moment';
  import IconButton from '@/components/buttons/IconButton.vue';

  @Component({components: {IconButton}})
  export default class Calendar extends Vue {
    public currentMonth: Moment = moment();

    public decrementMonth() {
      this.currentMonth = this.currentMonth.clone().subtract(1, 'months');
    }

    public incrementMonth() {
      this.currentMonth = this.currentMonth.clone().add(1, 'months');
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

		.month-select {
			display: flex;
			justify-content: space-between;

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

		.day-labels {

		}
	}
</style>
