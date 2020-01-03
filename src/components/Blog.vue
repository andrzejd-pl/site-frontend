<template>
    <div class="content">
        <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>

        <div class="post" v-for="post in posts" v-bind:key="post.Uuid">
            <h3 v-html="post.Title"></h3>
            <vue-markdown>{{ post.Content }}</vue-markdown>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueMarkdown from 'vue-markdown';

export default {
    name: 'Blog',
    data: function() {        
        return {
            posts: null,
            isLoading: true,
            fullPage: true,
        };
    },
    components: {
        Loading,
        VueMarkdown,
    },
    mounted() {
        axios.get("https://andrzejd.pl/api/posts")
            .then(response => (this.posts = response.data));
        this.isLoading = false;
    }
};
</script>
