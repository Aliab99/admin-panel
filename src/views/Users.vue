<template>
  <article class="row gx-3 gy-4 Home">
    <section class="col-12 col-md-12">
      <User></User>
    </section>
  </article>
</template>

<script>
import User from "@/components/User.vue";

export default {
  name: "Users",
  components: {
    User,
  },
};
</script>

