<template>
  <div class="d-flex">
    <!-- !-----------------------------------------------sidebar-------------------------------------------------- -->
    <Sidebar />
    <!-- !-----------------------------------------------end sidebar-------------------------------------------------- -->
    <main class="px-3 py-4 col-sm-11 col-12">
      <!-- !-----------------------------------------------navbar-------------------------------------------------- -->
      <Navbar />
      <!-- !-----------------------------------------------end navbar-------------------------------------------------- -->
      <!-- !-----------------------------------------------Content-------------------------------------------------- -->
      <article class="row gx-3 gy-4">
        <section class="col-12 col-md-8">
          <!-- Statistics section(بخش آمار) -->
          <Statistic />
          <!-- end Statistics section(پایان بخش آمار) -->
          <!-- finance section -->
          <Finance />
          <!-- end finance section -->
        </section>
        <section class="col-12 col-md-4">
          <!-- Discount generator section -->
          <Discount />
          <!-- End Discount generator section -->
          <!-- view section -->
          <View />
        </section>
      </article>
      <!-- !-----------------------------------------------Content-------------------------------------------------- -->
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Statistic from "@/components/Statistic.vue";
import Finance from "@/components/Finance.vue";
import Discount from "@/components/Discount.vue";
import View from "@/components/View.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Statistic,
    Finance,
    Discount,
    View
  },
};
</script>

<style>
</style>
