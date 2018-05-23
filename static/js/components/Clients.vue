<template>
  <div id="">
    <table v-if="clients">
        <thead>
            <th>Full Name</th>
            <th>Social Id</th>
            <th>Address</th>
        </thead>
        <tbody>
            <tr v-for="client in clients" :key="client.pk">
                <td>{{client.fields.firstName}} {{client.fields.lastName}}</td>
                <td>{{client.fields.socialId}}</td>
                <td>{{client.fields.address}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            clients: []
        }
    },
    mounted(){
        axios.get('/presto/clients').then(res => this.clients = res.data)
    }
}
</script>
<style scoped>

</style>