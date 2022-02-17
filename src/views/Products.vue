<template>
  <article class="row gx-3 gy-4 Home">
    <section class="col-md-3 d-flex">
      <!--محصول-->
      <Prod />
      <!--محصول-->
    </section>
    <section class="col-md-3 d-flex">
      <!--محصول-->
      <Prod />
      <!--محصول-->
    </section>
  </article>
</template>

<script>
import Prod from "../components/Prod.vue";

export default {
  name: "Products",
  components: {
    Prod,
  },
};
</script>