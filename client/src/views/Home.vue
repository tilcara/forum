<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to community!</h1>
      <p class="lead">A fully open source forum!</p>
      <hr class="my-4">
      <p>This forum is all about community</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="getLoginURL" role="button">Login with Google</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  computed:{
      getLoginURL() {
        if(window.location.hostname === 'localhost'){
          return 'http://localhost:3000/auth/google';
        }else{
          return 'https://communityforum.herokuapp.com/auth/google';
        }
      }
  }
};
</script>
