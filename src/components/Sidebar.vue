<template>
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
</template>

<script>
export default {
    name:'Sidebar',
}
</script>