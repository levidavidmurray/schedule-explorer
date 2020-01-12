<template>
	<workflow header="Enter your information">
		<h4>Personal Data</h4>
		<div class="data-wrapper">
			<div class="base-input">
				<label :for="inputs[0].name">{{ inputs[0].label }}</label>
				<input v-bind="inputs[0]" v-model="fullName">
			</div>
			<div class="base-input">
				<label :for="inputs[1].name">{{ inputs[1].label }}</label>
				<input v-bind="inputs[1]" v-model="email">
			</div>
			<div class="base-input">
				<label :for="inputs[2].name">{{ inputs[2].label }}</label>
				<input v-bind="inputs[2]" v-model="phone">
			</div>
		</div>
	</workflow>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Workflow from '@/components/workflow/Workflow.vue';
  import {InputAttrs, userDataInputs, UserInfo} from '@/components/workflow/types';
  import ScheduleStore from '@/store/modules/schedule.store';
  import {RouteNames} from '@/router/types';

  @Component({
    components: {Workflow},
  })
  export default class PersonalData extends Vue {
    public inputs: InputAttrs[] = userDataInputs;

    public created() {
      if (!ScheduleStore.date || !ScheduleStore.time) {
        this.$router.push({name: RouteNames.ScheduleSelect});
      }
    }

    get fullName() {
      return ScheduleStore.fullName;
    }

    set fullName(value: string) {
      ScheduleStore.setFullName(value);
    }

    get email() {
      return ScheduleStore.email;
    }

    set email(value: string) {
      ScheduleStore.setEmail(value);
    }

    get phone() {
      return ScheduleStore.phone;
    }

    set phone(value: string) {
      ScheduleStore.setPhone(value);
    }
  }
</script>

<style scoped lang="scss">
	h4 {
		font-size: 22px;
	}

	.data-wrapper {
		width: 80%;
		height: 100%;
		padding-top: 36px;

		.base-input {
			display: flex;
			flex-direction: column;
			margin-bottom: 24px;

			label {
				margin-bottom: 8px;
			}

			input {
				font-size: 16px;
				padding: 12px 12px;
				border: 1px solid var(--color-gray-light);
				border-radius: 6px;
			}
		}
	}
</style>
