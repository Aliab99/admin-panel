<template>
	<article class="row gx-3 ">
		<section class="col-12 col-md-6 ">
			<DiscountShow/>
		</section>
		<section class="col-12 col-md-6 ">
			<DiscountGenerator/>
		</section>
	</article>
</template>

<script>
	import DiscountGenerator from '../components/DiscountGenerator.vue';
	import DiscountShow from "@/components/DiscountShow.vue";

	export default {
		name: 'Discount',
		components: {
			DiscountGenerator: DiscountGenerator,
			DiscountShow:DiscountShow,
		},
	};
</script>

