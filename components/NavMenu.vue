<template>
  <div>
    <nav id="mySidenav" class="sidenav" aria-label="primary">
      <button
        ref="firstElement"
        id="mySidenavClose"
        class="closebtn"
        aria-label="close navigation"
        @click="closeNav"
      >
        &times;
      </button>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </nav>

    <button
      ref="menuButton"
      aria-label="menu button"
      @click="openNav"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-controls="mySidenav"
    >
      ☰
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

// from Inaccessible https://www.w3schools.com/howto/howto_js_sidenav.asp
// to accessible https://pauljadam.com/demos/hamburger-menu.html

export default Vue.extend({
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    /* Set the width of the side navigation to 250px */
    openNav () {
      document.getElementById("mySidenav").style.visibility = "visible";
      document.getElementById("mySidenav").style.width = "250px";
      setTimeout(() => {
        this.$refs.firstElement.focus();
      }, 200)

      this.isOpen = true;
    },
    /* Set the width of the side navigation to 0 */
    closeNav () {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.visibility = "hidden";
      setTimeout(() => {
        this.$refs.menuButton.focus();
      }, 200)

      this.isOpen = false;
    }
  }
})
</script>

<style scoped>
button {
  background: black;
  height: 48px;
  width: 48px;
  color: white;
  border: unset;
  font-size: 2em;
}

button:focus {
  outline: 3px solid orangered;
  outline-offset: 1px;
}

/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  visibility: hidden;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>