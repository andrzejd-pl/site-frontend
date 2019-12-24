<template>
    <div class="content">
        <div>
            <h1>Andrzej Dybowski</h1>
        </div>
        <div id="links">
            <ul>
                <li><a href="https://www.linkedin.com/in/andrzej-dybowski/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/andrzejd-pl/" target="_blank">GitHub</a></li>
                <li><a href="https://github.com/andrzejd-pl/portfolio" target="_blank">Portfolio</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        components: {},
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    li {
        display: inline-block;
        margin: 0 5px;
    }
    a {
        color: #42b983;
    }
</style>
