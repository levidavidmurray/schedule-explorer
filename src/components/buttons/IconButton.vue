<template>
	<base-button
			@click="$emit('click')"
			fill="secondary"
			icon-button
			:icon="`mdi-${icon}`"
	/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class IconButton extends Vue {
    @Prop({type: String}) public icon!: string;
  }
</script>

<style scoped>

</style>
