<template >
    <h1>Données de la personne ayant l'identifiant {{ $route.params.id }}</h1>
    <ul>
        <li>Nom : {{ personne.nom }}</li>
        <li>Prénom : {{ personne.prenom }}</li>
        <li>Age : {{ personne.age }}</li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            personnes: [
                { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
                { id: 2, nom: 'Dalton', prenom: 'Jack', age: 50 },
                { id: 3, nom: 'Maggio', prenom: 'Sophie', age: 30 },
            ]
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        personne() {
            return this.personnes.find(elt => elt.id == this.id)
        }
    }
}
</script>
<style ></style>