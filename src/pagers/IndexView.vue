<template>
  <div class="index">
    <div class="title">
      <vue-typed-js class="desc" :strings="typingTexts" :loop="true" :startDelay="300" :typeSpeed="100"
                    :backSpeed="50">
        <div class="typing"/>
      </vue-typed-js>
    </div>


    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import '../css/default.css';
@import '../css/IndexView.css';

</style>

<script>
export default {
  data() {
    return {
      typingTexts: [
        'Hello My Friend ~',
        '😀欢迎来到我的网站 !',
        '如果你有什么问题的话......',
        '可以在 “聊天讨论”里说一下😜'],
    }
  },
}

</script>