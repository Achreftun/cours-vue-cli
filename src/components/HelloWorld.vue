<template>
  <div class="hello">
    Hello world, {{ texte }} from {{ ville }}
  </div>
  <div>
    Hello <slot name="nom">Doe</slot>
    <slot name="prenom">John</slot>
  </div>
  <div>
    <input type="text" placeholder="Votre prénom" ref="nom" v-model="firstname">
    <button @click="envoyer">Envoyer au parent</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texte: "Bonjour",
      couleur: "blue",
      firstname: ''
    }
  },
  props: {
    ville: {
      default: 'Paris',
      type: String
    }
  },
  methods: {
    envoyer() {
      this.$emit('sendData',this.firstname)
    }
  },
  emits: ['sendData'],
  mounted() {
    console.log('mounted');
    this.$refs.nom.focus()

  },
  created() {
     console.log('created');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: v-bind('couleur')
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
