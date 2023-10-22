<template>
    <li class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <span class="author">{{ post.metadata.author }}</span>
        <br>
        <span class="published">{{ post.published }}</span>
        <br>
        <router-link :to="{name:'blog-post', params:{postId:post.id}}">Read More</router-link>
    </li>
</template>

<script>
export default {
    props:["post"]
}
</script>

<style>
.post-item{
    background-color: lightgray;
    padding: 20px;
    margin: 12px;
}

.post-item .author{
    color: midnightblue;
}

.post-item .published{
    color: midnightblue
}
</style>