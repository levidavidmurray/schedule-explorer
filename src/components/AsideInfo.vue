<template>
	<div class="aside-info">
		<div class="top-info">
			<h3 class="schedule-module-name">Walkthrough</h3>
			<h2 class="schedule-module-title">Schedule a demo</h2>
			<base-button pad="8px" fill="secondary" height="32px">
				<i class="mdi mdi-clock"></i>
				<span>10-20min</span>
			</base-button>
		</div>

		<div :class="['bottom-info slide-in-anim', bottomVisible]">
			<div class="item date">
				<span class="title">Date</span>
				<span class="data">{{ displayDate }}</span>
			</div>
			<div class="item time">
				<span class="title">Time</span>
				<span class="data placeholder" v-if="!time">Please select</span>
				<span class="data" v-else>
					{{ displayTime }}
					<span class="tz">(GMT {{gmtOffset}})</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import ScheduleStore from '@/store/modules/schedule.store';

  @Component
  export default class AsideInfo extends Vue {
    get bottomVisible(): string {
      return this.date ? 'visible' : '';
    }

    get date() {
      return ScheduleStore.date!;
    }

    get time() {
      return ScheduleStore.time!;
    }

    get displayDate() {
      if (this.date) {
        return this.date.format('D. MMMM YYYY');
      }
    }

    get displayTime() {
      if (this.time) {
        const start = this.time.format('HH:mm');
        const end = this.time.clone().add(15, 'minutes').format('HH:mm');
        return `${start} - ${end}`;
      }
    }

    get gmtOffset() {
      if (this.time) {
        const offset = parseInt(this.time.format('Z'), 10);

        if (offset < 0) {
          return offset.toString();
        }

        return `+${offset.toString()}`;
      }
    }

  }
</script>

<style scoped lang="scss">

	.aside-info {
		grid-column: 1;
		grid-row: span 1;
		border-right: var(--border);
		display: grid;
		grid-template-rows: 32px 25% auto 30% 32px;
		grid-template-columns: 24px auto 24px;
		overflow: hidden;
		min-width: 244px;

		.top-info {
			grid-column: 2;
			grid-row: 2;

			.base-button {
				margin-top: 4px;

				/deep/ i {
					color: var(--color-lavender);
					background-color: var(--color-primary-active);
					border-radius: 3px;
					padding: 1px;
					font-size: 15px;
				}
			}
		}

		.bottom-info {
			grid-column: 2;
			grid-row: 4;
			background-color: var(--color-gray-lighter);
			padding: 16px 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.item {
				font-weight: bold;

				&.time {
					.data {
						display: flex;

						&.placeholder {
							font-weight: normal;
							color: var(--color-gray-light);
						}

						.tz {
							margin-left: 8px;
							font-weight: normal;
							font-size: 0.8em;
							color: var(--color-gray);
						}
					}
				}

				.title {
					display: block;
					text-transform: uppercase;
					font-size: 0.8em;
					color: var(--color-gray);
					margin-bottom: 4px;
				}
			}
		}
	}
</style>
