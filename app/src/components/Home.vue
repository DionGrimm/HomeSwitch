<template>
  <div class="mdl-layout__content greenBg" id="wrap">
    <vue-particles
    color="#f8fdf8"
    :particleOpacity="0.4"
    :particlesNumber="250"
    shapeType="circle"
    :particleSize="4"
    linesColor="#ffffff"
    :linesWidth="0"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="50"
    :moveSpeed="1.6"
    :hoverEffect="false"
    hoverMode="repulse"
    :clickEffect="false"
    clickMode="repulse"
    >
    </vue-particles>
    <div id="knopWrap">
      <img src="../assets/knop.png" id="knop">
      <p id="knopText" class="text"></p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #wrap {
    position: relative !important;
  }
  #knopWrap {
    text-align: center;
    position: relative;
    z-index: 100;
  }

  #knop {
    width: 60vw;
    height: 60vw;
    box-sizing: border-box;
    margin-top: 17vh;
    display: inline-block;
    border-radius: 100%;
    padding: 7%;
    background: white;
    border: .6vh solid #ededed;
    box-shadow: 0 .5vh .8vh 0 rgba(0,0,0,.16);
	  transition: background .4s ease-in-out, border .4s ease-in-out;
  }

  #knopText {
	max-width: 70%;
	margin: auto;
  }

  .text {
    margin-top: 6vh;
  }

  #particles-js {
    width: 100%;
    height: 100%;
    z-index: -100;
    position: fixed;
  }
</style>
