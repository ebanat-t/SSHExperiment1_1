<template>
    <div>
        <p>これはスマホのライトのスイッチです。<br>スマホのライトがが光っている状態にしてください。</p>
        <div id="question-img-comp">
            <a class="switcharea" @click="switchState()">
                <img src="@/assets/QuestionImgs/q6_state_a.png" class="question-img" id="state_a">
            <img src="@/assets/QuestionImgs/q6_state_b.png" class="question-img" id="state_b">
            </a>
            
        

        </div>
        <div class="right-button">
            <a @click="putTimeandChoice()">決定して次へ></a>
        </div>
    </div>
</template>

<script>
import getNow from '../../../static/js/getNow'
export default {

    mounted () {
        this.initialize()
    },

    methods: {

        

        initialize() {

            

            let initialStateNum = Math.random()
            console.log(initialStateNum)
            let initialState

            if(initialStateNum < 0.5) {
                initialState = 'state_a'
            } else {
                initialState = 'state_b'
            }

            

            switch (initialState) {
                case "state_a":
                    document.getElementById('state_a').style.display = "block"
                    document.getElementById('state_b').style.display = "none"
                    break;

                case "state_b":
                    document.getElementById('state_b').style.display = "block"
                    document.getElementById('state_a').style.display = "none"
                    break;
            
                default:
                    break;
            }
        




        },

        switchState(){


            if(document.getElementById('state_a').style.display == "none"){
                document.getElementById('state_a').style.display = "block"
                document.getElementById('state_b').style.display = "none"
            } else {
                document.getElementById('state_b').style.display = "block"
                document.getElementById('state_a').style.display = "none"
            }

            

            
        },

        
        putTimeandChoice() {

            let choice

            if(document.getElementById('state_a').style.display == "none"){
                choice = "state_b"
            } else {
                choice = "state_a"
            }

            var obj = { 'time': getNow.getNow(), 'choice': choice } 

            this.$router.push({ path: 'q6_rs', query: obj })

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