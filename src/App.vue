<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <div class="layout">
      <div class="layout-header">
        <div class="layout-header__title">欢迎使用效率清单</div>
      </div>
      <div class="layout-content">
        <div class="layout-content__left">

        </div>
        <div class="layout-content__right">
          <router-view />
          <!-- <div
            class="layout-content__right-item"
            v-for="(item,index) in dimension"
            :key="index"
            >
            <div class="box">
              <div class="box-title">
                <div>{{ item.name }}</div>
                <button @click="addTask(item)">新增</button>
              </div>
              <div class="box-body">
                <div
                  class="box-body__task"
                  v-for="(ite,ind) in item.content"
                  :key="ind">
                  <span>{{ ind + 1 }}. {{ ite.description }}</span>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      category: [],
      dimension: [{
        name: '紧急',
        content: [{
          description: '第一个任务'
        }]
      },{
        name: '不紧急',
        content: []
      },{
        name: '重要',
        content: []
      },{
        name: '不重要',
        content: []
      }]
    }
  },
  mounted () {
    this.$api.getUsersList().then(res => {
      console.log(res)
    })
  },
  methods: {
    addTask (item) {
      this.dimension.find(ite => ite.name === item.name).content.push({
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      },{
        description: "新增任务"
      })
    }
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    flex-basis: 60px;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    align-items: center;
    &__title {
      font-size: 22px;
    }
  }
  &-content {
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow: scroll;
    &__left {
      flex-basis: 240px;
      border-right: 1px solid #ccc;
    }
    &__right {
      flex: 1;
      box-sizing: content-box;
      padding:15px;
      &-item {
        flex: 1;
        width: 50%;
        height: 50%;
        padding: 10px;
        float: left;
        box-sizing: border-box;
        .box {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          border: 1px solid #ccc;
          &-title {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            button {
              display: block;
              width: 50px;
              height: 25px;
              margin-left: 10px;
              cursor: pointer;
            }
          }
          &-body {
            flex: 1;
            overflow: scroll;
            &__task {
              display: flex;
              flex-direction: row;
              padding: 0 10px;
              overflow: scroll;
            }
          }
        }
      }
    }
  }
}
</style>
