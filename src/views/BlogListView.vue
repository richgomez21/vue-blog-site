<template>
  <div>
    <h1>This is the blog list page</h1>
    <ul>
        <li v-for="p in posts" :key="p.id">
            <router-link :to="{name:'blog-post', params:{postId:p.id}}">
                {{ p.title }}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import {getAllPosts} from '@/blog-data-access'

export default {
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