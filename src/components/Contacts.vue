
<template>
    <div>
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <span @click="viewDetails(contact)" style="cursor: pointer;">
            {{ contact.firstName }} {{ contact.lastName }}
          </span>
          <button @click="removeContact(contact.id)">Remove</button>
        </li>
      </ul>
      <div v-if="filteredContacts.length === 0">
        No contacts found.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      filteredContacts: {
        type: Array,
        required: true,
      },
    },
    methods: {
      removeContact(contactId) {
        this.$emit('remove-contact', contactId);
      },
      viewDetails(contact) {
        this.$emit('view-details', contact);
      },
    },
  };
  </script>
  