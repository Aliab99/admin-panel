<template>
  <div class="p-3 mb-4 bg-white rounded shadow-sm overflow-auto">
    <section class="d-flex justify-content-between">
      <!-- Statistics title -->
      <p>هزینه ها <span class="icon-chart-line"></span></p>
      <!-- reload button -->
      <span class="icon-cw cursor"></span>
    </section>
    <!-- icons section -->
    <section class="row px-2 py-3">
      <!-- sale statistic( هزینه ی کل پرداخت شده) -->
      <div
        class="col-12 col-sm-6 col-lg-4 pb-1 d-flex justify-content-start align-items-center"
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-green mx-2">
          <div class="lh-sm p-3 icon-green rounded-pill">
            <i class="bi bi-cash"></i>
          </div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">324</p>
          <p class="fs-6 m-0 lh-base opacity-50">هزینه ی کل پرداخت شده</p>
        </div>
      </div>
      <!-- users statistic (تخفیف استفاده شده) -->
      <div
        class="col-12 col-sm-6 col-lg-4 pb-1 d-flex justify-content-start align-items-center"
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-blue mx-2">
          <div class="lh-sm p-3 icon-blue rounded-pill">
            <i class="bi bi-currency-exchange"></i>
          </div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">2736</p>
          <p class="fs-6 m-0 lh-base opacity-50">تخفیف استفاده شده</p>
        </div>
      </div>
      <!-- product statistic (هزینه ی ارسال) -->
      <div
        class="col-12 col-sm-6 col-lg-4 pb-1 d-flex justify-content-start align-items-center"
      >
        <!-- icon -->
        <div class="p-2 rounded-pill icon-red mx-2">
          <div class="lh-sm p-3 icon-red rounded-pill">
            <i class="bi bi-truck"></i>
          </div>
        </div>
        <!-- text -->
        <div>
          <p class="fs-5 m-0 lh-base">7</p>
          <p class="fs-6 m-0 lh-base opacity-50">هزینه ی ارسال</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Amar",
};
</script>
