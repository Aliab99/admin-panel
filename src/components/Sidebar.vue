<template>
  <aside class="bg-white shadow-sm rounded d-none d-sm-block">
    <p class="text-center my-3">Nikted Logo</p>
    <ul class="m-0 p-0 d-flex flex-column align-items-center list-unstyled">
      <li class="my-4">
        <!-- home link -->
        <router-link class="link" to="/">
          <span class="icon-home-outline"></span>
        </router-link>
      </li>
      <li class="mt-2 mb-4"><span class="icon-dot-3"></span></li>
      <li class="my-2">
        <!-- discount link -->
        <router-link class="link" to="/DiscountCode">
          <span class="icon-percent"></span>
        </router-link>
      </li>
      <!-- Amarha link -->
      <li class="my-2">
        <router-link class="link" to="/amarha">
          <span class="icon-chart-pie-outline"></span>
        </router-link>
      </li>
      <!-- Users link -->
      <li class="my-2">
        <router-link class="link" to="/users"
          ><span class="icon-user-o"></span
        ></router-link>
      </li>

      <li class="my-2">
        <router-link class="link" to="/orders"
          ><span class="icon-basket"></span
        ></router-link>
      </li>
      <li class="my-2">
        <!-- Products link -->
        <router-link class="link" to="/products"
          ><span class="icon-th-outline"></span
        ></router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
aside {
  width: 6%;
  position: sticky;
  top: 0;
  height: 100vh;
}
.router-link-exact-active {
  padding: 10px;
  border-radius: 5px;
  background-color: #e0e0e0;
  color: #292f45;
}
li:hover .link span {
  color: #01def8;
}
.link span {
  color: #292f45;
}
</style>
