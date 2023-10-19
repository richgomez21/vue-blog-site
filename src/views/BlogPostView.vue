<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <h3>{{ post.published }}</h3>
        <h3>{{ post.metadata.author }}</h3>
        <div v-html="post.content"></div>
    </div>
</template>

<script>

import { getPostById } from '@/blog-data-access';

export default {
    props:["postId"],
    data(){
        return{
            post: null
        }
    },
    mounted(){
        getPostById(this.postId)
            .then(resp => this.post = resp)
            .catch(err => console.log(err))
    }
}
</script>