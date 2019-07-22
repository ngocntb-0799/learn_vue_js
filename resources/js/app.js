
require('./bootstrap');

window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('my-component', require('./components/MyComponent.vue').default);
// Vue.component('conditional-rendering', require('./components/ConditionalRendering.vue').default);
// Vue.component('list-rendering', require('./components/ListRendering.vue').default);
Vue.component('user-dashboard', require('./components/users/UserDashboard.vue').default);

const app = new Vue({
    el: '#app',
});
