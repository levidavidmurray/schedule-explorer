<template>
	<div class="date-time-select">
		<calendar/>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Calendar from '@/components/calendar/Calendar.vue';

  @Component({
    components: {Calendar},
  })
  export default class DateTimeSelect extends Vue {

  }
</script>

<style scoped lang="scss">
	.date-time-select {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: auto;
	}
</style>
