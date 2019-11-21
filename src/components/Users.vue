<template>
   <div id="users" >
       <table class="table" >
           <thead>
               <tr>
                   <th>id</th>
                   <th>Username</th>
                   <th>password</th>
                   <th>bio</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(user, index) in users"  :key="index">
                   <td>{{index}}</td>
                   <td>{{user.username}}</td>
                   <td>{{user.password}}</td>
                   <td>{{user.bio}}</td>
               </tr>
           </tbody>
       </table>
   </div>
</template>

<script>
    export default {
        name: 'Users',
        props: {
            users: Array,
        },
    }
</script>

<style scoped>
    .table {
        width: 100%;
    }
    .table tr {
        border-bottom: 1px solid #000000;
    }
</style>