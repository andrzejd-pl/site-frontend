<template>
    <div class="content">
        <div class="post"  v-for="post in posts" v-bind:key="post.Uuid">
            <h3 v-html="post.Title"></h3>
        <p v-html="post.Content"></p>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import axios from 'axios'
export default {
    name: 'Blog',
    data: function() {        
        return {
            posts: null,
        };
    },
    mounted() {
        axios.get("https://andrzejd.pl/api/posts")
            .then(response => (this.posts = response.data))
    }
}
</script>
