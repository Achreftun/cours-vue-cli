<template >
    <h1>Adresse</h1>
    <ul>
        <li>Rue : {{ adresse.rue  }}</li>
        <li>Ville : {{ adresse.ville ?? "Marseille" }}</li>
        <li>Code postal : {{ adresse.codePostal }}</li>
    </ul>
</template>
<script>
export default {
    computed: {
        adresse() {
            return this.$route.query
        }
    }
}
</script>
<style >
    
</style>