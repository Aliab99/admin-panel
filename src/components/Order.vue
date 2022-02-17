<template>
  <div class="row d-flex">
    <!-- ---------منوی سفارشات------ -->
    <div class="col-md-3 mb-3">
      <ul class="list-group">
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <a href="#">درحال پردازش</a>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <a href="#">ارسال شده</a>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <a href="#">تحویل شده</a>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <a href="#"> لغو شده</a>
          <span class="badge bg-primary rounded-pill">2</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <a href="#">مرجوع شده</a>
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
    </div>
    <div class="col-md-8">
      <div class="container">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
};
</script>
<style>
a {
  text-decoration: none;
}
</style>