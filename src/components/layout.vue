<template>
  <div class="layout">
    <div class="layout-header">

    </div>
    <div class="layout-content">
      <div class="layout-content__left">

      </div>
      <div class="layout-content__right">

      </div>
    </div>
  </div>
</template>
<style lang="less">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-header {
    flex-basis: 60px;
    border-bottom: 1px solid #ccc;
  }
  &-content {
    display: flex;
    flex-direction: row;
    flex: 1;
    &__left {
      flex-basis: 240px;
      border-right: 1px solid #ccc;
    }
    &__right {
      flex: 1;
    }
  }
}
</style>