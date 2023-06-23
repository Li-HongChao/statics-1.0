<template>
    <div class="index">
        <div class="title">
            <vue-typed-js class="desc" :strings="typingTexts" :loop="true" :startDelay="300" :typeSpeed="100"
                :backSpeed="50">
                <div class="typing" />
            </vue-typed-js>
        </div>


        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
@import '../css/IndexView.css';
@import '../css/default.css';
</style>

<script>
import axios from "axios";
export default {
    data() {
        return {
            date: {
                time: null,
                date: null,
                weather: "🌤晴转多云",
            },
            typingTexts: [
                'Hello My Friend ~',
                '😀欢迎来到我的网站 !',
                '如果你有什么问题的话......',
                '可以在 “聊天讨论”里说一下😜'],
            text: {
                hitokoto: '',
                from: '',
                from_who: '',
                content: ''
            },
        }
    },
    methods: {
        getTimes() {
            setInterval(this.getTimesInterval, 1000);
        },
        getTimesInterval: function () {
            let year = new Date().getFullYear(); //获取当前时间的年份
            let month = new Date().getMonth() + 1; //获取当前时间的月份
            let day = new Date().getDate(); //获取当前时间的天数
            let hours = new Date().getHours(); //获取当前时间的小时
            let minutes = new Date().getMinutes(); //获取当前时间的分数
            let seconds = new Date().getSeconds(); //获取当前时间的秒数
            //当小于 10 的是时候，在前面加 0
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            //拼接格式化当前时间
            this.date.time = hours + ":" + minutes + ":" + seconds
            this.date.date = year + " 年 " + month + " 月 " + day + " 日  |🌤晴转多云"
        },
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

    created() {
        this.getTimes()
        this.getText()
    }
}

</script>