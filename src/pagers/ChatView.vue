<template>
  <div class="main-chat">

    <div class="chat-contents">
      <div v-for="(chat,index) in chats" :key="index" class="chat-content">
        <div class="chat-title">
          <span class="sender">{{ chat.sender }} </span>
          <span class="chat-time">{{ chat.time }}</span>
        </div>

        <div class="chat-text">&emsp;{{ chat.content }}</div>

        <div v-for="(son,index) in chat.sonChat" :key="index" class="son-chat-content">
          <div class="son-title" v-if="index===0">评论回复</div>
          <div class="chat-title">
            <span class="sender">{{ son.sender }}            <span
                class="receiver">&ensp; 回复>>&ensp; </span>{{ son.receiver }}</span>&ensp;<span
              class="chat-time">{{ son.time }}</span>
          </div>
          <div class="chat-text">&emsp;{{ chat.content }}</div>
        </div>
      </div>
    </div>
    <div class="textarea">
      <textarea placeholder="请输入您的评论"></textarea>
      <div></div>
    </div>
    <div class="back"  @click="back()">
      <div class="backicon">
      </div>
      <div class="backtext">
        返回首页
      </div>
    </div>
  </div>
</template>

<style>
@import "../css/ChatView.css";
</style>

<script>
export default {
  data() {
    return {
      chats: [],
      //如果receiver为空，那就是第一级，第一级如果有回复，则会生成子对象sonChat
      //如果receiver不为空，则是回复别人的
      chat1: {
        sender: "admin",
        receiver: "user",
        content: "测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号",
        time: "10年10月10日",
        //回复的聊天
        sonChat: []
      },
      chat2: {
        sender: "admin",
        receiver: "user",
        content: "测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号",
        time: "10年10月10日",
        agree: "",
        oppose: "",
        //回复的聊天
        sonChat: []
      },
      chat3: {
        sender: "admin",
        receiver: "user",
        content: "测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号测试1号",
        time: "10年10月10日",
        agree: "",
        oppose: "",
        //回复的聊天
        sonChat: []
      }
    }
  },
  methods: {
    back(){
      this.$router.back()
    }
  },
  created() {
    this.chats.push(this.chat1)
    this.chats.push(this.chat2)
    this.chats.push(this.chat3)
    this.chats[0].sonChat.push(this.chat1)
    this.chats[0].sonChat.push(this.chat1)
    this.chats[0].sonChat.push(this.chat1)
  }
}
</script>