<template>
    <div class="aside-info"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class AsideInfo extends Vue {

  }
</script>

<style scoped lang="scss">
    .aside-info {
        grid-column: 1;
        grid-row: span 1;
        border-right: var(--border);
    }
</style>
