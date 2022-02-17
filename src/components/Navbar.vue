<template>
	<nav class="navbar bg-white shadow-sm rounded mb-4 overflow-hidden">
		<div
			class="w-100 d-md-flex justify-content-start align-items-center flex-row-reverse"
		>
			<!-- profile photo container -->
			<div class="d-flex flex-row-reverse pb-2 pb-md-0">
				<a class="navbar-brand" href="#">
					<img
						src="../assets/images/Ellipse.png"
						alt="profile Photo"
						width="35"
						height="35"
					/>
				</a>
				<div class="text-end mx-2">
					<p class="fs-5 lh-sm m-0">profile Name</p>
					<p class="fs-6 lh-1 m-0">Admin</p>
				</div>
			</div>
			<!-- notification icon (bell) -->
			<span class="icon-bell position-relative mx-4">
				<span
					class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger bg-red p-1 fs-6 fw-normal"
				>
					99+
				</span>
			</span>
			<!-- orders icon (basket) -->
			<span class="icon-basket position-relative mx-4">
				<span
					class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger bg-red p-1 fs-6 fw-normal"
				>
					99+
				</span>
			</span>
			<div class="d-inline-flex flex-row-reverse">
				<span @click="searchBoxToggle" class="icon-search mx-4"></span>
				<!-- TODO:search input must be visually hidden -->
				<transition name="fade"> 
          <input
						v-if="searchBoxShow"
						type="text"
						class="rounded-pill bg-lightGray"
				  />
        </transition>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				searchBoxShow: false,
			};
		},
		methods: {
			searchBoxToggle() {
				this.searchBoxShow = this.searchBoxShow ? false : true;
			},
		},
	};
</script>

<style scoped>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all .2s ease-in-out;
}
.fade-leave-active{
  transition: all .2s ease-in-out;
  opacity: 0;
}
</style>