<template>
  <div>
    <m-tabbar v-model="select">
      <m-tabbar-item id='tab1'>
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id='tab2'>
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='tab3'>
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        广播
      </m-tabbar-item>
      <m-tabbar-item id='tab4'>
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
        小组
      </m-tabbar-item>
      <m-tabbar-item id='tab5'>
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
  import mTabbar from '../components/tabbar'
  import mTabbarItem from '../components/tabbar-item'
  export default {
    name: 'index',
    components: {
      mTabbar,
      mTabbarItem
    },
    data() {
      return {
        select:"tab1"
      }
    }
  }
</script>
