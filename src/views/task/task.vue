<template>
  <div class="task">
    <div
      class="task-item"
      v-for="(item,index) in dimension"
      :key="index"
      >
      <div class="box">
        <div class="box-title">
          <div>{{ item.name }}</div>
          <el-button
            type="text"
            icon="el-icon-circle-plus"
            @click="addTask(item)">
          </el-button>
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
    </div>
    <Dialog
      v-if="visibility"
      :currentGrade="this.currentGrade"
      :currentDescription="this.currentDescription"
      @closed="visibility = false"
      @created="handleCreated"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
      }],
      currentGrade: '',
      currentDescription: '',
      visibility: false
    }
  },
  methods: {
    addTask (item) {
      this.currentGrade = item.name
      this.visibility = true
    },
    handleCreated (form) {
      this.dimension.find(ite => ite.name === form.grade).content.push({
        description: form.description
      })
    }
  },
  components: {
    Dialog: () => import('./dialog' /* webpackChunkName: task-dialog */)
  }
}
</script>
<style lang="less">
.task {
  width: 100%;
  height: 100%;
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
          margin-left: 10px;
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
</style>