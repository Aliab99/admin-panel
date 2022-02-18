<template>
	<article class="row gx-3 gy-4 Home">
		<section class="col-12 col-md-12">
			<Statistic/>
      <Amar/>
		</section>
	</article>
</template>

<script>
import Statistic from "@/components/Statistic.vue";
import Amar from "@/components/Amar.vue";

	export default {
		name: 'Amarha',
    components:{
      Statistic,
      Amar,
    }
	};
</script>