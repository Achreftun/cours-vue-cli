<template>
    <h1>Page d'erreur</h1>
    <p>Erreur 404 : route {{ $route.params.pathMatch }} non trouvée</p>
</template>
<script>
export default {

}
</script>
<style scoped>
h1,
p {
    color: red;
}
</style>