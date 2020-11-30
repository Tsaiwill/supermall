<template>
    <div>
        <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
          <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">
             更多
             <i class="arrow-right"></i>
            </div>
          </div>
          <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
          </div>
          <div class="info-detail">
              <p>{{commentInfo.content}}</p>
              <div class="info-other">
              <!--时间戳，通过过滤器showDate来过滤-->
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
              </div>
              <div class="info-imgs">
                <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
              </div>
          </div>
      </div>
      <ul>
        <li>commentli1</li>
        <li>li2</li>
        <li>li3</li>
        <li>li4</li>
        <li>li5</li>
        <li>li6</li>
        <li>li7</li>
        <li>li8</li>
        <li>li9</li>
        <li>li10</li>
        <li>li11</li>
        <li>li12</li>
        <li>li13</li>
        <li>li14</li>
        <li>li15</li>
        <li>li16</li>
        <li>li17</li>
        <li>li18</li>
        <li>li19</li>
        <li>li20</li>
        <li>li21</li>
        <li>li22</li>
        <li>li23</li>
        <li>li24</li>
        <li>li25</li>
        <li>li26</li>
        <li>li27</li>
        <li>li28</li>
        <li>li29</li>
        <li>li30</li>
      </ul>
    </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'

  export default {
    name: "DetailCommentInfo",
    props : {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 1.将时间戳转成Date对象
        const date = new Date(value * 1000)
        // 2.将date进行格式化
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header {
    height : 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .header-title {
    float: left;
    font-size: 15px;
  }
  .header-more{
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .info-user {
      padding: 10px 0 5px
  }
   .info-user img {
     width: 42px;
     height: 42px;
     border-radius: 50%;
   }
  .info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-detail {
    padding: 0 5px 15px;
  }
  .info-detail p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other {
    font-size:12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .date {
    margin-right: 8px;
  }
  .info-imgs {
    margin-top: 10px;
  }
  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

</style>
