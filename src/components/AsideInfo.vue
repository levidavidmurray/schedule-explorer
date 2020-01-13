<template>
  <div class="aside-info">
    <div class="top-info">
      <h3 class="schedule-module-name">Walkthrough</h3>
      <h2 class="schedule-module-title">Schedule a demo</h2>
      <base-button @click="clearDate" pad="8px" fill="secondary" height="32px">
        <i class="mdi mdi-clock"></i>
        <span>10-20min</span>
      </base-button>
    </div>
    <transition name="slide-in" mode="in-out">
      <schedule-card v-if="date" :date="date" :time="time"/>
    </transition>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import ScheduleStore from '@/store/modules/schedule.store';
  import ScheduleCard from '@/components/ScheduleCard.vue';

  @Component({
    components: {ScheduleCard},
  })
  export default class AsideInfo extends Vue {
    get date() {
      return ScheduleStore.date!;
    }

    public clearDate() {
      ScheduleStore.clearDate();
    }

    get time() {
      return ScheduleStore.time!;
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

    .schedule-card {
      grid-column: 2;
      grid-row: 4;
    }
  }
</style>
