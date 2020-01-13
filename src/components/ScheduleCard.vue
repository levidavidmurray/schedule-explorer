<template>
  <div class="schedule-card" :class="{row}">
    <div class="item date">
      <span class="title">Date</span>
      <transition name="fade" mode="out-in">
        <span :key="displayDate" class="data">{{ displayDate }}</span>
      </transition>
    </div>
    <div class="item time">
      <span class="title">Time</span>
      <transition name="fade" mode="out-in">
        <span class="data" :key="displayTime" v-if="time">
					{{ displayTime }}
					<span class="tz">(GMT {{gmtOffset}})</span>
        </span>
        <span class="data placeholder" key="placeholder" v-else>Please select a time</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {Moment} from 'moment';

  @Component
  export default class ScheduleCard extends Vue {
    @Prop() public readonly date!: Moment;
    @Prop() public readonly time!: Moment;
    @Prop({type: Boolean}) public readonly row!: boolean;

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
  .schedule-card {
    background-color: var(--color-gray-lighter);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.row {
      width: 85%;
      flex-direction: row;
    }

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
        margin-bottom: 8px;
      }
    }
  }
</style>
