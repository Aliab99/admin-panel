<template>
  <div class="d-flex row">
    <Order />
    <router-view></router-view>
  </div>
</template>

<script>
import Order from "@/components/Order.vue";

export default {
  name: "Orders",
  components: {
    Order,
  },
};
</script>