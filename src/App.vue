<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>
<script>
import HeaderNav from './components/common/HeaderNav'
export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style lang="stylus">

</style>
