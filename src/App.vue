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
  name: 'App',
  
  metaInfo: {
    
    title: 'スイッチの操作性に関する調査',
    meta: [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@EbanatT'
      },
      {
        property: 'og:url',
        content: 'https://ebanat-t.github.io/SSHExperiment1_1/#/'
      },
      {
        property: 'og:title',
        content: 'スイッチの操作性に関する調査'
      },
      {
        property: 'og:image',
        content: '@/assets/ConfigImgs/thumbnail.png'
      }
    ]
  },

  mounted() {

    this.setTitle()
    this.setMeta()

  },

  methods: {

    setTitle() {
      var setTitle = 'スイッチの操作性に関する調査'
      document.title = setTitle
    },

    setMeta() {
      document.querySelector('meta[name="twitter:card"]').setAttribute('content', 'summary_large_image')
      document.querySelector('meta[name="twitter:site"]').setAttribute('content', '@EbanatT')
      document.querySelector('meta[property="og:url"]').setAttribute('content', 'https://ebanat-t.github.io/SSHExperiment1_1/#/')
      document.querySelector('meta[property="og:title"]').setAttribute('content', 'スイッチの操作性に関する調査')
      document.querySelector('meta[property="og:image"]').setAttribute('content', '@/assets/ConfigImgs/thumbnail.png')
    }

  }
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

textarea {
  width: calc(100% - 6px);
  height: 5rem;
  border: 2px solid #afafaf;
  border-radius: 5px;
  color: #2d2d2d;
  padding: 5px;
  line-height: 1.0rem;
}

textarea:focus {
  outline-style: none;
  border: 2px solid #6e6e6e;
}


input {
  border: 2px solid #afafaf;
  border-radius: 5px;
  color: #2d2d2d;
  padding: 5px;
  line-height: 1.0rem;
}

input:focus {
  outline-style: none;
  border: 2px solid #6e6e6e;
}


</style>
