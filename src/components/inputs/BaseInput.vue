<template>
	<div class="base-input">
		<label :for="id">{{ label }}</label>
		<input type="text" :name="name" :id="id" :placeholder="placeholder">
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class BaseInput extends Vue {
    @Prop() public readonly id!: string;
    @Prop() public readonly name!: string;
    @Prop() public readonly label!: string;
    @Prop() public readonly placeholder!: string;
  }
</script>

<style scoped>

</style>
