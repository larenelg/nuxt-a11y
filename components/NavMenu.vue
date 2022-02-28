<template>
  <nav
    id="site-navigation"
    class="site-navigation"
    aria-label="Clickable Menu Demonstration"
  >
    <!-- for use with <use> -->
    <svg xmlns="http://www.w3.org/2000/svg" hidden>
      <symbol id="arrow" viewbox="0 0 16 16">
        <polyline
          points="4 6, 8 10, 12 6"
          stroke="#000"
          stroke-width="2"
          fill="transparent"
          stroke-linecap="round"
        />
      </symbol>
    </svg>

    <ul class="main-menu clicky-menu no-js">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">
          Services
          <svg aria-hidden="true" width="16" height="16">
            <use xlink:href="#arrow" />
          </svg>
        </a>
        <ul>
          <li><a href="#">Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Content Strategy</a></li>
          <li><a href="#">Training</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          Portfolio
          <svg aria-hidden="true" width="16" height="16">
            <use xlink:href="#arrow" />
          </svg>
        </a>
        <ul>
          <li><a href="#">Nonprofits</a></li>
          <li><a href="#">Higher Education</a></li>
          <li><a href="#">Associations</a></li>
          <li><a href="#">Consultants</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          About
          <svg aria-hidden="true" width="16" height="16">
            <use xlink:href="#arrow" />
          </svg>
        </a>
        <ul>
          <li><a href="#">Mission</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/**
 * Initial state, hidden off screen
 */
.clicky-menu ul {
  position: absolute;
  top: 100%;
  left: 0;
  visibility: hidden; /*[1]*/
}

/**
 * No JS fallback
 *
 * Triggers menus on hover rather than click. Supports keyboard navigation in modern browsers.
 */
.clicky-menu.no-js li:hover > ul {
  visibility: visible;
}
.clicky-menu.no-js li:focus-within > ul {
  /*[2]*/
  visibility: visible;
}

/**
 * Open/Close Menu Behavior with JS
 */
.clicky-menu ul[aria-hidden='false'] {
  visibility: visible;
}

/* Prevent offscreen-submenus */
.clicky-menu .sub-menu--right {
  left: auto !important;
  right: 0 !important;
}

/**
 * Footnotes
 *
 * [1] Using `visibility` instead of `display` allows for easier transitions and animation of submenus
 * [2] Must be a separate ruleset so that hover works in non-modern browsers
 */

/* Hidden SVG used for down arrows */
svg[hidden] {
  display: none;
  position: absolute;
}

.site-navigation {
  width: 86%;
  max-width: 782px;
  margin: 100px auto 300px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #eee;
  border-radius: 4px;
}

.clicky-menu {
  justify-content: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (min-width: 540px) {
  .clicky-menu {
    display: flex;
  }
}

/* General Link & Button Styles */
.clicky-menu a,
.clicky-menu button {
  margin: 0.25em;
  padding: 1em;
  background: transparent;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  border-radius: 3px;
}

.clicky-menu a:hover,
.clicky-menu button:hover {
  background: #fff;
}

.clicky-menu a:focus,
.clicky-menu button:focus {
  outline: 0.125em dotted purple;
  outline-offset: -0.125em;
}

/* Top Level Items */
.clicky-menu > li {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
}

.clicky-menu > li > a,
.clicky-menu > li > button {
  flex: 1 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 0;
  font-size: inherit;
  line-height: 1.5;
  cursor: pointer;
}
@media (min-width: 540px) {
  .clicky-menu > li > a,
  .clicky-menu > li > button {
    justify-content: center;
  }
}

/* Icon */
.clicky-menu svg {
  width: 1em;
  height: 1em;
  margin-left: 0.5em;
}

.clicky-menu [aria-expanded='true'] svg {
  transform: scaleY(-1);
}

/* Submenu Styles */
.clicky-menu ul {
  min-width: 100%;
  width: 12em;
  margin-top: 0.25em;
  padding: 0;
  list-style: none;
  background-color: #eee;
  border-radius: 3px;
}
@media (min-width: 540px) {
  .clicky-menu {
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
  }
}

/* Responsive Submenu Behavior */
.clicky-menu ul[aria-hidden='false'] {
  position: static;
  width: 100%;
  flex: 0 0 auto;
}

@media (min-width: 540px) {
  .clicky-menu ul[aria-hidden='false'] {
    position: absolute;
    width: auto;
  }
}

/* Submenu Links */
.clicky-menu ul a {
  display: block;
  padding-top: 0.375em;
  padding-bottom: 0.375em;
}
@media (min-width: 540px) {
  .clicky-menu ul a {
    padding: 0.375em 1em;
    white-space: nowrap;
  }
}

.github {
  text-align: center;
  a {
    color: #fff;
    opacity: 0.6;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
}
</style>