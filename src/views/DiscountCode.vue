<template>
	<article class="row gx-3 ">
		<section class="col-12 col-md-6 ">
			<div class="p-3 shadow-sm bg-white rounded">Custom column padding</div>
		</section>
		<section class="col-12 col-md-6 ">
			<DiscountGenerator/>
		</section>
	</article>
</template>

<script>
	import DiscountGenerator from '../components/DiscountGenerator.vue';

	export default {
		name: 'Discount',
		components: {
			DiscountGenerator: DiscountGenerator,
		},
	};
</script>

