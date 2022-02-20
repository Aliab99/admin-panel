<template>
  <article class="row gx-3 gy-4 Home">
    <section class="col-12 col-sm-6 col-md-4 d-flex" v-for="item in products" :key="item">
      <!--محصول-->
      <Prod :item="item" />
      <!--محصول-->
    </section>
  </article>
</template>

<script>
import Prod from "../components/Prod.vue";
	import axios from '../../node_modules/axios/dist/axios';
export default {
  name: "Products",
  		data() {
			return{
				products:{},
			}
		},
		mounted() {
			axios
				.get('/api/admin/product/show')
				.then((response) => {
					// handle success
					this.products = response.data;
				})
				.catch((error) => {
					// handle error
					console.log(error);
				});
		},
  components: {
    Prod,
  },
};
</script>