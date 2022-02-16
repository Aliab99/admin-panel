<template>
  <div class="p-3 mb-4 bg-white rounded shadow-sm overflow-auto">
    <section class="d-flex justify-content-between">
      <!-- Statistics title -->
      <p>آمار ها <span class="icon-chart-line"></span></p>
      <!-- reload button -->
      <span class="icon-cw cursor"></span>
    </section>
    <!-- icons section -->
    <section class="row px-2 py-3">
      <!-- sale statistic (آمار فروش) -->
      <div
        class="
          col-12 col-sm-6 col-lg-3
          pb-1
          d-flex
          justify-content-start
          align-items-center
        "
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-green mx-2">
          <div
            class="icon-chart-pie-outline lh-sm p-3 icon-green rounded-pill"
          ></div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">324</p>
          <p class="fs-6 m-0 lh-base opacity-50">آمار فروش</p>
        </div>
      </div>
      <!-- users statistic (آمار کاربران) -->
      <div
        class="
          col-12 col-sm-6 col-lg-3
          pb-1
          d-flex
          justify-content-start
          align-items-center
        "
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-blue mx-2">
          <div class="icon-user-o lh-sm p-3 icon-blue rounded-pill"></div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">2736</p>
          <p class="fs-6 m-0 lh-base opacity-50">کاربران</p>
        </div>
      </div>
      <!-- product statistic (آمار محصولات) -->
      <div
        class="
          col-12 col-sm-6 col-lg-3
          pb-1
          d-flex
          justify-content-start
          align-items-center
        "
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-red mx-2">
          <div class="icon-th-outline lh-sm p-3 icon-red rounded-pill"></div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">7</p>
          <p class="fs-6 m-0 lh-base opacity-50">محصولات</p>
        </div>
      </div>
      <!-- profit statistic (آمار سود) -->
      <div
        class="
          col-12 col-sm-6 col-lg-3
          pb-1
          d-flex
          justify-content-start
          align-items-center
        "
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-dark mx-2">
          <div class="icon-dollar lh-sm p-3 icon-dark rounded-pill"></div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">2,536,770</p>
          <p class="fs-6 m-0 lh-base opacity-50">سود فروش</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Statistic",
};
</script>