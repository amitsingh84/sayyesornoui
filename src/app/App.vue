<template>
  <!-- <router-view></router-view> -->
  <div>
  <from-demo/>
  <form-new-demo/>
  </div>
</template>

<script>
import FormNewDemo from './formbuilder/formNewDemo.vue'
import FromDemo from './formbuilder/fromDemo.vue'
// import UserLogin from './auth/views/UserLogin.vue'
 

export default {
  name: 'App',
  components: {
    FromDemo,
    FormNewDemo
    // UserLogin
     
  }
}
</script>

 <style scope>
</style>
