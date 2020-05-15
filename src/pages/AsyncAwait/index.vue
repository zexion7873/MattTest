<template>
  <div class="listDemo">
    <h1>Async Await Test</h1>
    <p>骰出來的數字若為奇數回傳 true，若為偶數則回傳 false</p>
      <h2>隨機數字</h2>
      <p>{{num}}</p>
      <h2>答案</h2>
      <p>{{testMsg}}</p>
      <div class="msg-timer">
        <p>{{timer}}</p>
      </div>
      <!-- <div>
        <button @click.prevent="startAction">Start</button>
      </div> -->
      <div>
        <button class="start-btn" @click.prevent="asyncAction">Async Start</button>
      </div>
      <div class="msg-box">
        <textarea v-model="consoleMsg" readonly></textarea>
      </div>
  </div>
</template>

<script>
export default {
  name: 'asyncAwait',
  data () {
    return {
      testMsg: '',
      num: 0,
      timer: 0,
      intervalSec: 1000,
      timerReciprocal: null,
      consoleMsg: ''
    }
  },
  watch: {
    timer: function () {
      if (this.timer === 0) {
        this.clearReciprocal()
      }
    }
  },
  methods: {
    startAction: function () {
      this.testMsg = 'Action Start'
    },
    asyncAction: async function () {
      const msgFlag = await this.getMsg()
      this.showMsg(msgFlag)
      if (msgFlag) {
        this.testMsg = '奇數：Async Await 回傳成功'
      } else {
        this.testMsg = '偶數：Async Await 回傳false'
      }
    },
    getMsg: async function () {
      this.consoleMsg = '開始！'
      this.showMsg('sleep')
      this.reciprocal(5)
      this.showMsg('等待答案')
      this.setNum()
      await this.sleep(5000)
      this.showMsg('取得答案')
      if ((this.num % 2) === 1) {
        return true
      } else {
        return false
      }
    },
    setNum: function () {
      this.num = Math.floor((Math.random() * 10))
    },
    sleep: async function (ms = 0) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
      })
    },
    reciprocal: function (timeSec) {
      this.timer = timeSec
      this.timerReciprocal = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        }
      }, this.intervalSec)
    },
    clearReciprocal: function () {
      clearInterval(this.timerReciprocal)
    },
    showMsg: function (text) {
      this.consoleMsg += '\n'
      this.consoleMsg += text
    }
  }
}
</script>

<style scoped>
.msg-timer {
  font-size: 2em;
  color: blue;
}
.msg-box {
  position: absolute;
  top: 500px;
  right: 20px;
  margin: auto;
  width: 400px;
  height: 300px;
}
.msg-box > textarea {
  width: 300px;
  height: 200px;
  resize: none;
}
.start-btn {
  font-size: 1.5em;
  padding: 20px;
}

</style>
