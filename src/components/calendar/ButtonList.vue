<template>
	<div class="button-list">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class ButtonList extends Vue {

  }
</script>

<style scoped lang="scss">
	.button-list {
		display: flex;
		flex-direction: column;
		padding-right: 10px;
		padding-left: 16px;
		scroll-behavior: smooth;
		overflow-x: hidden;
    overflow-y: scroll;

		& > * {
			margin-bottom: 8px;
		}
	}
</style>
