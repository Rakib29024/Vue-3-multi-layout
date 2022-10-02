<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
header nav {
  margin-top: 25px;
  padding: 10px;
}
header nav ul {
  list-style: none;
  padding: 0;
}
header nav ul li {
  display: inline;
}
header nav ul li a:link,
header nav ul li a:visited,
header nav ul li a:active,
header nav ul li a:hover {
  color: #777;
  font-size: 14px;
  text-decoration: none;
  text-shadow: 3px 3px 3px #454545;
  margin-right: 15px;
  padding: 15px 25px;
  box-shadow: -5px 0px 10px 0px rgb(200 213 201 / 75%);
  /* border-right: 1px solid #333; */
  /* border-bottom: 1px solid #333; */
}
header nav ul li a:hover {
  color: #fff;
  text-shadow: 3px 3px 3px #666666;
  background: rgb(255, 196, 1);
}
</style>
