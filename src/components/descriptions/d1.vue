<template>
    <div>
        <h1>はじめに</h1>
        <p>いまから、画面に様々な種類のスイッチが表示されます。それらのスイッチは操作することができますが、その操作結果は反映されません。この調査では、スイッチの様子だけをたよりにして、指示された操作を実行していただきます。</p>
        <p>例えば、電灯のスイッチと、「電灯をつけてください」という指示があるとします。タップしてスイッチを切り替えることはできますが、電灯がついたり消えたりする様子を画面で見ることはできません。ですので、スイッチの見た目をもとに電灯がついているかどうかを推測していただくことになります。</p>
        <h2>おためしボタン</h2>
        <p>タップするとボタンを切り替えることができます。何度でもタップできます。</p>
        <div id="question-img-comp">
            <a class="switcharea" @click="switchState()">
                <img src="@/assets/QuestionImgs/qe_state_a.png" class="question-img" id="state_a">
            <img src="@/assets/QuestionImgs/qe_state_b.png" class="question-img" id="state_b">
            </a>
            
        

        </div>

        <div class="right-button">
            <router-link to="/d2">次へ ></router-link>
        </div>
    </div>
    
</template>


<style scoped>

h2 {
    margin-top: 4em;
}

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





<script>
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

            

            
        }
    }

    
}
</script>