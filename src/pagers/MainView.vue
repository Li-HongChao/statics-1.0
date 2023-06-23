<template>
    <div>
        <!-- 时间 -->
        <div>
            <ul class=" index_dates">
                <li class="index_time">{{ date.time }}</li>
                <li class="index_date">{{ date.date }}</li>
            </ul>
        </div>

        <!-- 按键 -->
        <div class="menu">
            <div class="item"><a href="https://github.com/Li-HongChao/" target="_blank">gitHub</a></div>
            <div class="item"><a href="https://pan.baidu.com/s/1_MAvcSd_8866M0LXklO6MQ?pwd=zzqn" target="_blank">学习资料</a>
            </div>
            <div class="item">聊天讨论</div>
            <div class="item">联系方式</div>
            <div class="item">关于我</div>
        </div>
        <div class="line"></div>

        <!-- 名言 -->
        <div class="text">
            {{ text.hitokoto }}
            <br>
            <br>
            ——{{ text.from_who }}&emsp;
            《{{ text.from }}》
        </div>
    </div>
</template>
<style>
@import '../css/IndexView.css';
@import '../css/default.css';</style>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            date: {
                time: null,
                date: null,
                weather: "🌤晴转多云",
            },
            text: {
                hitokoto: '',
                from: '',
                from_who: '',
                content: ''
            },
        }
    },
    methods:{
        getText() {
            axios.get("v1.hitokoto.cn/?c=k&c=d").then(e => {
                this.text = e.data
                if (this.text.from == null) {
                    this.text.from = ""
                }
                if (this.text.from_who == null) {
                    this.text.from_who = ""
                }
                console.log("每日一言" + this.text.hitokoto);
            })
        },
    },
    created(){
        this.getText();
    }
}
</script>