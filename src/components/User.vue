<template>
  <h4 class="text-center p-2">تعداد کل کاربران: 1254</h4>
  <!-- --------------لیست کاربران------------ -->
  <div class="table-responsive">
    <table class="table table-light table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">نام و نام خوانواگی</th>
          <th scope="col">شماره تماس</th>
          <th scope="col">استان</th>
          <th scope="col">شهر</th>
          <th scope="col">آدرس</th>
          <th scope="col">پلاک</th>
          <th scope="col">کد پستی</th>
          <th scope="col">سابقه خرید</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>دارد</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- --------------لیست کاربران------------ -->
  <!-- ---------------شماره صفحه---------------- -->
  <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link">قبلی</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">بعدی</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- ---------------شماره صفحه---------------- -->
</template>

<script>
export default {
  name: "User",
};
</script>

