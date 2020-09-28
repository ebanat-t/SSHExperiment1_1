
<template>
    <div>
        <textarea id="copyTarget" style="position:absolute; left:-9999px; top:0px;" readonly="readonly">あいうえお</textarea>
        <h1>ありがとうございました</h1>
        <p>他の方にこの調査を共有していただけるとありがたいです。</p>
        <div class="copy-button" @click="copyLink()">
            <a id="copy-button-text">リンクをコピー</a>
        </div>
        <div class="tweet-button" @click="tweet()">
            <a>ツイートする</a>
        </div>
        
        </div>
</template>

<script>

export default {

    methods: {
        tweet() {
            var shareURL = 'https://twitter.com/intent/tweet?text=' + "調査にご協力ください！" + '&url=' + "https://ebanat-t.github.io/SSHExperiment1_1/#/"
            location.href = shareURL
        },
        copyLink() {
            var shareURL = 'https://ebanat-t.github.io/SSHExperiment1_1/#/'
            navigator.clipboard.writeText(shareURL)
            console.log('copied')
            document.getElementById('copy-button-text').innerHTML = 'コピーされました'
        }
    }

}

</script>

<style scoped>

.tweet-button {
    background: #00acee;
    width: 9rem;
    height: 1.9rem;
    margin: 1rem auto;
    padding: 0.4rem 1rem 0 1rem;
    border-radius: 2rem;
    text-align: center;
    font-weight: bold;
}

.tweet-button a {
    color: #ffffff;
    
}


.copy-button {
    background: #B56C97;
    width: 9rem;
    height: 1.9rem;
    margin: 1rem auto;
    padding: 0.4rem 1rem 0 1rem;
    border-radius: 2rem;
    text-align: center;
    font-weight: bold;
}

.copy-button a {
    color: #ffffff;
    
}

</style>
