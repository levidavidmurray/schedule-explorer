<template>
    <div class="workflow-wrapper">
        <h3>Select a Date & Time</h3>
        <div class="workflow-slot">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Workflow extends Vue {

    }
</script>

<style scoped lang="scss">
    .workflow-wrapper {
        grid-column: 2;
        grid-row: 1;
        display: grid;
        grid-template-columns: 32px auto;
        grid-template-rows: 32px 28px auto;

        h3 {
            grid-column: 2;
            grid-row: 2;
        }

        .workflow-slot {
            grid-column: 2;
            grid-row: 3;
        }
    }
</style>
