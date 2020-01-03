<template>
    <div class="content">
        <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>

        <div class="post" v-for="post in posts" v-bind:key="post.Uuid">
            <h3 v-html="post.Title"></h3>
            <p v-html="post.Content"></p>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'

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
    },
    mounted() {
        axios.get("https://andrzejd.pl/api/posts")
            .then(response => (this.posts = response.data));
        this.isLoading = false;
    }
};
</script>
