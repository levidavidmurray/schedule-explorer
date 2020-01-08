<template>
  <div class="home">
    <ScheduleExplorer/>
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
