import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "./views/HomeView.vue";
import BlogListView from "./views/BlogListView.vue";
import BlogPostView from "./views/BlogPostView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = [
    { path: "/", component: HomeView, name: "home" },
    { path: "/blog", component: BlogListView, name: "blog-list" },
    {
        path: "/blog/:postId",
        component: BlogPostView,
        name: "blog-post",
        props: true
    },
    { path: '/:catchAll(.*)', component: NotFoundView }
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router