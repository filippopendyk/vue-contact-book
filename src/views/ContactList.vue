<template>
    <div class="container">
      <SearchBar @search="handleSearch" />
      <div class="contacts-list">
        <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <Contact :contact="contact" :removeContact="removeContact" />
        </li>
      </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Contact from '../components/Contact.vue';
  import SearchBar from '../components/SearchBar.vue';
  
  export default {
    data() {
      return {
        contacts: [],
        selectedContact: null,
        filteredContacts: [], // Initialize with all contacts
      };
    },
    async created() {
      try {
        let data = localStorage.getItem("contacts");
        if (data) {
          this.contacts = this.sortContacts(JSON.parse(data));
          this.filteredContacts = [...this.contacts]; // Populate filteredContacts with all contacts
        } else {
          localStorage.setItem("contacts", JSON.stringify([]));
          this.contacts = [];
        }
      } catch (error) {
        console.error("Error loading contacts:", error);
      }
    },
    methods: {
      sortContacts(contactsToSort) {
        const sortedContacts = contactsToSort.sort((a, b) => {
          let ln1 = a.lastName.toUpperCase();
          let ln2 = b.lastName.toUpperCase();
          if (ln1 < ln2) return -1;
          if (ln1 > ln2) return 1;
          return 0;
        });
        return sortedContacts;
      },
      viewDetails(contact) {
        this.selectedContact = contact;
      },
      removeContact(contactId) {
        this.contacts = this.contacts.filter(contact => contact.id !== contactId);
        this.updateFilteredContacts(); // Update filteredContacts after removing a contact
        localStorage.setItem("contacts", JSON.stringify(this.contacts));
      },
      handleSearch(query) {
        if (query) {
          this.filteredContacts = this.contacts.filter((contact) =>
            contact.firstName.toUpperCase().includes(query.toUpperCase())
          );
        } else {
          this.updateFilteredContacts(); // Update filteredContacts when the search query is empty
        }
      },
      updateFilteredContacts() {
        this.filteredContacts = [...this.contacts];
      },
    },
    components: {
      Contact,
      SearchBar,
    },
  };
  </script>
  