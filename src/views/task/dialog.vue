<template>
  <el-dialog
    title="新增任务"
    :visible.sync="visibility"
    center
    @closed="handleClose">
    <el-form :model="form">
      <el-form-item label="任务等级" :label-width="formLabelWidth">
        <el-select
          v-model="form.grade"
          placeholder="请选择任务等级"
          style="width: 100%">
          <el-option
            v-for="(item,index) in taskGradeList"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="任务内容" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          v-model="form.description"
          autocomplete="off"
          placeholder="请输入任务内容">
        </el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visibility = false">取 消</el-button>
      <el-button type="primary" @click="handleCreate">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
const taskGradeList = [{
  label: '紧急',
  value: '紧急'
},{
  label: '不紧急',
  value: '不紧急'
},{
  label: '重要',
  value: '重要'
},{
  label: '不重要',
  value: '不重要'
}]
export default {
  props: {
    currentGrade: {
      type: String,
      default: '紧急'
    },
    currentDescription: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visibility: true,
      form: {
        grade: '重要',
        description: ''
      },
      formLabelWidth: '120px',
      taskGradeList: taskGradeList
    }
  },
  mounted() {
    this.form.grade = this.currentGrade
    this.form.description = this.currentDescription
  },
  methods: {
    handleClose () {
      this.visibility = false
      this.$emit('closed')
    },
    handleCreate () {
      console.log(this.form)
      this.visibility = false
      this.$emit('created', this.form)
    }
  }
}
</script>