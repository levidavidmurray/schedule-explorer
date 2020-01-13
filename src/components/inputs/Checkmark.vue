<template>
	<div class="checkmark" :style="style">
		<i class="mdi mdi-check-bold"></i>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Checkmark extends Vue {
    @Prop({default: '56px'}) public readonly size!: string;
    @Prop({default: 'var(--color-lavender)'}) public readonly bgColor!: string;
    @Prop({default: 'var(--color-primary-active)'}) public readonly color!: string;
    @Prop({default: '28px'}) public readonly fontSize!: string;

    get style() {
      return {
        width: this.size,
        height: this.size,
        backgroundColor: this.bgColor,
        color: this.color,
        fontSize: this.fontSize,
      };
    }
  }
</script>

<style scoped lang="scss">
  @keyframes scale-in {
		0% {
      transform: scale(0);
			opacity: 0;
		}
		100% {
      transform: scale(1);
			opacity: 1;
		}
	}

	.checkmark {
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
    transform: scale(0);
		animation: scale-in 0.5s ease 0.2s forwards;

		i {
			transform: scale(0);
			animation: scale-in 0.25s ease 0.5s forwards;
		}
	}
</style>
