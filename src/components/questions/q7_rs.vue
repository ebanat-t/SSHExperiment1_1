<template>
    <div>
        <h2>なぜそのような操作を行ったのですか?</h2>
        <p>簡単な文章で構いません。</p>
        <textarea v-model="reasonText" placeholder="理由"></textarea>
            
            
        

        
        <div class="right-button">
            <a @click="putResult()">次へ></a>
        </div>
    </div>
</template>

<script>
import getNow from '../../../static/js/getNow'
export default {

    data: {
        reasonText: ''

    },

    computed: {
        getParameter() {
            return {
                time: this.$route.query.time,
                choice: this.$route.query.choice
            }
        }
    },





    mounted () {
    },

    methods: {

        

        
        putResult() {

            var obj = { q7: { 'time': this.getParameter.time, 'choice': this.getParameter.choice, 'reason': this.reasonText } }
            this.$store.commit('addObj', obj)

            console.log(this.$store.state.userInfo)
            this.$router.push('q8')
        }

    }

    
}
</script>

<style scoped>

.question-img-comp {
    display: block;
    width: 100%;
    height: 100%;
}


img {
    display: block;
    width: 100%;
    height: 100%;
}

</style>