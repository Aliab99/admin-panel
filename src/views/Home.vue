<template>
	<article class="row gx-3 gy-4 Home">
		<section class="col-12 col-md-12">
			<!-- Statistics section(بخش آمار) -->
			<Statistic />
			<!-- end Statistics section(پایان بخش آمار) -->
			<!-- finance section -->
			<Finance />
			<!-- end finance section -->
		</section>
	</article>
</template>

<script>
import Statistic from "@/components/Statistic.vue";
import Finance from "@/components/Finance.vue";

	export default {
		name: 'Home',
    components:{
      Statistic,
      Finance,
    }
	};
</script>
