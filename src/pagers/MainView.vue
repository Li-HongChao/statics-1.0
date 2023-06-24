<template>
  <div class="main">
    <!-- 时间 -->
    <div>
      <ul class=" index_dates">
        <li class="index_time">{{ date.time }}</li>
        <li class="index_date">{{ date.date }}</li>
      </ul>
    </div>

    <!-- 按键 -->
    <div v-if="show===1">
      <div class="menu">
        <div class="item"><a href="https://github.com/Li-HongChao/" target="_blank">gitHub</a></div>
        <div class="item"><a href="https://pan.baidu.com/s/1_MAvcSd_8866M0LXklO6MQ?pwd=zzqn"
                             target="_blank">学习资料</a>
        </div>
        <div class="item">
          <router-link to="chat">聊天讨论</router-link>
        </div>
        <div class="item" @click="shows(2)">联系方式</div>
        <div class="item" @click="shows(3)">关于我</div>
      </div>
      <div class="line"></div>
    </div>

    <!--联系方式-->
    <transition name="plus-icon">
    <div v-if="show===2" class="aboutbox">
      QQ邮箱:&emsp;207169819@qq.com
    </div>
    </transition>

    <transition name="plus-icon">
      <div v-if="show===3" class="aboutbox">
        关于我?于我无瓜😛😛😛😛😛😛
      </div>
    </transition>

    <div v-if="show===2||show===3" class="back-main" @click="shows(1)">
      <div class="backicon-main"></div>
      <div class="backtext-mian">返回</div>
    </div>

    <!--关于我-->
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
@import '../css/MainView.css';
@import '../css/default.css';</style>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      date: {
        time: null,
        date: null,
        temp:''
      },
      text: {
        hitokoto: '',
        from: '',
        from_who: '',
        content: ''
      },
      show: 1
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
      this.date.date = year + " 年 " + month + " 月 " + day + " 日";
    },
    getText() {
      axios.get("https://v1.hitokoto.cn/?c=k&c=d").then(e => {
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
    shows(data){
      this.show=data
    }
  },
  created() {
    this.getTimes();
    this.getText();
  }
}
</script>