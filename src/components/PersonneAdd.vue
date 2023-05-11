<template >
    <h2>Ajouter une nouvelle personne</h2>
    <Form @submit="ajouterPersonne">
        <div>
            Nom : <Field type="text" name="nom"/>
        </div>
        <div>
            Prénom : <Field type="text" name="prenom"/>
        </div>
        <div>
            Age : <Field type="number" name="age"/>
        </div>
        <div>
            <button>Ajouter</button>
        </div>
    </Form>
</template>
<script>
import { Field, Form } from 'vee-validate'
export default {
    components: {
        Field,
        Form
    },

    data() {
        return {
        }
    },
    methods: {
        ajouterPersonne(values) {
            console.log(values);
        }
    }
}
</script>
<style ></style>