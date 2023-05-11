<template >
    <h1>Calcul</h1>
    <p v-if="op != null">{{ a }} {{ op }} {{ b }} = {{ resultat }}</p>
    <p v-else>Opérateur inconnu</p>
</template>
<script>
export default {
    computed: {
        a() {
            return this.$route.query.a
        },
        b() {
            return this.$route.query.b
        },
        op() {
            if (this.$route.params.op == 'plus') {
                return '+'
            } else if (this.$route.params.op == 'moins') {
                return '-'
            } else if (this.$route.params.op == 'fois') {
                return '*'
            } else if (this.$route.params.op == 'div') {
                return '/'
            }
            return null
        },
        resultat() {
            if (this.op)
                return eval(this.a + this.op + this.b)
            return null
        }
    }
}
</script>
<style ></style>