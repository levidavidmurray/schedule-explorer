<template>
	<div class="schedule-wrapper">
		<aside-info/>
		<div class="router">
			<keep-alive>
				<transition :name="transitionName" >
					<router-view :key="$route.name"/>
				</transition>
			</keep-alive>
		</div>
		<base-footer>
			<base-button :disabled="isSchedule"
						 @click="$router.go(-1)"
						 fill="secondary">
				<i class="mdi mdi-arrow-left"></i>
				Back
			</base-button>
			<base-button @click="submit" pad="32px" :disabled="!canSubmit">Next Step</base-button>
		</base-footer>
	</div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import AsideInfo from '@/components/AsideInfo.vue';
  import BaseFooter from '@/components/BaseFooter.vue';
  import ScheduleSelect from '@/components/workflow/ScheduleSelect.vue';
  import ScheduleStore from '@/store/modules/schedule.store';
  import PersonalData from '@/components/workflow/PersonalData.vue';
  import {RouteNames} from '@/router/types';

  @Component({
    components: {PersonalData, ScheduleSelect, BaseFooter, AsideInfo},
  })
  export default class ScheduleExplorer extends Vue {

    public transitionName: string = '';

    public created() {
      this.$router.beforeEach((to, from, next) => {
        this.transitionName = to.meta.page >= from.meta.page ? 'slide-left' : 'slide-right';
        next();
      });
    }

    public submit() {
      if (this.isSchedule) {
        this.$router.push({name: RouteNames.PersonalData});
      }
    }

    get isSchedule() {
      return this.$route.name === 'ScheduleSelect';
    }

    get isData() {
      return this.$route.name === 'PersonalData';
    }

    get canSubmit() {
      switch (this.$route.name) {
        case RouteNames.ScheduleSelect:
          return ScheduleStore.date && ScheduleStore.time;
        case RouteNames.PersonalData:
          return this.userInfoComplete;
      }
    }

    get userInfoComplete() {
      const {fullName, email, phone} = ScheduleStore;
      return fullName && email && phone;
    }
  }
</script>

<style scoped lang="scss">
	.schedule-wrapper {
		max-width: 896px;
		min-height: 544px;
		background-color: white;
		border-radius: 16px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: auto 72px;
		overflow: hidden;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 0 15px rgba(0, 0, 0, 0.05);

		@media only screen and (min-width: 768px) {
			height: 70vh;
			min-width: 896px;
			max-height: 544px;
		}

		@media only screen and (max-width: 968px) {
			width: 85%;
			min-width: unset;
		}

		.router {
			overflow: hidden;
			position: relative;
		}

		.slide-left-enter-active,
		.slide-left-leave-active,
		.slide-right-enter-active,
		.slide-right-leave-active {
			position: absolute;
			transition: opacity 0.35s ease, transform 0.5s ease;
			overflow: hidden;
		}

		.slide-right-enter-active, .slide-left-enter-active {
			z-index: 100;
		}

		.slide-right-leave-active, .slide-left-leave-active {
			z-index: 0;
			opacity: 0;
		}

		.slide-left-enter,
		.slide-right-leave-active {
			transform: translate(100%, 0);
		}

		.slide-left-leave-active,
		.slide-right-enter {
			transform: translate(-100%, 0);
		}
	}
</style>
