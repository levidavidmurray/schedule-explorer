<template>
  <div class="confirmation">
    <div class="content">
      <checkmark/>
      <div class="text">
        <h2>We just scheduled a demo for you!</h2>
        <p>
          A calendar invitation for your upcoming demo session has been sent to your email
          <span class="bold">({{ email }})</span>.
        </p>
      </div>
      <schedule-card v-if="dateTime" :date="dateTime" :time="dateTime" row />
      <base-button primary @click="$emit('close')">Back to Home</base-button>
      <base-button fill="transparent">Resend E-Mail</base-button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Checkmark from '@/components/inputs/Checkmark.vue';
  import ScheduleCard from '@/components/ScheduleCard.vue';
  import ScheduleStore from '@/store/modules/schedule.store';
  import {Moment} from 'moment';

  @Component({
    components: {ScheduleCard, Checkmark},
  })
  export default class Confirmation extends Vue {
    public dateTime!: Moment;
    public email!: string;

    public created() {
      this.dateTime = ScheduleStore.time!;
      this.email = ScheduleStore.email;

      ScheduleStore.clear();
    }

  }
</script>

<style scoped lang="scss">
  @keyframes fade-in-bottom {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from {opacity: 0}
    to {opacity: 1}
  }

  .confirmation {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 99;
    padding: 72px 0 48px 0;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 448px;
      margin: 0 auto;

      .text {
        text-align: center;

        h2 {
          margin-top: 24px;
          opacity: 0;
          animation: fade-in-bottom 0.75s ease forwards;
        }

        p {
          color: var(--color-gray);

          .bold {
            font-weight: bold;
          }
        }
      }

      .schedule-card {
        margin-top: 24px;
        animation: fade-in 0.9s ease forwards;
      }

      .base-button {
        &:first-of-type {
          margin-top: 32px;
          width: 168px;
          font-size: 15px;
          font-weight: normal;
        }

        &:nth-of-type(2) {
          margin-top: 8px;
          font-size: 15px;
        }
      }
    }
  }
</style>
