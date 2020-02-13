<template>
  <div id="work-order">
    <div class='header-bar'>
      <h3>我的工单</h3>
      <h3 class='el-icon-info user-icon'></h3>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="'进行中('+Statistics.haveInHand+')'" name="first">
        <el-card class="box-card" v-for="ele in list1" :key="'f'+ele.q">
          <div slot="header" class="clearfix" >
            <span>工单编号</span> <span>{{ele.code}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">{{filterStatus(ele.status)}}</el-button>
          </div>
          <div class="text item">
            工单标题：2020年2月10日工单
          </div>
          <div class="text item">
            提交日期：2020-02-10 12:00:00
          </div>
          <div class="text item">
            关闭日期：2020-02-10 12:00:00
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane :label="'待评价('+Statistics.toBeEvaluated+')'" name="second">
        <el-card class="box-card" v-for="ele in list2" :key="'s'+ele.q">
          <div slot="header" class="clearfix" >
            <span>工单编号</span> <span>{{ele.code}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">{{filterStatus(ele.status)}}</el-button>
          </div>
          <div class="text item">
            工单标题：2020年2月10日工单
          </div>
          <div class="text item">
            提交日期：2020-02-10 12:00:00
          </div>
          <div class="text item">
            关闭日期：2020-02-10 12:00:00
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane :label="'已关闭('+Statistics.closed+')'" name="third">
        <el-card class="box-card" v-for="ele in list3" :key="'t'+ele.q">
          <div slot="header" class="clearfix" >
            <span>工单编号</span> <span>{{ele.code}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">{{filterStatus(ele.status)}}</el-button>
          </div>
          <div class="text item">
            工单标题：2020年2月10日工单
          </div>
          <div class="text item">
            提交日期：2020-02-10 12:00:00
          </div>
          <div class="text item">
            关闭日期：2020-02-10 12:00:00
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'WorkOrder',
  props: {
    msg: String
  },
  data() {
    return {
      activeName: 'first',
      Statistics:{
        haveInHand:1,
        toBeEvaluated:8,
        closed:5,
      },
      list1:[
        {q:1,code:1812200004,status:0},
        {q:2,code:1812200005,status:0},
        {q:3,code:1812200006,status:0},
        {q:4,code:1812200008,status:0},
        {q:5,code:1812200009,status:0},
      ],
      list2:[
        {q:11,code:1812200016,status:1},
        {q:12,code:1812200017,status:1},
      ],
      list3:[
        {q:21,code:1812200028,status:2},
        {q:22,code:1812200029,status:2},
      ]
    }

  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    filterStatus(status){
      if(status==0){
        return '已关闭'
      }else if(status==1){
        return '进行中'
      }else if(status==2){
        return '待评价'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#work-order{
  height:calc(100% - 30px);
  /deep/ .el-tabs{
    height:100%;
  }
}
.header-bar{
  // text-align: left;
  // font-size:16px;
  // font-weight:500;
  // margin-left: 15px;
  overflow: hidden;
  h3{
    float: left;
    display: inline-block;
    font-size:14px;
    //font-weight:500;
    margin: 10px 0 10px 15px;
  }
  .user-icon{
    font-size: 16px;
    float: right;
    margin: 12px 15px 10px 0px;
  }
}
 /deep/ .el-tabs__item{

 }
/deep/ .el-tabs__nav{
  //float: right;
  margin-right:12px;
}
/deep/ .el-tabs__nav-wrap::after{
  //height:0px !important;
}
/deep/ .el-tabs__active-bar{
  width:90px !important;
  //height:0px;
}
/deep/ .el-tabs__item{
  text-align: center;
  padding:0px !important;
  width:90px;
}
/deep/ .__panel{
  padding-top:15px;
}
.text {
  font-size: 12px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  //  width: 280px;\
  box-shadow:0px 0px 10px rgba(0,0,0,0.1) inset !important;
  border:none;
  margin-top:5px;
}
// .box-card:nth-of-type(1){
//   margin-top:0;
// }
/deep/ .el-tabs__header{
  margin:0px;
}
/deep/ .el-card__header{
  padding:8px 16px;
  font-size: 12px;
}
.clearfix{
  span{
    display: inline-block;
    height:20px;
    line-height: 20px;
  }
}
/deep/ .el-card__body{
  padding:16px;
}
/deep/ .el-button{
  font-size: 12px;
}
/deep/ .text{
  font-size: 12px;
}
/deep/ .el-tabs__content{
  height:calc(100% - 40px;);
  overflow-y:auto ;
}
</style>
