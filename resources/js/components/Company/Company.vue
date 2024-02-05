<template>
    <EditCompany v-if="selectedUser" :user="selectedUser" @dialog-closed="closeEditDialog" />
    <NewCompany :dialogVisibleNew="newCompanyDialogVisible" @dialog-closed="closeNewCompanyDialog" />

    <div>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Firmenname</th>
                    <th class="text-left">Adresse</th>
                    <th class="text-left">E-Mail</th>
                    <th class="text-left">Telefon</th>
                    <th class="text-left">Branche</th>
                    <th class="text-left">Rechtsform</th>
                    <th class="text-left">Notizen</th>
                    <th class="text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.contact_email }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.industry }}</td>
                    <td>{{ user.company_type }}</td>
                    <td>{{ user.notes }}</td>
                    <td class="p-2 d-flex align-center">
                        <v-icon @click="addNewCompany(user)" class="mr-4">
                            <font-awesome-icon icon="fa-light fa-circle-plus" class="fa-lg" />
                        </v-icon>
                        <v-icon @click="openEditDialog(user)" class="mr-4">
                            <font-awesome-icon icon="fa-light fa-pen-circle" class="fa-lg" />
                        </v-icon>
                        <v-icon @click="deleteCompany(user)">
                            <font-awesome-icon icon="fa-light fa-circle-trash" class="fa-lg" />
                        </v-icon>
                        <!-- <v-btn @click="addNewCompany()" rounded="lg" variant="outlined" size="small" class="font-weight-bold" color="bg_white"
                            >Hinzufügen</v-btn
                        > -->
                        <!-- <v-btn
                            @click="openEditDialog(user)"
                            rounded="lg"
                            variant="outlined"
                            size="small"
                            class="font-weight-bold mt-2"
                            color="bg_white"
                            >Bearbeiten</v-btn
                        > -->
                        <!-- <v-btn
                        @click="deleteCompany(user)"
                        rounded="lg"
                        variant="outlined"
                        size="small"
                        class="font-weight-bold mt-2"
                        color="bg_white"
                        >Löschen</v-btn
                        > -->
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>
<script>
import EditCompany from "./EditCompany.vue";
import NewCompany from "./NewCompany.vue";
export default {
    name: "company",
    components: {
        EditCompany,
        NewCompany,
    },
    data() {
        return {
            users: [],
            selectedUser: null,
            newCompanyDialogVisible: false,
        };
    },

    mounted() {
        this.getCompanys();
    },

    methods: {
        getCompanys() {
            this.axios
                .get("/firmen")
                .then((response) => {
                    this.users = response.data;
                    console.log(this.users);
                })
                .catch((error) => {
                    console.error("Fehler beim Abrufen der Benutzerdaten: ", error);
                });
        },

        deleteCompany(user) {
            this.axios
                .delete(`/firmen/${user.id}`)
                .then((response) => {
                    console.log(response, "Firma erfolgreich gelöscht!");
                    this.getCompanys();
                })
                .catch((error) => {
                    console.error("Fehler beim Löschen des Unternehmens:", error);
                });
        },

        //* open and close EditCompany
        openEditDialog(user) {
            this.selectedUser = user;
        },

        closeEditDialog() {
            this.selectedUser = null;
            this.getCompanys();
        },

        //* open and close NewCompany
        addNewCompany() {
            console.log("addNewCompany method called");
            this.newCompanyDialogVisible = true;
            console.log("newCompanyDialogVisible:", this.newCompanyDialogVisible);
        },

        closeNewCompanyDialog() {
            console.log("closeNewCompanyDialog method called");
            this.newCompanyDialogVisible = false;
            this.getCompanys();
        },
    },
};
</script>
<style scoped>
th {
    font-size: 16px;
}
</style>
