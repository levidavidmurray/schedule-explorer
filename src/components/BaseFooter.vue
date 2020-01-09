<template>
    <div class="base-footer">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class BaseFooter extends Vue {

    }
</script>

<style scoped lang="scss">
    .base-footer {
        grid-row: 2;
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        border-top: 1px solid var(--color-border-disabled);
    }
</style>
