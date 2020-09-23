
<template>
    <div>
        <h1>これで調査は終わりです。</h1>
        <p>終了ボタンを押して、操作結果を送信してください。</p>
        <a @click='sendItem'>結果を送信する</a>
    </div>
</template>

<script>
import firebase from '@/firebase/firebase'
import getNow from '../../static/js/getNow'



export default {
    created: function() {
        
    },

    methods: {

        sendItem() {

            

            var dataObject = {'time': getNow.getNow(), 'userActions': this.$store.state.userInfo}

            firebase.firestore().collection("userActionLog").add(dataObject)

            console.log(dataObject)

            this.$router.push('bye')


        }

        
    }

    
}
</script>
