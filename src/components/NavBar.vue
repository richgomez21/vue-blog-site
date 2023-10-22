<template>
    <div>
        <router-link :to="{name:'home'}">Home</router-link>|
        <router-link :to="{ name: 'blog-list' }">Blog</router-link>
    </div>
</template>