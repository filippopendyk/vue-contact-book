<!-- <template>
  <div>
    <h2>Contact Details</h2>
    <div v-if="contact">
      <p><strong>ID:</strong> {{ contact.id }}</p>
      <p><strong>Name:</strong> {{ contact.firstName }} {{ contact.lastName }}</p>
      <p><strong>Email:</strong> {{ contact.email }}</p>
    </div>
    <div v-else>
      <p>Contact not found</p>
    </div>
  </div>
</template> -->

<template>
  <div class="container">
    <div class="top-container">
      <div class="text-container">
        <h3 class="name">{{ contact.firstName }} {{ contact.lastName }}</h3>
      </div>
    </div>
    <hr>
    <p class="email">
      {{ contact.email }}
    </p>
  </div>
</template>

<script>
import RemoveBtn from '@/components/RemoveBtn.vue';

export default {
    data() {
        return {
            contact: null,
        };
    },
    methods: {
        async fetchContactDetails() {
            const contactId = this.$route.params.id;
            try {
                const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
                const foundContact = storedContacts.find(contact => contact.id == contactId);
                if (foundContact) {
                    this.contact = foundContact;
                }
                else {
                    console.error('Contact not found');
                }
            }
            catch (error) {
                console.error('Error fetching contact details:', error);
            }
        },
    },
    watch: {
        $route: 'fetchContactDetails',
    },
    created() {
        this.fetchContactDetails();
    },
    components: { RemoveBtn }
};
</script>

<style scoped>
  .top-container{
    display: flex;
    box-sizing: border-box;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
}

.container{
    border: 1px solid slategray;
    margin-top: 1rem;
}

.name{
    font-size: 2rem;
}

.email{
    font-size: 1rem;
    font-weight: normal;
    box-sizing: border-box;
    padding: 0.5rem;
}
</style>