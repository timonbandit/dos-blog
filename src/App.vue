<template>
  <div id="app">
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <a
          class="brand"
          href="/">Best Blogs Software 1990 (BBS 1990)</a>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  body {
    padding-top: 25px;
  }
  .navbar-fixed-top{
    background: #01012c;
  }
</style>
