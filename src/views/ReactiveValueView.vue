<template >
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }}
    </div>
</template>
<script>
//import { computed } from 'vue'


export default {
    data() {
        return {
            valeur1: 5,
            valeur2: 2,
          //   resultat: 0
        }
    }, 
    computed: {
        resultat () {
            return this.valeur1 + this.valeur2
        }
    },
    // created() {
    //     // watchEffect(() => {
    //     //     this.resultat = 
    //     // })
    //     this.resultat = computed(() => this.valeur1 + this.valeur2)

    // },
    mounted() {
        setInterval(
            () => this.valeur1 += 10,
            2000
        )
    }
}
</script>
<style ></style>