<template>
    <h1>This is a blog post page</h1>
    <h3>TODO: display blog post that has the id of: {{ postId }}</h3>
</template>

<script>
export default {
    props:["postId"]
}
</script>