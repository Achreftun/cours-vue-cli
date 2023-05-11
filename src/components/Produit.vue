<template >
    <div>
        {{ objet.nom }} : {{ objet.quantite }} unités : {{ objet.prix }}€
        <input type="number" v-model="quantiteReservee" placeholder="quantité">
        <button :disabled="etat" @click="ajouter">Ajouter dans le panier</button>
    </div>
</template>
<script>
export default {
    name: 'ProduitComponent',
    props: {
        objet: {}
    },
    data() {
        return {
            quantiteReservee: null,
            etat: false
        }
    },
    methods: {
        ajouter() {
            this.$emit('sendData', this.quantiteReservee)
            this.etat = true
        }
    },
    emits: ['sendData']
}
</script>
<style ></style>