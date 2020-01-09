<template>
  <div class="schedule-wrapper">
    <aside-info/>
    <base-footer>
      <base-button disabled fill="secondary"><i class="mdi mdi-arrow-left"></i> Back</base-button>
      <base-button pad="32px">Next Step</base-button>
    </base-footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AsideInfo from '@/components/AsideInfo.vue';
  import BaseFooter from '@/components/BaseFooter.vue';
  @Component({
    components: {BaseFooter, AsideInfo},
  })
  export default class ScheduleExplorer extends Vue {
  }
</script>

<style scoped lang="scss">
  .schedule-wrapper {
    max-width: 896px;
    min-height: 544px;
    background-color: white;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 288px auto;
    grid-template-rows: auto 72px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 0 15px rgba(0, 0, 0, 0.05);

    @media only screen and (min-width: 768px) {
      height: 70vh;
      min-width: 896px;
      max-height: 544px;
    }

    @media only screen and (max-width: 968px) {
      width: 85%;
      min-width: unset;
    }

  }
</style>
