<template>
    <div>
      <form @submit.prevent="saveChanges">
        <label for="firstName">First Name:</label>
        <input v-model="editedContact.firstName" type="text" id="firstName" required>
  
        <label for="lastName">Last Name:</label>
        <input v-model="editedContact.lastName" type="text" id="lastName" required>
  
        <label for="email">Email:</label>
        <input v-model="editedContact.email" type="email" id="email" required>
  
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        editedContact: {
          id: null,
          firstName: '',
          lastName: '',
          email: '',
        },
      };
    },
    methods: {
      async fetchContactDetails() {
        const contactId = this.$route.params.id;

        try {

          const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
          const foundContact = storedContacts.find(contact => contact.id == contactId);
  
          if (foundContact) {
            this.editedContact = { ...foundContact }; 
          } else {
            console.error('Contact not found');
          }
        } catch (error) {
          console.error('Error fetching contact details:', error);
        }
      },
      async saveChanges() {
        const contactId = this.$route.params.id;
  
        try {

          const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
          const index = storedContacts.findIndex(contact => contact.id == contactId);
  
          if (index !== -1) {
            storedContacts[index] = { ...this.editedContact };
            localStorage.setItem('contacts', JSON.stringify(storedContacts));
            this.$router.push({ name: 'details', params: { id: contactId } });
          } else {
            console.error('Contact not found');
          }
        } catch (error) {
          console.error('Error saving contact changes:', error);
        }
      },
    },
    watch: {
      $route: 'fetchContactDetails',
    },
    created() {
      this.fetchContactDetails();
    },
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