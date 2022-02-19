<template>
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
          <router-link to="/orders/">درحال پردازش</router-link>
          <span class="badge bg-red rounded-pill">14</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <router-link to="/orders/sended">ارسال شده</router-link>
          <span class="badge bg-red rounded-pill">14</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <router-link to="/orders/delivered">تحویل شده</router-link>
          <span class="badge bg-red rounded-pill">14</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <router-link to="/orders/canceled"> لغو شده</router-link>
          <span class="badge bg-red rounded-pill">2</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <router-link to="/orders/returned">مرجوع شده</router-link>
          <span class="badge bg-red rounded-pill">1</span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Order",
};
</script>
<style scoped>
a {
  text-decoration: none !important;
  color: #393f57;
}
a:hover{
  color: #01DEF8;
}
</style>