<template>
  <div class="blog-records">
    <div
      v-for="post in posts"
      :key="post.id"
      class="col-md-6 col-md-offset-3 col-sm-12">
      <post-record :post-data="post"/>
    </div>
  </div>
</template>

<script>
  import API from '../API';
  import PostRecord from './PostRecord';

  export default {
    name: 'Posts',
    components: {
      PostRecord
    },
    data() {
      return {
        posts: []
      };
    },
    created() {
      API.getPosts()
        .then(data => {
          this.posts = data;
        });
    }
  };
</script>

<style scoped>

</style>
