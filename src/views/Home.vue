<template>
  <div class="fs-wrapper no-scroll flex center">
    <schedule-explorer/>
  </div>
</template>

<script lang="ts">
    import ScheduleExplorer from '@/components/ScheduleExplorer.vue';

    export default {
        name: 'home',
        components: {
            ScheduleExplorer,
        },
    };
</script>
