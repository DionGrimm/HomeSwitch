<template>
  <div class="mdl-layout__content whiteBg">
    <div id="wrap">
        <ul class="mdl-list">
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              <span>Henk</span>
              <span>Gekoppeld</span>
            </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              <span>Roel</span>
              <span>Gekoppeld</span>
            </span>
          </li>
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              <span>Sunny</span>
              <span>Gekoppeld</span>
            </span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .mdl-layout__content {
    background-color: white;
  }

    body {
    background-color: white !important;
  }

  .mdl-list {
    margin: 0;
    padding: 0;
  }

  .mdl-list__item-primary-content {
    display: flex;
  }

  .mdl-list__item-primary-content > span:first-child {
    width: 115px;
  }

  .mdl-list__item-primary-content > span:nth-child(1) {
    flex-grow: 1;
    color: #777;
  }

  .mdl-switch {
    padding-right: 8px;
    width: auto;
  }
</style>