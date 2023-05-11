<template>
  <img alt="Vue logo" src="@/assets/logo.png">
  <div>Coucou {{ firstname }}</div>
  <HelloWorld @send-data="afficherNom" />
  <HelloWorld ville="Marseille">
    <template v-slot:nom>Wick </template>
    <template v-slot:prenom>John </template>
  </HelloWorld>
  <div>
    <router-link :to="{
      name: 'adresse', query: {
        ville: 'Marseille',
        codePostal: '13006',
        rue: 'paradis'
      }
    }">Visitez Marseille</router-link>
  </div>
  <button @click="goToMarseille">
    Visitez Marseille
  </button>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  components: {
    HelloWorld,

  },
  data() {
    return {
      firstname: ''
    }
  },
  methods: {
    afficherNom(nom) {
      this.firstname = nom
    },
    goToMarseille() {
      //this.$router.push('/adresse?rue=paradis&ville=Marseille&codePostal=13006')
      this.$router.push({
        name: 'adresse', query: {
          ville: 'Marseille',
          codePostal: '13006',
          rue: 'paradis'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
