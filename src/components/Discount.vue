<template>
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
        این تنظیمات کلی هستند و این کد تخفیف به تمام محصولات اعمال می شود جهت
        دسترسی به تنظیمات بیشتر <a href="">کلیک</a> کنید
      </p>
      <input type="submit" class="btn btn-purple px-4" value="ثبت کد" />
    </form>
  </div>
</template>

<script>
export default {
    name : 'Discount'
}
</script>