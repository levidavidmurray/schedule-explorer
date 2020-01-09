<template>
    <button :class="[fill, 'base-button']" v-bind="$props" :style="styleOverride">
        <span class="button-text">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class BaseButton extends Vue {
        @Prop({default: 'primary'}) public readonly fill!: string;
        @Prop({default: '16px'}) public readonly pad!: string;
        @Prop({default: '40px'}) public readonly height!: string;

        get styleOverride() {
            return {
                padding: `0 ${this.pad}`,
                height: this.height,
            };
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/_mixins.scss';

    button {
        @include active-button-effect;

        height: 40px;
        border: none;
        background-color: var(--color-primary);
        border-radius: var(--border-radius);
        cursor: pointer;
        font-weight: 600;
        outline: none;

        .button-text {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            & > * {
                &:first-child {
                    margin-right: 6px;
                }
            }

            .mdi {
                font-size: 18px;
                line-height: 1;
            }
        }


        &[disabled] {
            opacity: var(--opacity-disabled);
            cursor: default;
        }

        &.primary {
            background-color: var(--color-primary-active);
            color: white;
        }

        &.secondary {
            background-color: var(--color-lavender);
            color: var(--color-primary-active);
        }
    }
</style>
