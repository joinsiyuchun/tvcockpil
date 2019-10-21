<template>
  <el-row class="container">
    <el-col class="header">
      <el-col :span="4" class="banner-text">演示医院</el-col>
      <el-col :span="2" class="banner-left">&nbsp;</el-col>
      <el-col :span="12" class="sys-name">婴儿暖箱护理管理系统</el-col>
      <el-col :span="2" class="banner-right">&nbsp;</el-col>
      <el-col :span="4" class="banner-text">{{nowTime}}</el-col>
      <el-col :span="12" class="room">&nbsp;</el-col>
      <el-col :span="3" class="status purple">
        空闲:
        <span class="white">{{total.available}}台</span>
      </el-col>
      <el-col :span="3" class="status red">
        使用中:
        <span class="white">{{total.inuse}}台</span>
      </el-col>
      <el-col :span="3" class="status yellow">
        待消毒:
        <span class="white">{{total.waitingclean}}台</span>
      </el-col>
      <el-col :span="3" class="status green">
        预留:
        <span class="white">{{total.reserve}}台</span>
      </el-col>

      <el-col
        :span="6"
        v-for="item in items"
        :key="item.name"
        v-bind:class="{ bdpurple : item.status==='空闲',bdred : item.status==='使用中',bdyellow : item.status==='待消毒',bdgreen : item.status==='预留'}"
      >
        <ul v-bind:class="{bgred : item.warning}">
          <li class="incubtitle">箱号：{{item.code}}&nbsp;&nbsp;{{item.type}}</li>
          <li class="incub">使用状态：{{item.status}}</li>
          <li class="incub">计划消毒时间：{{item.plancleandt}}</li>
          <li class="incub">启用日期：{{item.cleandt}}</li>
        </ul>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import { getTotal } from "../../api/api";
export default {
  data() {
    return {
      total: {
        available: 0,
        waitingclean: 0,
        reserve: 0,
        inuse: 0
      },
      items: [],
      test: true
    };
  },
  methods: {
    // 初始化数量
    getTotalAmount: function() {
      let para = {
        name: "1病房"
      };
      getTotal(para).then(res => {
        console.log(res);
        if (res.status) {
          this.total.available = res.data.available;
          this.total.waitingclean = res.data.waitingclean;
          this.total.reserve = res.data.reserve;
          this.total.inuse = res.data.inuse;
          this.items = res.data.list;
          setTimeout(() => {
            this.getTotalAmount();
          }, 2000);
        } else {
          return;
        }
      });
    },
    // 获取当前时间函数
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      // let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
      this.nowTime =
        year + "年" + month + "月" + date + "日" + " " + hh + ":" + mm;
      // console.log(this.nowTime);
    },
    // 定时器函数
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 30 * 1000);
    }
  },
  created() {
    this.getTotalAmount();
    this.nowTimes();
  }
};
</script>

<style scoped lang="stylus">
.container {
  line-height: 400%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background: url('../../assets/bg.jpg');
  background-size: 100% 100%;

  .header {
    line-height: 400%;
    margin-top: 50px;
    background: $color-primary;
    color: #fff;

    .banner-text {
      text-align: center;
      vertical-align: middle;
      font-family: PingFangSC;
      font-size: 18px;
      color: #385B7F;
    }

    .banner-left {
      text-align: right;
      vertical-align: middle;
    }

    .banner-right {
      with: 100%;
      display: block;
      text-align: left;
      vertical-align: middle;
    }

    .status {
      font-family: PingFangSC;
      font-size: 18px;
      padding-left: 24px;
    }

    .white {
      color: white;
    }

    .bgred {
     background: red;
     
    }

    .bdpurple {
     border: 5px solid purple;
     line-height: 200%;
     
    }

    .bdred {
      border: 5px solid red;
      line-height: 200%;
      
    }

    .bdyellow {
      border: 5px solid yellow;
      line-height: 200%;
      
    }

    .bdgreen {
      border: 5px solid green;
      line-height: 200%;
      
    }

    .red {
      color: red;
    }

    .green {
      color: green;
    }

    .yellow {
      color: orange;
    }

    .purple {
      color: purple;
    }

    .room {
      font-family: Songti;
      font-size: 24px;
      color: #fff;
      text-align: left;
      padding-right: 26px;
    }

    .sys-name {
      font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #fff;
      text-align: center;
    }
  }

  .incubtitle {
    font-family: PingFangSC-Medium;
    font-size: 18px;
    text-align: left;
    height: 100%;
    padding-top: 20px;
    padding-left: 20px;
  }

  .incub {
    font-family: Songti;
    font-size: 10px;
    text-align: left;
    padding-left: 20px;
  }
}
</style>

