<template>
    <div>
        <EditKlienten v-if="selectedUser != null" @saved="reload()" @dialog-closed="resetSelectedUser()" :user="selectedUser"></EditKlienten>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Vorname</th>
                    <th class="text-left">Nachname</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Role</th>
                    <th class="text-left">Bearbeiten</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <!-- <td>{{ formatDateTime(user.created_at) }}</td> -->
                    <td>
                        <v-icon @click="selectUser(user)" class="mr-4">
                            <font-awesome-icon icon="fa-light fa-pen-circle" class="fa-lg" />
                        </v-icon>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import EditKlienten from "./EditKlienten.vue";
export default {
    name: "Klienten",
    components: {
        EditKlienten,
    },
    data() {
        return {
            users: [],
            selectedUser: null,
        };
    },

    mounted() {
        this.reload();
    },

    methods: {
        reload() {
            console.log("reload");
            this.axios
                .get("/user")
                .then((response) => {
                    this.users = response.data;
                    console.log(this.users);
                })
                .catch((error) => {
                    console.error("Fehler beim Abrufen der Benutzerdaten: ", error);
                });
        },

        formatDateTime(dateTime) {
            const date = new Date(dateTime);
            return date.toLocaleString();
        },

        selectUser(user) {
            this.selectedUser = user;
            console.log("Ausgewählter Benutzer:", this.selectedUser);
        },

        resetSelectedUser() {
            this.selectedUser = null;
        },
    },
};
</script>
<style scoped>
th {
    font-size: 16px;
}
</style>
