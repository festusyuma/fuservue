<template>
    <div id="app">
        <App-Form :action="formData.action" :fields="formData.fields" :submit-text="formData.submitText" ></App-Form>
        <App-Users :users="this.$store.state.users" ></App-Users>
    </div>
</template>

<script>
    import Form from './components/Form.vue'
    import Users from './components/Users.vue'

    export default {
        name: 'app',
        data() {
            return {
                formData: {
                    action: '',
                    submitText: 'Register',
                    fields: [
                        {name: 'username', hint: 'Enter username', type: 'text', classes: ['input-name']},
                        {name: 'password', hint: 'Enter Password', type: 'password'},
                        {name: 'bio', hint: 'Bio', type: 'textArea'},
                    ],
                },
                users: [],
            }
        },

        components: {
            'App-Form': Form,
            'App-Users': Users,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
