<template>
	<div>
		<div  class="d-flex">
			<!-- !-----------------------------------------------sidebar-------------------------------------------------- -->
			<transition name="sidebar">
				<Sidebar v-if="SidebarShow && this.$store.state.isAuthentic" />
			</transition>
			<!-- !-----------------------------------------------end sidebar-------------------------------------------------- -->
			<main class="px-3 py-4 col-12" :class="mainBoxSize">
				<!-- !-----------------------------------------------navbar-------------------------------------------------- -->
				<Navbar v-if="this.$store.state.isAuthentic" @toggleSideBar="toggleSideBar" />
				<!-- !-----------------------------------------------end navbar-------------------------------------------------- -->
				<!-- !-----------------------------------------------Content-------------------------------------------------- -->
				<router-view></router-view>
				<!-- !-----------------------------------------------Content-------------------------------------------------- -->
			</main>
		</div>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';
	import Sidebar from '@/components/Sidebar.vue';
	export default {
		name: 'App',
		data(){
			return{
				SidebarShow:true,
				mainBoxSize:'col-sm-11',
			}
		},
		methods:{
			toggleSideBar(){
				this.SidebarShow=!this.SidebarShow;
				this.SidebarShow ?  (this.mainBoxSize = 'col-sm-11') : setTimeout(() => this.mainBoxSize='col-sm-12',400);
			}
		},
		components: {
			Navbar,
			Sidebar,
		},
		watch:{
			$route(){
				this.$store.commit('onStart');
				console.log(this.$store.state.isAuthentic,this.$store.state.token);
				console.log(this.$store.state.isAuthentic);
			}
		}
	};
</script>

<style>
	.sidebar-enter-from{
		opacity: 0;
	}
	.sidebar-enter-active{
		transition: all .8s ease-in-out;
		animation: sidebarShow .4s ease-in-out;
	}
	.sidebar-leave-active{
		animation: sidebarHide .4s ease-in-out;
		transition: all .4s ease-in-out;
	}
	.sidebar-leave-to{
		opacity:0;
	}
	@keyframes sidebarShow {
		from{
			transform: translateX(40px);
			/* opacity: 0; */
		}
		to{
			transform: translateX(0px);
			/* opacity: 1; */
		}
	}
	@keyframes sidebarHide {
		from{
			transform: translateX(0px);
		}
		to{
			transform: translateX(40px);
		}
	}
</style>
