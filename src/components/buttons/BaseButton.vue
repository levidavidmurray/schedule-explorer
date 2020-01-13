<template>
	<button @click="$emit('click')" :class="computedClasses" v-bind="$props" :style="styleOverride">
        <span class="button-text">
			<i v-if="iconButton" :class="`mdi ${this.icon}`"></i>
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
    @Prop({type: Boolean}) public readonly iconButton!: boolean;
    @Prop({type: String}) public readonly icon!: string;
    @Prop({default: '16px'}) public readonly pad!: string;
    @Prop({default: '40px'}) public readonly height!: string;

    get computedClasses() {
      const classes = ['base-button', this.fill];
      if (this.iconButton) {
        classes.push('icon-button');
      }
      return classes;

    }

    get styleOverride() {
      if (this.iconButton) {
        return {
          padding: '0 4px',
          height: '28px',
        };
      }

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
		transition: all 0.2s ease;
		outline: none;
    font-size: 14px;

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

		&:focus {
			transform: scale(1.05);
			background-color: var(--color-primary-active);
			color: white;
		}

		&.secondary {
			background-color: var(--color-lavender);
			color: var(--color-primary-active);
		}

		&.outline {
			background-color: transparent;
			border: 1px solid var(--color-gray-light);
			color: var(--color-primary-active);
			font-weight: normal;
			font-size: 16px;

			&[disabled] {
				color: var(--color-gray-dark);
			}
		}

    &.transparent {
      background-color: transparent;
      border: none;
      color: var(--color-primary-active);
      font-weight: normal;
    }

		&.icon-button {
			border-radius: 6px;

			.button-text {
				i {
					margin: 0;
					font-size: 22px;
				}
			}
		}
	}
</style>
