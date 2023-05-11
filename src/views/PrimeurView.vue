<template >
    <h1>Primeur de Marseille : {{ total }}€</h1>
    <div>
        <input type="text" placeholder="nom ?" v-model="produit.nom">
        <input type="number" placeholder="prix ?" v-model="produit.prix">
        <input type="number" placeholder="quantité ?" v-model="produit.quantite">
        <button @click="ajouterProduit">Ajouter</button>
    </div>
    <div>
        <ProduitComponent v-for="(elt, ind) in produits" :key="elt.nom" :objet="elt"
            @send-data="calculerTotal($event, ind)" />
    </div>
</template>
<script>
import ProduitComponent from '@/components/Produit.vue';

export default {
    name: 'PrimeurComponent',
    components: {
        ProduitComponent
    },
    data() {
        return {
            produits: [
                { nom: "banane", prix: 3, quantite: 10 },
                { nom: "fraise", prix: 10, quantite: 20 },
                { nom: "poivron", prix: 5, quantite: 10 }
            ],
            produit: {},
            total: 0
        }
    },
    methods: {
        ajouterProduit() {
            this.produits.push(this.produit)
            this.produit = {}
        },
        calculerTotal(qte, ind) {
            this.total += qte * this.produits[ind].prix
            this.produits[ind].quantite -= qte
        }
    }
}
</script>
<style ></style>