<template>
  <div class="home">
    <el-row style="height: 100%">
      <el-col :span="4" style="height: 100%">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%"
        >
          <el-menu-item index="1">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">订单</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="list_col">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input v-model="merchant_code" placeholder="请输入商户代码"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="merchant_name" placeholder="请输入商户名称"></el-input>
          </el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button class="search" @click="search">搜索</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { showLoading, hideLoading } from '../plugins/loading.js'
export default {
  data () {
    return {
      value1: '',
      merchant_code: '',
      merchant_name: ''
    }
  },
  methods: {
    search () {
    //   if (this.merchant_code === '') {
    //     this.$message.error('请输入商户代码')
    //     return
    //   }
    //   if (this.merchant_name === '') {
    //     this.$message.error('请输入商户名称')
    //     return
    //   }
    //   var beginDate = this.value1[0]
    //   if (beginDate === 'undefined') {
    //     this.$message.error('请选择起始时间')
    //     return
      showLoading()
      setTimeout(function () {
        hideLoading()
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;

    .list_col {
        padding: 20px;
    }
}

.search {
    margin-top: 10px;
    background-color: #545c64;
    border: 1px solid #545c64;
    color: #fff;
}

.search:visited {
    background-color: #545c64;
    border: 1px solid #545c64;
    color: #fff;
}

.search:active {
    background-color: #545c64;
    border: 1px solid #545c64;
    color: #fff;
}

.search:hover {
    background-color: #545c64;
    border: 1px solid #545c64;
    color: #fff;
    box-shadow: 0 0 3px 3px #aaa;
}

.search:focus {
    background-color: #545c64;
    border: 1px solid #545c64;
    color: #fff;
}

.loadingClass {
    color: aquamarine;
}
</style>
