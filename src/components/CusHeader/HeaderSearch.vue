<script setup>

</script>

<template>
  <div class="docsearch">
    <div class="search-button">
      <div class="text">ctrl + K</div>
      <div class="icon">
        <div class="icon-text">
          搜索
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.docsearch {
  display: flex;
  .search-button {
    display: flex;
    .text {
      border: 0.5px solid var(--vt-c-divider-dark-1);
      border-radius: 5px;
      width: 3rem;
      height: 2rem;
      text-align: center;
      font-size: 12px;
      margin-right: 0.5rem;
    }
    &:hover {
      cursor: pointer;
      .text {
        color: hsla(160, 100%, 37%, 1);
        transition: all ease-in-out 1s;
        border: 1px solid hsla(160, 100%, 37%, 1);
      }
      .icon-text {
        transition: all ease-in-out 0.5s;
        color: hsla(160, 100%, 37%, 1);
        line-height: 2rem;
      }
    }
  }
}
</style>