<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title" id="title">Home Switch</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Home Switch</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu" v-on:click.native="title(0)">Home Switch</router-link>
        <router-link class="mdl-navigation__link" to="/verbruik" @click.native="hideMenu" v-on:click.native="title(1)">Verbruik</router-link>
        <router-link class="mdl-navigation__link" to="/bewoners" @click.native="hideMenu" v-on:click.native="title(2)">Bewoners</router-link>
        <router-link class="mdl-navigation__link" to="/huis" @click.native="hideMenu" v-on:click.native="title(3)">Mijn huis</router-link>
        <router-link class="mdl-navigation__link" to="/over" @click.native="hideMenu" v-on:click.native="title(4)">Over de Home Switch</router-link>
        <router-link class="mdl-navigation__link" to="/instellingen" @click.native="hideMenu" v-on:click.native="title(5)">Instellingen</router-link>
        <router-link class="mdl-navigation__link" to="/help" @click.native="hideMenu" v-on:click.native="title(6)">Help</router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  require('material-design-lite')
  export default {
    name: 'app',
    methods: {
      hideMenu: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      },
      title: function (number) {
        let string = ["Home Switch", "Verbruik", "Bewoners", "Mijn Huis", "Over", "Instellingen", "Help"]
        document.getElementById("title").innerHTML = string[number]
      }
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

  @font-face {
    font-family: "Cloud";
    src: url(../static/Cloud-Soft-Light.otf);
  }

  .mdl-layout__drawer-button {
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  body, body .mdl-layout__header {
    background-color: #89F0AA;
	  transition: background .4s ease-in-out;
  }

  body, body .mdl-layout__content {
    background-color: #89F0AA;
	  transition: background .4s ease-in-out;
  }

  .mdl-layout__drawer-button:focus {
	  outline: none;
  }

  body.off, body.off .mdl-layout__header {
	  background-color: #555;
  }

  body.off, body.off .mdl-layout__content {
	  background-color: #555;
  }

  body.off #knopWrap img {
	  background: #656565;
	  border: .6vh solid #545454;
  }

  .text {
    color: white;
    font-size: 18px;
    font-family: Cloud;
  }

  .cloud {
    font-family: Cloud;
  }

  .whiteBg {
    background-color: white !important;
  }

  .greenBG {
    background-color: #89F0AA !important;
  }
</style>
