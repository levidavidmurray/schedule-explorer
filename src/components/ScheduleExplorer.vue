<template>
  <div class="schedule-wrapper">
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ScheduleExplorer extends Vue {
  }
</script>

<style scoped lang="scss">
  .schedule-wrapper {
    max-width: 768px;
    min-height: 544px;
    background-color: white;

    @media only screen and (min-width: 768px) {
      height: 70vh;
      max-height: 544px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 0 15px rgba(0, 0, 0, 0.05);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }

  }
</style>
