<template>
    <div>
        <el-input
            v-if="typeIndex === 'input'"
            v-model="inputValue"
            required=""
        ></el-input>
        <el-input-number
            v-if="typeIndex === 'inputNumber'"
            v-model="num"
            required=""
            :min="1"
            :max="10"
        ></el-input-number>
        <el-checkbox-group
            v-if="typeIndex === 'checkbox'"
            v-model="checkbox"
            required=""
        >
            <el-checkbox
                v-for="item in checkArray"
                :key="item.index"
                :label="item.label"
                :value="item.value"
            ></el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        props: [
            // eslint-disable-next-line vue/require-prop-types
            'typeIndex' // 显示类型
        ],
        data () {
            return {
                inputValue: '', // 文本框
                num: null, // 数字框
                checkbox: [], // 多选框组
                checkArray: [
                    {
                        label: '选项一',
                        value: 'one'
                    },
                    {
                        label: '选项二',
                        value: 'two'
                    },
                    {
                        label: '选项三',
                        value: 'three'
                    }
                ], // 多选框组选项
                arrayList: [
                    {
                        name: '输入框',
                        id: 'input'
                    },
                    {
                        name: '计数器',
                        id: 'inputNumber'
                    },
                    {
                        name: '多选框组',
                        id: 'checkbox'
                    },
                    {
                        name: '单选框组',
                        id: 'radio'
                    },
                    {
                        name: '日期选择器',
                        id: 'datePicker'
                    },
                    {
                        name: '时间选择器',
                        id: 'timePicker'
                    },
                    {
                        name: '按钮',
                        id: 'button'
                    },
                    {
                        name: '下拉框',
                        id: 'select'
                    },
                    {
                        name: '滑块',
                        id: 'slider'
                    },
                    {
                        name: '开关',
                        id: 'switch'
                    },
                    {
                        name: '栅格布局',
                        id: 'layout'
                    },
                    {
                        name: '文件上传',
                        id: 'upload'
                    },
                    {
                        name: '级联选择器',
                        id: 'cascader'
                    },
                    {
                        name: '评分',
                        id: 'rate'
                    },
                    {
                        name: '颜色',
                        id: 'color'
                    },
                    {
                        name: '折叠面板',
                        id: 'collapse'
                    },
                    {
                        name: '进度条',
                        id: 'steps'
                    },
                    {
                        name: '静态表格',
                        id: 'table'
                    },
                    {
                        name: '动态表格',
                        id: 'runTable'
                    },
                    {
                        name: '导航菜单',
                        id: 'navMenu'
                    },
                    {
                        name: '标签页',
                        id: 'tabs'
                    }
                ]
            };
        },
        methods: {
            dragStart (e, item) {
                console.log(item);
            }
        }
    };
</script>

<style scoped>
    .topDraggable{
        background: coral;
        width: 150px;
        height: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
        float: left;
        text-align: center;
        cursor: pointer;
    }
</style>
