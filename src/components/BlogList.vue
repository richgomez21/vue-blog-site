<template>
    <div>
      <h1>This is the blog list page</h1>
      <blog-list :blogPosts="posts" />
    </div>
  </template>
  
  <script>
  import {getAllPosts} from '@/blog-data-access'
  import BlogList from '@/components/BlogList.vue'
  
  export default {
    components: { BlogList },
      data(){
          return {
              posts:[]
          }
      },
      mounted(){
          getAllPosts()
              .then(resp => {
                  this.posts = resp;
              })
              .catch(err => {
                  console.log(err)
              })
      }
  }
  </script>