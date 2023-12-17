<template>
    <div class="add-contact-container">
        <form @submit.prevent="addContact">
            <label for="firstName">First Name</label>
            <input
                type="text"
                v-model="contact.firstName"
                id="firstName"
                placeholder="First name"
                required
            />
            <label for="lastName">Last Name</label>
            <input
                type="text"
                v-model="contact.lastName"
                id="lastName"
                placeholder="Last name"
                required
            />
            <label for="email">Email</label>
            <input
                type="text"
                v-model="contact.email"
                id="email"
                placeholder="Email"
                required
            />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            contact: {
                id: "",
                firstName: "",
                lastName: "",
                email: "",
            },
            contacts: [],
        }),

        methods: {
            addContact: function(){
                let data = localStorage.getItem("contacts");
                if(data) {
                    this.contacts = JSON.parse(data);
                    this.contact.id = this.contacts.length + 1;
                } else {
                    this.contact.id = 1;
                }
                this.contacts.push(this.contact);
                localStorage.setItem("contacts", JSON.stringify(this.contacts));
                this.$router.push("/");
            }
        }
    };
</script>

<style scoped>
    h3{
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1rem;
}

input{
    width: 50%;
    padding: 0.5rem;
    margin: 0.5rem 0;
}

button{
    margin-top: 0.5rem;
    width: 25%;
    background-color: lightgreen;
    font-size: 1.25rem;
}
</style>