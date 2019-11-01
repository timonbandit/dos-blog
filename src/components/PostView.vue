<template>
  <div class="blog-post">
    <div class="col-md-6 col-md-offset-3 col-sm-12">
      <post-record
        :is-post-page="true"
        :post-data="post"
        :comments="comments"
        :user="userName"/>
    </div>
  </div>
</template>

<script>
  import API from '../API';
  import PostRecord from './PostRecord';

  export default {
    name: 'PostView',
    components: {
      PostRecord
    },
    data() {
      return {
        post: [],
        userName: '',
        comments: []
      };
    },
    created() {
      API.getPostById(this.$route.params.id)
        .then(data => {
          this.post = data.post;
          this.userName = data.user.name;
          this.comments = data.comments;
        });
    }
  };
</script>

<style scoped>

</style>
