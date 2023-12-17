import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import ContactList from "./views/ContactList.vue";
import ContactInfo from "./views/ContactInfo.vue";
import CreateContact from "./views/CreateContact.vue";
import EditContact from "./views/EditContact.vue";

const routes = [
  { path: "/", component: ContactList },
  {
    path: '/details/:id',
    name: 'details',
    component: ContactInfo,
    props: true,
},
  { path: "/add", component: CreateContact },
  { path: "/edit/:id", name: 'edit', component: EditContact, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");