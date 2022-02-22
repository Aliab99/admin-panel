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
          <span class="badge bg-red rounded-pill">{{$store.state.onProcess}}</span>
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
          <span class="badge bg-red rounded-pill">{{$store.state.sended}}</span>
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
          <span class="badge bg-red rounded-pill">{{$store.state.delivered}}</span>
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
          <span class="badge bg-red rounded-pill">{{$store.state.canceled}}</span>
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
          <span class="badge bg-red rounded-pill">{{$store.state.returned}}</span>
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