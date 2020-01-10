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
        <span class="data">9. January 2020</span>
      </div>
      <div class="item time">
        <span class="title">Time</span>
        <span class="data">
          14:00 - 14:15
          <span class="tz">(GMT +1)</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class AsideInfo extends Vue {

    @Prop({default: false}) public readonly showBottom!: boolean;

    get bottomVisible(): string {
      return this.showBottom ? 'visible' : '';
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

    .top-info {
      grid-column: 2;
      grid-row: 2;

      .base-button {
        margin-top: 4px;
      }

      .schedule-module-name {
        color: var(--color-gray-light);
        margin-bottom: 4px;
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

            .tz {
              margin-left: 8px;
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

        .data {
          .tz {
            font-size: 0.8em;
            color: var(--color-gray);
          }
        }
      }
    }
  }
</style>
