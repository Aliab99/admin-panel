<template>
  <nav class="d-flex align-items-center justify-content-between  bg-white shadow-sm rounded mb-4 py-1 overflow-hidden">
    <div class="px-4 d-flex align-items-center">
      <div @click="toggleSideBar"  class="toggle-btn">
        <div :style="toggleState"></div>
      </div>
      <p class="m-0 px-4">sidebar Toggle</p>
    </div>
    <div
      class="
        
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
            src="../assets/images/Ellipse.png"
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
      <div class="d-inline-flex flex-row-reverse">
        <span @click="searchBoxToggle" class="icon-search mx-4"></span>
        <!-- TODO:search input must be visually hidden -->
        <transition name="fade">
          <input
            v-if="searchBoxShow"
            type="text"
            class="rounded-pill bg-lightGray"
          />
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      searchBoxShow: false,
      SidebarShow:true,
      toggleState:{right:'3px'},
    };
  },
  methods: {
    searchBoxToggle() {
      this.searchBoxShow = this.searchBoxShow ? false : true;
    },
    toggleSideBar(){
      if(this.SidebarShow){
        this.SidebarShow = false;
        // this.toggleState = {left:'3px'}
      }
      else{
        this.SidebarShow = true;
        // this.toggleState = {right:'3px'}
      }
      this.$emit('toggleSideBar',this.toggleState);
    }
  },
  watch:{
    SidebarShow(){
      if(this.SidebarShow){
        let right = 23;
        let toggleTime = setInterval(()=>{
          this.toggleState = {right:`${right}px`}
          right --;
          if(right == 3){
            clearInterval(toggleTime);
          }
        },14);
      }else{
        let left = 23;
        let toggleTime = setInterval(()=>{
          this.toggleState = {left:`${left}px`}
          left --;
          if(left == 3){
            clearInterval(toggleTime);
          }
        },14);
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.2s ease-in-out;
}
.fade-leave-active {
  transition: all 0.2s ease-in-out;
  opacity: 0;
}
</style>