<template>
  <div>
    <div class="menu_button">
      <button id="menubutton1" aria-haspopup="true" aria-controls="menu1">
        Actions
      </button>
      <ul id="menu1" role="menu" aria-labelledby="menubutton1">
        <li role="menuitem">Action 1</li>
        <li role="menuitem">Action 2</li>
        <li role="menuitem">Action 3</li>
        <li role="menuitem">Action 4</li>
      </ul>
    </div>
    <p>
      <label>
        Last Action:
        <input id="action_output" type="text" value="" />
      </label>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'

/* VUE COMPONENT */

export default Vue.extend({
  name: 'ActionMenu',
  mounted() {},
})
</script>

<style>
.menu_button {
  position: relative;
}

.menu_button button {
  font-size: 110%;
}

ul[role='menu'] {
  margin: 0;
  padding: 0;
  position: absolute;
  font-size: 110%;
  list-style: none;
  background-color: #eee;
  display: none;
}

ul[role='menu'] li[role='menuitem'] {
  display: block;
  padding: 0.25em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background-color: #eee;
  width: 4em;
}

/* focus and hover styling */

button:focus,
button:hover,
input:focus,
input:hover {
  outline: 2px solid black;
}

input:focus,
input:hover {
  background-color: #eee;
}

ul[role='menu'] li[role='menuitem']:focus,
ul[role='menu'] li[role='menuitem'].focus,
ul[role='menu'] li[role='menuitem']:hover {
  background-color: black;
  color: white;
}
</style>