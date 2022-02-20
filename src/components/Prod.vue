<template>
	<div class="card rounded shadow-sm w-100">
		<!-- ------------عکس محصول------------ -->
		<img :src="item.image" class="card-img-top" alt="تب_سنج_آریو" />
		<!-- ------------عکس محصول------------ -->
		<!-- ---------------عنوان و توضیحات محصول--------- -->
		<div class="card-body text-center gx-5">
			<h5 class="card-title position-relative">
				<span>{{ item.name }}</span>
				<span class="mx-2 badge rounded-pill bg-danger">
					{{ item.status == 'available' ? 'موجود' : 'نا موجود' }}
				</span>
			</h5>
			<p class="card-text fs-6">{{ item.description }}</p>
			<p class="card-text fs-6">قیمت : {{ item.price }}</p>
			<p>
				<a @click="log" class="btn"> خرید محصول </a>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Prod',
		props: ['item'],
		methods: {
			log() {
				console.log(this.item);
			},
		},
	};
</script>
<style scoped>
	.btn {
		background-color: #7466f1 !important;
		color: aliceblue !important;
	}
</style>
