<template>
  <div class="main-content">
    <!-- Dashboard Counts Section-->
    <section class="dashboard-counts no-padding-bottom">
      <div class="container-fluid">
        <div class="col-xl-12 text-center display-5">暖箱护理管理系统（病房一）</div>
        <div class="row has-shadow bg-white">
          <!-- Item -->
          <div class="col-xl-3 col-sm-6">
            <div class="item d-flex align-items-center">
              <div class="icon bg-violet">
                <i class="fa fa-calendar-o"></i>
              </div>
              <div class="title">
                <span>空闲</span>
                <div class="progress">
                  <div
                    role="progressbar"
                    style="width: 10%; height: 4px;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar bg-violet"
                  ></div>
                </div>
              </div>
              <div class="number">
                <strong>{{total.available}}</strong>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div class="col-xl-3 col-sm-6">
            <div class="item d-flex align-items-center">
              <div class="icon bg-green">
                <i class="fa fa-calendar-o"></i>
              </div>
              <div class="title">
                <span>预留</span>
                <div class="progress">
                  <div
                    role="progressbar"
                    style="width: 20%; height: 4px;"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar bg-green"
                  ></div>
                </div>
              </div>
              <div class="number">
                <strong>{{total.reserve}}</strong>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div class="col-xl-3 col-sm-6">
            <div class="item d-flex align-items-center">
              <div class="icon bg-blue">
                <i class="fa fa-tasks"></i>
              </div>
              <div class="title">
                <span>使用中</span>
                <div class="progress">
                  <div
                    role="progressbar"
                    style="width: 30%; height: 4px;"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar bg-blue"
                  ></div>
                </div>
              </div>
              <div class="number">
                <strong>{{total.inuse}}</strong>
              </div>
            </div>
          </div>

          <!-- Item -->
          <div class="col-xl-3 col-sm-6">
            <div class="item d-flex align-items-center">
              <div class="icon bg-orange">
                <i class="fa fa-tasks"></i>
              </div>
              <div class="title">
                <span>待消毒</span>
                <div class="progress">
                  <div
                    role="progressbar"
                    style="width:40%; height: 4px;"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar bg-orange"
                  ></div>
                </div>
              </div>
              <div class="number">
                <strong>{{total.waitingclean}}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dashboard-header">
      <div class="container-fluid">
        <div class="row">
          <!-- Statistics -->
          <div class="statistics col-lg-3 col-12">
            <div v-for="item in items" :key="item.name" class="client card">
              <div
                v-if="item.isincub==false"
                class="statistic card-header d-flex align-items-center display-1 text-gray bg-black"
              >{{item.type}}</div>
              <div v-else>
                <div
                  class="statistic card-header d-flex align-items-center"
                  v-bind:class="{ bgpurple : item.status==='空闲',bgblue : item.status==='使用中',bgorange : item.status==='待消毒',bggreen : item.status==='预留'}"
                >
                  <div class="icon bg-red">{{item.code}}</div>
                  <div class="text">
                    <strong>{{item.type}}</strong>
                    <br />
                    {{item.status}}
                  </div>
                </div>
                <div class="card-body text-left">
                  <ul class="text">
                    <li>每日消毒：{{item.ifdailyclean}}</li>
                    <li>每周消毒：{{item.ifweeklyclean}}</li>
                    <li>启用时间：{{item.cleandt}}</li>
                    <li>到期时间：{{item.expiredt}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Statistics -->
          <div class="statistics col-lg-3 col-12">
            <div v-for="item in items1" :key="item.name" class="client card">
              <div
                v-if="item.isincub==false"
                class="statistic card-header d-flex align-items-center display-3 text-gray build"
              >{{item.type}}</div>
              <div v-else>
                <div
                  class="statistic card-header d-flex align-items-center"
                  v-bind:class="{ bgpurple : item.status==='空闲',bgblue : item.status==='使用中',bgorange : item.status==='待消毒',bggreen : item.status==='预留'}"
                >
                  <div class="icon bg-red">{{item.code}}</div>
                  <div class="text">
                    <strong>{{item.type}}</strong>
                    <br />
                    {{item.status}}
                  </div>
                </div>
                <div class="card-body text-left">
                   <ul class="text">
                    <li>每日消毒：{{item.ifdailyclean}}</li>
                    <li>每周消毒：{{item.ifweeklyclean}}</li>
                    <li>启用时间：{{item.cleandt}}</li>
                    <li>到期时间：{{item.expiredt}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Statistics -->
          <div class="statistics col-lg-3 col-12">
            <div v-for="item in items2" :key="item.name" class="client card">
              <div
                v-if="item.isincub==false"
                class="statistic card-header d-flex align-items-center display-3 text-gray build"
              >{{item.type}}</div>
              <div v-else>
                <div
                  class="statistic card-header d-flex align-items-center"
                  v-bind:class="{ bgpurple : item.status==='空闲',bgblue : item.status==='使用中',bgorange : item.status==='待消毒',bggreen : item.status==='预留'}"
                >
                  <div class="icon bg-red">{{item.code}}</div>
                  <div class="text">
                    <strong>{{item.type}}</strong>
                    <br />
                    {{item.status}}
                  </div>
                </div>
                <div class="card-body text-left">
                   <ul class="text">
                    <li>每日消毒：{{item.ifdailyclean}}</li>
                    <li>每周消毒：{{item.ifweeklyclean}}</li>
                    <li>启用时间：{{item.cleandt}}</li>
                    <li>到期时间：{{item.expiredt}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Statistics -->
          <div class="statistics col-lg-3 col-12">
            <div v-for="item in items3" :key="item.name" class="client card">
              <div
                v-if="item.isincub==false"
                class="statistic card-header d-flex align-items-center display-3 text-gray build"
              >{{item.type}}</div>
              <div v-else>
                <div
                  class="statistic card-header d-flex align-items-center"
                  v-bind:class="{ bgpurple : item.status==='空闲',bgblue : item.status==='使用中',bgorange : item.status==='待消毒',bggreen : item.status==='预留'}"
                >
                  <div class="icon bg-red">{{item.code}}</div>
                  <div class="text">
                    <strong>{{item.type}}</strong>
                    <br />
                    {{item.status}}
                  </div>
                </div>
                <div class="card-body text-left">
                   <ul class="text">
                    <li>每日消毒：{{item.ifdailyclean}}</li>
                    <li>每周消毒：{{item.ifweeklyclean}}</li>
                    <li>启用时间：{{item.cleandt}}</li>
                    <li>到期时间：{{item.expiredt}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
      items1: [],
      items2: [],
      items3: []
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
          this.items1 = res.data.list1;
          this.items2 = res.data.list2;
          this.items3 = res.data.list3;
          setTimeout(() => {
            this.getTotalAmount();
          }, 4000);
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
    // this.nowTimes();
  }
};
</script>



