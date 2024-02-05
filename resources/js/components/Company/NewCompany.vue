<template>
    <v-dialog v-model="dialogVisibleNew">
        <v-form ref="form" @submit.prevent class="flex py-5 px-5">
            <v-card class="mx-auto p-4" style="width: 65vw">
                <h3 class="p-2">Neue Firma anlegen:</h3>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="newCompany.name" label="Firmenname" variant="outlined"></v-text-field>
                        <v-text-field v-model="newCompany.address" label="Adresse" variant="outlined"></v-text-field>
                        <v-text-field v-model="newCompany.contact_email" label="E-Mail" variant="outlined"></v-text-field>
                        <v-text-field v-model="newCompany.phone_number" label="Telefon" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="newCompany.industry" label="Branche" variant="outlined"></v-text-field>
                        <v-text-field v-model="newCompany.company_type" label="Rechtsform" variant="outlined"></v-text-field>
                        <v-text-field v-model="newCompany.notes" label="Notizen" variant="outlined"></v-text-field>
                    </v-col>
                    <v-row class="mt-3">
                        <v-col cols="6">
                            <v-btn @click="closeDialog()" class="font-weight-bold" color="bg_white">Schließen</v-btn>
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <v-btn @click="submitForm()" color="bg_white" class="font-weight-bold">Hinzufügen</v-btn>
                        </v-col>
                    </v-row>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
export default {
    name: "NewCompany",
    props: ["user"],
    data() {
        return {
            newCompany: {
                name: "",
                address: "",
                contact_email: "",
                phone_number: "",
                industry: "",
                company_type: "",
                notes: "",
            },
            dialogVisibleNew: false,
        };
    },
    methods: {
        submitForm() {
            this.axios
                .post("/firmen", this.newCompany)
                .then((response) => {
                    console.log(response);
                    console.log("Neue Firma hinzugefügt");
                    this.$emit("saved");
                    this.closeDialog();
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        closeDialog() {
            this.dialogVisibleNew = false;
            this.$emit("dialog-closed");
        },
    },
};
</script>

<style></style>
