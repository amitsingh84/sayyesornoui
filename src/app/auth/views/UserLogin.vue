 <template>
<div class="user_loging_form">
<div class="container">
  <div class="row">
    <div class=" col-md-6 col-lg-5 col mx-auto my-auto">
  <form>
  <h2 class="logoTitle">YesOrNo</h2>
    <p class="login_text">Login</p>
  <div class="mb-3">
    <input type="email" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address">
    
  </div>
  <div class="mb-3"> 
    <input type="password" class="form-control rounded-0" id="exampleInputPassword1" placeholder="password">
  </div>
  <div class="mb-3 form-check container-fluid">
    <div class="row">
    <div class="col">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember</label>
    </div>
    <div class="text-end col">
      <a href="#">Forgot Password?</a>
    </div>
    </div>
  </div>
  <div class="d-flex">
  <button type="button" class="btn btn-primary flex-fill me-3" @click="goToHome()">Submit</button>
  <button type="submit" class="btn btn-outline-primary flex-fill bd">Register</button>
  </div>
</form> 
</div>
</div></div></div>
 </template>

<script>
export default {
  methods:{
   goToHome(){
     alert('home')
   this.$router.push('login'); 
      }
  }
}
</script>
 <style scoped>
 .user_loging_form {
    background: #192a6b; 
    height: 100vh; 
}

.user_loging_form > .container > .row{
  height: 100vh; 
}
h2.logoTitle {
    color: #fff;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 17px;
    
}
p.login_text {
    color: #fff;
    margin-bottom: 4px;
    font-size: 17px;
    font-weight: 600;
}
label.form-check-label {
    color: #fff;
}
input#exampleCheck1 {
    border-radius: 0;
}
a {
    color: #fff;
    font-weight: 700;
}
 
 </style>