<template>
    <div class="mainBody">
        <div class="leftBody">
            <ul class="asideUl">
                <li>
                    <h1>常用控件</h1>
                    <!-- <topDraggable></topDraggable> -->
                    <draggable
                        :list="myList"
                        :options="{group:{name: 'drag', pull: 'clone', put: false}, sort:false}"
                        :move="getData"
                    >
                        <div
                            v-for="item in myList"
                            :key="item.id"
                            class="dragging"
                        >
                            {{ item.name }}
                        </div>
                    </draggable>
                </li>
                <li>
                    <h1>布局</h1>
                    <draggable
                        :list="myArray"
                        :options="{group:{name: 'drag', pull: 'clone', put: false}, sort:false}"
                        :move="getData"
                    >
                        <div
                            v-for="item in myArray"
                            :key="item.id"
                            class="dragging"
                        >
                            {{ item.name }}
                        </div>
                    </draggable>
                </li>
                <li>
                    <h1>高级控件</h1>
                    <draggable
                        :list="otherArray"
                        :options="{group:{name: 'drag', pull: 'clone', put: false}, sort:false}"
                        :move="getData"
                    >
                        <div
                            v-for="item in otherArray"
                            :key="item.id"
                            class="dragging"
                        >
                            {{ item.name }}
                        </div>
                    </draggable>
                </li>
            </ul>
        </div>
        <div class="centerBody">
            <div class="centerBodyHeader">
                <el-row style="float:right;margin-top:11px;margin-right:2px">
                    <el-button size="mini">
                        清空
                    </el-button>
                    <el-button size="mini">
                        预览
                    </el-button>
                    <el-button size="mini">
                        生成表单
                    </el-button>
                    <el-button size="mini">
                        历史表单
                    </el-button>
                    <el-button size="mini">
                        生成代码
                    </el-button>
                    <el-button size="mini">
                        保存表单
                    </el-button>
                </el-row>
            </div>
            <div class="centerBodyMain">
                <el-form
                    style="width:100%;height:100%;"
                    :model="form"
                    :label-position="formAttributes.labelPosition"
                >
                    <draggable
                        style="width:100%;height:100%;"
                        :list="form.array"
                        group="drag"
                        :move="getData"
                    >
                        <el-form-item
                            v-for="(item,index) in form.array"
                            :key="index"
                            :label="item.name+':'"
                            :class="['formItem', activeItem === index ? 'activeClass' : '']"
                            label-width="180px"
                        >
                            <div @click="handleClick(index)">
                                <mainItem
                                    :type-index="item.id"
                                ></mainItem>
                                <!-- <el-input v-if="item.id === 'input'"></el-input> -->
                            </div>
                            <div style="float:right;margin:0px 5px 0px 0px;">
                                <el-button
                                    size="mini"
                                    @click="handleCopy(item, index)"
                                >
                                    copy
                                </el-button>
                                <el-button
                                    size="mini"
                                    @click="handleDelete(item, index)"
                                >
                                    delete
                                </el-button>
                            </div>
                        </el-form-item>
                    </draggable>
                </el-form>
            </div>
        </div>
        <div class="rightBody">
            <el-tabs
                v-model="activeName"
                :stretch="stretch"
            >
                <el-tab-pane
                    label="字段属性"
                    name="first"
                >
                    <!-- <rightItem v-show="form.array.length !== 0"></rightItem> -->
                </el-tab-pane>
                <el-tab-pane
                    label="表单属性"
                    name="second"
                >
                    <!-- <rightFormItem v-show="form.array.length !== 0"></rightFormItem> -->
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import mainItem from './mainItem'; // 中间画布表单
    // import rightItem from './formItem/rightItem'; // 右侧字段属性
    // import rightFormItem from './formItem/rightFormItem'; // 右侧表单属性
    export default {
        // name: 'mainPage',
        components: {
            draggable,
            mainItem,
            // rightItem,
            // rightFormItem
        },
        data () {
            return {
                activeItem: '',
                stretch: true, // tab标签配置
                form: {
                    array: [] // 中间画图区域
                },
                formAttributes: { // 中间表单各种配置
                    labelPosition: 'right' // 标题位置
                },
                activeName: 'first', // 右边属性配置切换
                myList: [
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
                    }
                ],
                myArray: [
                    {
                        name: '栅格布局',
                        id: 'layout'
                    }
                ],
                otherArray: [
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
        mounted () {
            // window.addEventListener('click', this.clickOther);
        },
        beforeDestroy () {
            // window.removeEventListener();
        },
        methods: {
            getData (e) {
                console.log(e);
                // this.type = e.relatedContext.list[0].id;
            },
            handleCopy (item, index) {
                console.log(item);
                this.form.array.splice(index, 0, item);
            },
            handleDelete (item, index) {
                this.form.array.splice(index, 1);
            },
            changeColor (e) {
                console.log(e);
            },
            handleClick (index) {
                this.activeItem = index
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 整个页面 */
.mainBody{
   /* background: #57a8a6; */
   width: 100%;
   height: 100vh;
   margin: 0px;
   padding: 0px;
}
/* 左侧控件 */
.leftBody{
    /* background: #76659a; */
    border: #ddd 1px solid;
    width: 17%;
    height: calc(100vh - 40px);
    margin: 20px 20px 20px 20px;
    float: left;
    overflow: auto;
}
/* 控件列表样式 */
.asideUl{
    /* background: #57a8a6; */
    list-style: none;
    padding-left: 10px;
    padding-top: 20px;
    /* float: left; */
    width: 100%;
}
.asideUl>li{
    width: 100%;
    /* background: #d6f20d; */
    margin-bottom: 10px;
    display: block;
    float: left;
}
.asideUl h1{
    margin-bottom: 8px;
}
.asideBody{
    width: 100%;
    list-style: none;
}
/* .asideBody>li */
.dragging{
    width: 110px;
    height: 37px;
    margin-left: 20px;
    margin-bottom: 10px;
    /* border: #ccc 1px solid; */
    border-radius: 7px;
    background: #eee;
    display: block;
    float: left;
    cursor: pointer;
    /* 字体 */
    padding-top: 2px;
    color: #444;
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
    /* padding-top: 7px; */
}

/* 中间画布 */
.centerBody{
    /* background: #76659a; */
    width: 52%;
    /* height: 100vh;
    margin-right: 20px; */
    height: calc(100vh - 40px);
    margin: 20px 15px;
    float: left;
}
/* 中间画布头部 */
.centerBodyHeader{
    /* background: #56a996; */
    border: #ddd 1px solid;
    height: 50px;
    width: 100%;
    margin-bottom: 15px;
}
/* 中间画布主体 */
.centerBodyMain{
    /* background: #9ebd42; */
    border: #bbb 1px dashed;
    height: 90%;
    width: 100%;
    padding: 10px;
    overflow: auto;
}
/* 中间表单项各种配置 */
.formItem{
    border: #ccc 1px dashed;
    width: 100%;
    background: ghostwhite;
    /* height: 100px; */
    margin-bottom: 10px;
    padding: 13px 5px 0px 15px;
}

/* 右侧属性 */
.rightBody{
    /* background: #76659a; */
    border: #ccc 1px solid;
    width: 24%;
    padding-top: 20px;
    /* height: 100vh; */
    height: calc(100vh - 40px);
    margin: 20px 20px 20px 20px;
    float: left;
    overflow: auto;
}
.activeClass {
    border: red 1px solid;
}
</style>
