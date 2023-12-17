<!-- <template>
    <div class="contact-info-container">
        <div class="top-container" @click="redirectToDetailsPage">
            <p>{{ contact.firstName }}</p>
        </div>
        <RemoveBtn @click="removeContact(contact.id)" />
    </div>
</template> -->

<template>
    <div class="contact-container">
        <p @click="redirectToDetailsPage">{{ contact.firstName }} {{ contact.lastName }}</p>
        <div class="buttons-container">
            <RemoveBtn @click="removeContact(contact.id)"/>
            <EditBtn @click="editContact(contact.id)" />
        </div>
    </div>
</template>



<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import RemoveBtn from './RemoveBtn.vue';
import EditBtn from './EditBtn.vue'

const props = defineProps({
    contact: {
        firstName: String,
        lastName: String,
        email: String,
        id: String, 
    },
    removeContact: {
        type: Function,
    }
});

const router = useRouter();

const redirectToDetailsPage = () => {
    // Convert id to a number before passing it to router.push
    const contactId = parseInt(props.contact.id, 10);
    
    // Redirect to the details page with the contact id
    router.push({ name: 'details', params: { id: contactId} });
};

const editContact = (id) => {
    router.push({name: 'edit', params: {id: id}});
}
</script>

<style scoped>
    .contact-container{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    align-items: center;
    margin-top: 0.5rem;
    border: 1px solid lightslategray;
}

p{
    font-size: 1.5rem;
    font-weight: bold;
}
</style>