<template>
  <div id="app">
    <div id="component">
      <router-view/>
    </div>
  </div>
</template>

<script>

var userLog = {}

export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
  height: 100%;
  
  
}

#component{
  padding: 0.8em;
}
@media (min-width: 380px) {
   #component { 
     width: 380px;
     margin-left: auto;
     margin-right: auto;
     

   }
}

a:visited {
  color: #343434;
}
a {
  color: #343434;
}

p {
  line-height: 1.7rem;
}

.right-button {
  margin-top: 1rem;
  text-align: right;
}
.mid-button {
  margin-top: 1rem;
  text-align: center;
}

</style>
