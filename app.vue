<template>
  <div class="wrapper">
    <Header/>
    <NuxtPage />
  </div>
</template>


<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  },

  data() {
    return {
    
    };
  },
  
}
</script>

<style>
.test{
  color: #000;
}
</style>