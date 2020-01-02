<template>
  <div id="app">
    <div id="header">
      <router-link to="/" style="color: #2c3e50">
        <h1 style="display: inline-block;">Andrzej Dybowski</h1>
      </router-link>
      <ul style="display: inline-block;">
        <li>
          <a href="https://www.linkedin.com/in/andrzej-dybowski/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/andrzejd-pl/" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" /> GitHub
          </a>
        </li>
        <li>
          <a href="https://github.com/andrzejd-pl/portfolio" target="_blank">Portfolio</a>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#header>ul {
  list-style-type: none;
}

#header>ul>li {
  display: inline-block;
  margin: 0 5px;
}
a {
  text-decoration: none;
  color: #42b983;
}
.content {
  text-align: center;
}
</style>
