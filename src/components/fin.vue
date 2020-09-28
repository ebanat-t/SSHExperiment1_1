<template>
    <div>
        <h1>これで調査は終わりです。</h1>
        <p>最後に、ご自身に関する情報をいくつかご入力ください。</p>

        <div class="input-component">
            <span class="input-title">年齢</span><br>
            <input name="age" inputmode="tel"><br>
            <span id="err-age" class="error-message" hidden>入力してください。</span>
        </div>
        <div class="input-component">
            <span class="input-title">性別</span><br>
            <select name="gender">
                <option value="" disabled selected>選択してください</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="custom">カスタム</option>
                <option value="unanswered">無回答</option>
            </select><br>
            <span id="err-gen" class="error-message" hidden>入力してください。</span>
        </div>
        <div class="input-component">
            <span class="input-title">普段使用しているスマートフォンやタブレットのOS</span><br>
            <select name="os" >
                <option value="" disabled selected>選択してください</option>
                <option value="ios">iOS</option>
                <option value="android">Android</option>
                <option value="others">その他</option>
                <option value="none">使用していない</option>
            </select><br>
            <span id="err-os" class="error-message" hidden>入力してください。</span>
        </div>
        <div class="input-component">
            <span class="input-title">この調査に関して感想等ありましたらご入力ください。</span><br>
            <textarea name="feedback"></textarea>
        </div>
        
        <div class="mid-button">
            <div @click="confirmItem()">
                <a>送 信</a>
            </div>
        </div>

        
    
    </div>
    
</template>

<script>
import firebase from '@/firebase/firebase'
import getNow from '../../static/js/getNow'



export default {

    methods: {

        confirmItem(){

            var age = document.getElementsByName('age')[0].value
            var gender = document.getElementsByName('gender')[0].value
            var osName = document.getElementsByName('os')[0].value
            var feedback = document.getElementsByName('feedback')[0].value

            if (!age) {
                document.getElementById('err-age').style.display = 'inline'
            } else {
                document.getElementById('err-age').style.display = 'none'
            }

            if (!gender) {
                document.getElementById('err-gen').style.display = 'inline'
            } else {
                document.getElementById('err-gen').style.display = 'none'
            }

            if (!osName) {
                document.getElementById('err-os').style.display = 'inline'
            } else {
                document.getElementById('err-os').style.display = 'none'
            }

            if (!feedback) {
                feedback = 'none'
            }


            if (age && gender && osName) {
                var userAgent = navigator.userAgent
                var userData = { 'age': age, 'gender': gender, 'OS': osName, 'feedback': feedback, 'userAgent': userAgent }
                this.sendItem(userData)
                
            }


        },

        sendItem(userData) {

            

            var dataObject = { 'time': getNow.getNow(), 'userData': userData, 'userActions': this.$store.state.userInfo }

            firebase.firestore().collection("userActionLog").add(dataObject)

            console.log(dataObject)

            this.$router.push('bye')


        }

        
    }

    
}
</script>

<style scoped>

.input-component {
    margin-bottom: 1rem;
}

.input-component * {
    margin-top: 0.2rem;
}


.input-title {
    font-size: 0.85rem;
}
.error-message {
    font-size: 0.7rem;
    margin-top: 1rem;
    color: #FF644E;
    font-weight: 400;
}

.mid-button div {
    background: #2c3e50;
    width: 4rem;
    height: 1.9rem;
    margin: auto;
    padding: 0.4rem 1rem 0 1rem;
    border-radius: 2rem;
}

.mid-button div a {
    color: #e0e0e0;
    
}


</style>