<template>
  <main class="main">
    <div class="box-card">
      <div class="text1">
        <p class="title">灰雀简介</p>
        <p class="content">{{huique}}</p>
      </div>
      <div class="text1">
        <p class="title">功能简介</p>
        <p class="content">{{feature}}</p>
      </div>
      <div class="text2">
        <div class="title">作者</div>
        <div
          style="text-align: left"
          v-for="item in author"
          :key="item.authorid"
        >姓名：{{item.name}} 微信号：{{item.wxnumber}}</div>
      </div>
    </div>
    <section class="list-item">
      <div class="item-image">
        <img src="../../assets/images/1.jpg" alt="item-image-1" />
      </div>
      <div class="item-text">
        <div class="item-title">「灰雀 关注医疗移民」</div>
        <div class="item-desc"></div>
      </div>
    </section>

    <section class="list-item">
      <div class="item-image">
        <img src="../../assets/images/2.jpg" alt="item-image-2" />
      </div>
      <div class="item-text">
        <div class="item-title">「灰雀 1.0」</div>
        <div class="item-desc">我们,从这里出发(灰雀1.0介绍文字)</div>
      </div>
    </section>

    <section class="list-item">
      <div class="item-image">
        <img src="../../assets/images/3.jpg" alt="item-image-3" />
      </div>
      <div class="item-text">
        <div class="item-title">「灰雀 2.0」</div>
        <div class="item-desc">(灰雀2.0介绍文字)</div>
      </div>
    </section>

    <section class="list-item">
      <div class="item-image">
        <img src="../../assets/images/4.jpg" alt="item-image-4" />
      </div>
      <div class="item-text">
        <div class="item-title">「灰雀 3.0」</div>
        <div class="item-desc">(灰雀3.0介绍文字)</div>
      </div>
    </section>

    <section class="list-item">
      <div class="item-image">
        <img src="../../assets/images/5.jpg" alt="item-image-5" />
      </div>
      <div class="item-text">
        <div class="item-title">「灰雀 4.0」</div>
        <div class="item-desc">(灰雀4.0介绍文字)</div>
      </div>
    </section>

    <section class="list-item">
      <div class="item-image">
        <img src="../../assets/images/6.jpg" alt="item-image-6" />
      </div>
      <div class="item-text">
        <div class="item-title">「从今往后」</div>
        <div class="item-desc">我们也将陪伴在每一位医疗移民身边</div>
      </div>
    </section>
  </main>
</template>

<script>
import api from "@/api";
export default {
  name: "About",
  data() {
    return {
      feature: "",
      huique: "",
      author: [],
    };
  },
  methods: {
    handleFeedback() {},
  },
  created() {
    api.Common.getAppInfo()
      .then((data) => {
        this.feature = data[0].msg1;
        this.huique = data[1].msg1;
      })
      .catch((error) => {
        console.log(error);
      });
    api.Common.getAuthor()
      .then((data) => {
        this.author = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    var main = document.getElementsByTagName("main");
    main[0].classList = "";
    main[0].classList = "main";
    var html = document.getElementsByTagName("html");
    html[0].style = "overflow: hidden; padding: 0; margin: 0;";
    var body = document.getElementsByTagName("body");
    body[0].style =
      "width: 100vw;height: 100vh;perspective: 100px;transform-style: preserve-3d;overflow-y: auto;margin: 0;padding: 0;";
    var app = document.getElementsByClassName("app");
    app[0].style.backgroundImage = "";
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
}

html {
  /* 需要隐藏最外层不可见区域以使视差生效 */
  overflow: hidden;
}

body {
  width: 100vw;
  height: 100vh;
  perspective: 100px;
  transform-style: preserve-3d;
  /* 3D的容器要允许overflow才能生效 */
  overflow-y: auto;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 45vh;
  overflow: hidden;
}

.list-item:hover .item-image::before {
  background-color: rgba(0, 0, 0, 0.2);
}

.item-image {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateZ(-50px) scale(2.4);
  z-index: -1;
}

.item-image::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.4);
}

.item-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-text {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: #ffffff;
}

.item-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.item-desc {
  font-size: 1.2rem;
}
.box-card {
  margin: 20px;
  padding: 20px;
  background: rgb(231, 238, 246);
  width: 90%;
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.title {
  font-size: 23px;
}

.content {
  color: #959394;
}
.text1 {
  text-align: center;
  line-height: 35px;
}
.text2 {
  text-align: center;
  line-height: 35px;
  margin: auto 35%;
}
</style>
