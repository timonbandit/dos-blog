<template>
  <div class="entry thumbnail">
    <h2 class="entry__header">
      {{ postData.title | capitalize }}
    </h2>

    <span
      v-if="!isPostPage"
      class="label label-success entry__user">
      {{ userName }}
    </span>

    <span
      v-else
      class="label label-success entry__user">
      {{ user }}
    </span>

    <img
      class="img-responsive"
      src="http://placehold.it/550x300"
      :alt="postData.title">

    <p
      v-if="!isPostPage"
      class="entry__intro">
      {{ postData.body | cropIntro(40) | capitalize }}
    </p>

    <p
      v-else>
      {{ postData.body | capitalize }}
    </p>

    <a
      v-if="!isPostPage"
      class="btn btn-link"
      :href="'post/' + postData.id">
      Continue reading...
    </a>

    <div
      v-if="isPostPage"
      class="comments">
      <h3>Comments</h3>
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="comment alert alert-block">
        <span class="badge">{{ comment.id }}</span>
        <span class="label label-success">{{ comment.email }}</span>
        <img
          src="https://placehold.it/75/75"
          alt=""
          class="thumbnail">
        <span class="comment__test">{{ comment.body }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '../API';

  export default {
    name: 'PostRecord',
    filters: {
      cropIntro: function(text, length) {
        if (!text) return '';

        return text.toString()
          .slice(0, length)
          .trim() + '...';
      },
      capitalize: function(text) {
        if (!text) return '';
        return text.charAt(0)
          .toUpperCase() + text.slice(1);
      }
    },
    props: {
      postData: {
        type: [Object, Array],
        default: () => {
        }
      },
      isPostPage: {
        type: Boolean,
        default: false,
      },
      comments: {
        type: Array,
        default: () => {
        }
      },
      user: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        userName: ''
      };
    },
    beforeMount: function() {
      if (!this.isPostPage) {
        API.getUserById(this.postData.userId)
          .then(data => this.userName = data.name);
      }
    },
  };
</script>

<style scoped>

</style>
