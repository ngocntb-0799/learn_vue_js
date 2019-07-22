<template>
    <div class="list-user">
        <table class="tbl-list-user">
            <thead>
                <th>Name</th>
                <th>BirthDay</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr v-for="user in userData">
                    <td>{{  user.name }}</td>
                    <td>{{ user.birthday }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: [
                    {
                        name: 'Nguyen Thi Bich Ngoc',
                        birthday: '23-05-1997',
                        email: 'nguyen.thi.bich.ngoc@sun-asterisk.com',
                    },
                    {
                        name: 'Nguyen Thi Bich Ngoc1',
                        birthday: '23-05-1997',
                        email: 'nguyen.thi.bich.ngoc1@sun-asterisk.com',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tbl-list-user {
        width: 100%;
    }
</style>
