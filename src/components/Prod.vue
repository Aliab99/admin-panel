<template>
  <div class="card rounded shadow-sm" style="width: 18rem">
    <!-- ------------عکس محصول------------ -->
    <img
      src="https://www.mamania.me/wp-content/uploads/2021/05/Imen-ba-ma-09-scaled-e1622458040169.jpg"
      class="card-img-top"
      alt="تب_سنج_آریو"
    />
    <!-- ------------عکس محصول------------ -->
    <!-- ---------------عنوان و توضیحات محصول--------- -->
    <div class="card-body text-center gx-5">
      <h5 class="card-title">تب سنج آریو</h5>
      <p class="card-text">تب سنج غیر تماسی دیجیتال آریو</p>
      <p>
        <!-- ---------------عنوان و توضیحات محصول--------- -->
        <!-- -----------دکمه ی ویرایش--------- -->
        <a
          class="btn Edit-btn"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
        >
          ویرایش محصول
        </a>
        <!-- -----------دکمه ی ویرایش--------- -->
        <!-- ------------منوی باز شونده ادیت----------- -->
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >عنوان محصول</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >توضیحات محصول</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" class="align-self-center col-4 btn Save-btn">
            ذخیره
          </button>
          <!-- ------------منوی باز شونده ادیت----------- -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Prod",
};
</script>
<style>
.Edit-btn {
  background-color: #7466f1;
  color: aliceblue;
}
.Save-btn {
  background-color: #2ac871;
  color: aliceblue;
}
</style>