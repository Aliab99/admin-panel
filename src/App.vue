<template>
  <div class="d-flex">
    <!-- !-----------------------------------------------sidebar-------------------------------------------------- -->
    <aside class="col-1 bg-white shadow-sm rounded d-none d-sm-block">
      <p class="text-center my-3">Nikted Logo</p>
      <ul class="m-0 p-0 d-flex flex-column align-items-center list-unstyled">
        <!-- TODO:selected item must be showed by a gray rectangle -->
        <li class="my-4">
          <span class="icon-home-outline"></span>
        </li>
        <li class="mt-2 mb-4"><span class="icon-dot-3"></span></li>
        <li class="my-1"><span class="icon-percent"></span></li>
        <li class="my-1">
          <span class="icon-chart-pie-outline"></span>
        </li>
        <li class="my-1"><span class="icon-user-o"></span></li>
        <li class="my-1"><span class="icon-basket"></span></li>
        <li class="my-1"><span class="icon-th-outline"></span></li>
        <li class="my-1"><span class="icon-eye"></span></li>
        <li class="my-1"><span class="icon-mail"></span></li>
      </ul>
    </aside>
    <!-- !-----------------------------------------------end sidebar-------------------------------------------------- -->
    <main class="px-3 py-4 col-11">
      <!-- !-----------------------------------------------navbar-------------------------------------------------- -->
      <nav class="navbar bg-white shadow-sm rounded mb-4 overflow-hidden">
        <div
          class="
            w-100
            d-md-flex
            justify-content-start
            align-items-center
            flex-row-reverse
          "
        >
          <!-- profile photo container -->
          <div class="d-flex flex-row-reverse pb-2 pb-md-0">
            <a class="navbar-brand" href="#">
              <img
                src="./assets/images/Ellipse.png"
                alt="profile Photo"
                width="35"
                height="35"
              />
            </a>
            <div class="text-end mx-2">
              <p class="fs-5 lh-sm m-0">profile Name</p>
              <p class="fs-6 lh-1 m-0">Admin</p>
            </div>
          </div>
          <!-- notification icon (bell) -->
          <span class="icon-bell position-relative mx-4">
            <span
              class="
                position-absolute
                top-0
                start-0
                translate-middle
                badge
                rounded-pill
                bg-danger bg-red
                p-1
                fs-6
                fw-normal
              "
            >
              99+
            </span>
          </span>
          <!-- orders icon (basket) -->
          <span class="icon-basket position-relative mx-4">
            <span
              class="
                position-absolute
                top-0
                start-0
                translate-middle
                badge
                rounded-pill
                bg-danger bg-red
                p-1
                fs-6
                fw-normal
              "
            >
              99+
            </span>
          </span>
          <div class="d-inline-flex flex-row-reverse">
            <span class="icon-search mx-4"></span>
            <!-- TODO:search input must be visually hidden -->
            <input type="text" class="rounded-pill bg-lightGray" />
          </div>
        </div>
      </nav>
      <!-- !-----------------------------------------------end navbar-------------------------------------------------- -->
      <!-- !-----------------------------------------------Content-------------------------------------------------- -->
      <article class="row gx-3 gy-4">
        <section class="col-12 col-md-8">
          <!-- Statistics section(بخش آمار) -->
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
                    class="
                      icon-chart-pie-outline
                      lh-sm
                      p-3
                      icon-green
                      rounded-pill
                    "
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
                  <div
                    class="icon-user-o lh-sm p-3 icon-blue rounded-pill"
                  ></div>
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
                  <div
                    class="icon-th-outline lh-sm p-3 icon-red rounded-pill"
                  ></div>
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
                  <div
                    class="icon-dollar lh-sm p-3 icon-dark rounded-pill"
                  ></div>
                </div>
                <!-- text -->
                <div>
                  <p class="fs-5 m-0 lh-base">2,536,770</p>
                  <p class="fs-6 m-0 lh-base opacity-50">سود فروش</p>
                </div>
              </div>
            </section>
          </div>
          <!-- end Statistics section(پایان بخش آمار) -->
          <div class="p-3 mb-4 bg-white rounded shadow-sm">گزارش درآمد</div>
        </section>
        <!-- Discount generator section -->
        <section class="col-12 col-md-4">
          <div class="p-3 mb-4 bg-white rounded shadow-sm">
            <!-- header section -->
            <section class="d-flex justify-content-between">
              <div class="d-flex align-items-start">
                <span class="bg-gray">
                  <div class="form-check form-check-inline m-0 p-0">
                    <input
                      class="form-check-input bg-gray mx-0 my-auto p-0"
                      checked
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                  </div>
                  <div class="form-check form-check-inline m-0 p-0">
                    <input
                      class="form-check-input bg-gray mx-0 my-auto p-0"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                  </div>
                </span>
                <span class="">نوع تخفیف</span>
              </div>
              <span class="icon-percent"></span>
            </section>
            <hr />
            <form action="" class="d-flex flex-column align-items-center">
              <div class="pb-3">
                <label for="Discount">کد تخفیف :</label>
                <input
                  class="rounded-pill text-center"
                  type="text"
                  name="Discount"
                  id=""
                />
              </div>
              <div class="pb-3">
                <label for="Discount">نام تخفیف :</label>
                <input
                  class="rounded-pill text-center"
                  type="text"
                  name="Discount"
                  id=""
                />
              </div>
              <div class="pb-3 text-center">
                <label for="Discount">درصد تخفیف : </label>
                <input
                  class="rounded-pill text-center w-25"
                  type="number"
                  name="Discount"
                  id=""
                />
              </div>
              <p class="text-center fs-6">
                این تنظیمات کلی هستند و این کد تخفیف به تمام محصولات اعمال می
                شود جهت دسترسی به تنظیمات بیشتر <a href="">کلیک</a> کنید
              </p>
              <input type="submit" class="btn btn-purple px-4" value="ثبت کد" />
            </form>
          </div>

          <div class="p-3 mb-4 bg-white rounded shadow-sm">آمار بازدید</div>
        </section>
      </article>
      <!-- !-----------------------------------------------Content-------------------------------------------------- -->
    </main>
  </div>
</template>

<style>

</style>
