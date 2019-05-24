<template>
<div class="mdl-layout__content greenBg">
    <div id="wrap">
        <p class="text">Het totale gebruik van vandaag</p>
        <h3 class="number">14kwH</h3>
        <p class="text">Uw besparing vandaag op basis van uw basisverbruik</p>
        <h3 class="number">5%</h3>
        <img src="../assets/verbruik.svg" id="graph">
        <p class="text">Kies een dag</p>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
  #wrap {
    text-align: center;
    margin-top: 5vh;
  }

  .number {
    color: white;
    margin-top: 0;
  }

  .text {
      margin-bottom: 0;
  }
</style>