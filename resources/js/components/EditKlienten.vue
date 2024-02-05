<template>
    <v-dialog v-model="dialogVisible">
        <v-form ref="form" @submit.prevent class="flex py-5 px-5">
            <v-card class="mx-auto p-4" style="width: 65vw">
                <h3 class="p-2">User Bearbeiten:</h3>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user_local.firstname" label="First name" variant="outlined"></v-text-field>
                        <v-text-field v-model="user_local.lastname" label="Last name" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user_local.email" label="Email" variant="outlined"></v-text-field>
                        <v-text-field v-model="user_local.role" label="Role" variant="outlined"></v-text-field>
                    </v-col>
                    <v-row>
                        <v-text-field v-for="field in user_local.details" v-model="field.data" :label="field.title" variant="outlined"></v-text-field>
                    </v-row>
                    <v-row class="mt-3">
                        <v-col cols="6">
                            <v-btn @click="closeDialog()" class="font-weight-bold" color="bg_white">Schließen</v-btn>
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <v-btn @click="submitForm()" color="bg_white" class="font-weight-bold">Speichern</v-btn>
                        </v-col>
                    </v-row>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>
<script>
export default {
    name: "EditKlienten",
    props: ["user"],
    data() {
        return {
            user_local: {},
            dialogVisible: true,
        };
    },
    created() {
        this.user_local = Object.assign({}, this.user);
    },
    methods: {
        submitForm() {
            this.axios
                .post("/user", this.user_local)
                .then((response) => {
                    console.log(response.data);
                    console.log("reload2");
                    this.$emit("saved");
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        closeDialog() {
            console.log("Ausgewählter Benutzer beim Schließen des Dialogs:", this.user);
            this.dialogVisible = false;
            this.$emit("dialog-closed");
        },
    },
};
</script>
<style></style>
