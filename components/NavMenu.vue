<template>
  <div>
    <div class="hamburger-nav">
      <div
        role="button"
        tabindex="0"
        aria-label="Menu"
        :aria-expanded="{ true: isOpen }"
        aria-haspopup="true"
        aria-controls="site-nav-mobile"
        class="hamburger-wrapper"
        @click="toggleMenu()"
        @keydown="(e) => handleKeyDown(e)"
      >
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <span class="sr-only"> Menu</span>
      </div>
    </div>
    <div id="site-nav-mobile" role="menu" :class="{ showing: isOpen }">
      <div class="top-nav-wrap">
        <div class="location-select">
          <div class="ls-inner">
            <div class="location-option">
              <a>
                <div class="location-button">
                  <img
                    src="https://catalyst.concentrix.com/wp-content/uploads/2018/07/global.png"
                    class="lazyloaded"
                    data-ll-status="loaded"
                  /><noscript
                    ><img
                      src="https://catalyst.concentrix.com/wp-content/uploads/2018/07/global.png"
                  /></noscript>
                  <i class="fa fa-caret-right"></i>
                </div>
              </a>
            </div>
            <div class="location-option">
              <a href="https://ar.catalyst.concentrix.com/">
                <div class="location-button">
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                    data-lazy-src="https://catalyst.concentrix.com/wp-content/uploads/2018/07/argentina.png"
                  /><noscript
                    ><img
                      src="https://catalyst.concentrix.com/wp-content/uploads/2018/07/argentina.png" /></noscript
                  ><i class="fa fa-caret-right"></i>
                </div>
              </a>
            </div>
            <div class="location-option">
              <a href="https://catalyst.concentrix.com/jp/">
                <div class="location-button">
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                    data-lazy-src="https://catalyst.concentrix.com/wp-content/uploads/2022/01/japan-1.png"
                  /><noscript
                    ><img
                      src="https://catalyst.concentrix.com/wp-content/uploads/2022/01/japan-1.png" /></noscript
                  ><i class="fa fa-caret-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="search-form top-nav">
          <a class="search-icon toggle-search"
            ><i class="fa fa-search"></i> SEARCH</a
          >
          <div class="show-search">
            <form
              role="search"
              method="get"
              class="searchform"
              action="https://catalyst.concentrix.com/"
              __bizdiag="115"
              __biza="WJ__"
            >
              <label for="s" class="screen-reader-text"> Search </label>
              <input
                type="text"
                value=""
                name="s"
                id="s"
                placeholder="SEARCH"
              />
              <button type="submit" id="searchsubmit">
                <i class="fa fa-caret-right"></i>
                <span class="screen-reader-text"> Submit </span>
              </button>
            </form>
          </div>
        </div>
        <div class="upper-nav-links top-nav">
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <ul class="mobile-nav-links">
        <li class="has-mobile-subnav">
          <a href="">Capabilities</a>
          <!-- OPTIONAL SUBNAV -->

          <div class="mobile-sublinks">
            <div class="mobile-sublinks-inner">
              <div class="sub-nav-group">
                <ul class="sub-nav-group-links">
                  <li>
                    <a href="/strategy-and-design">Strategy &amp; Design</a>
                  </li>
                  <li>
                    <a href="/experience-platforms">eXperience Platforms</a>
                  </li>
                  <li>
                    <a href="/digital-engineering">Digital Engineering</a>
                  </li>
                  <li>
                    <a href="/cloud-engineering">Cloud Engineering</a>
                  </li>
                  <li>
                    <a href="/data-and-analytics">Data &amp; Analytics</a>
                  </li>
                  <li>
                    <a href="/automation-and-operations"
                      >Automation &amp; Operations</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mobile-subnav">
          <a href="">Solutions</a>
          <!-- OPTIONAL SUBNAV -->

          <div class="mobile-sublinks">
            <div class="mobile-sublinks-inner">
              <div class="sub-nav-group">
                <ul class="sub-nav-group-links">
                  <li>
                    <a href="/loyalty-connected-membership"
                      >Loyalty &amp; Connected Membership</a
                    >
                  </li>
                  <li>
                    <a href="/CX-transformation">CX Transformation</a>
                  </li>
                  <li>
                    <a href="/enterprise-modernization"
                      >Enterprise Modernization</a
                    >
                  </li>
                  <li>
                    <a href="/API-management-security"
                      >API Management &amp; Security</a
                    >
                  </li>
                  <li>
                    <a href="/digital-selling">Digital Selling</a>
                  </li>
                  <li>
                    <a href="/intelligent-automation">Intelligent Automation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mobile-subnav">
          <a href="">Outcomes</a>
          <!-- OPTIONAL SUBNAV -->

          <div class="mobile-sublinks">
            <div class="mobile-sublinks-inner">
              <div class="sub-nav-group">
                <ul class="sub-nav-group-links">
                  <li>
                    <a href="/customer-acquisition">Customer Acquisition</a>
                  </li>
                  <li>
                    <a href="/customer-engagement">Customer Engagement</a>
                  </li>
                  <li>
                    <a href="/customer-retention">Customer Retention</a>
                  </li>
                  <li>
                    <a href="/speed-to-market">Speed to Market</a>
                  </li>
                  <li>
                    <a href="/business-optimization">Business Optimization</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mobile-subnav">
          <a href="#">Industries</a>
          <!-- OPTIONAL SUBNAV -->

          <div class="mobile-sublinks">
            <div class="mobile-sublinks-inner">
              <div class="sub-nav-group">
                <ul class="sub-nav-group-links">
                  <li>
                    <a href="/banking-financial-services-and-insurance"
                      >Banking, Financial Services, &amp; Insurance</a
                    >
                  </li>
                  <li>
                    <a href="/healthcare">Healthcare &amp; Life Sciences</a>
                  </li>
                  <li>
                    <a href="/retail-and-consumer">Retail &amp; Consumer</a>
                  </li>
                  <li>
                    <a href="/technology-and-software"
                      >Technology &amp; Software</a
                    >
                  </li>
                  <li>
                    <a href="/telecom">Telecom &amp; Media</a>
                  </li>
                  <li>
                    <a href="/transportation-and-logistics"
                      >Transportation &amp; Logistics</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mobile-subnav">
          <a href="#">Company</a>
          <!-- OPTIONAL SUBNAV -->

          <div class="mobile-sublinks">
            <div class="mobile-sublinks-inner">
              <div class="sub-nav-group">
                <ul class="sub-nav-group-links">
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="/news-and-in-the-press/"
                      >News &amp; In the Press</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mobile-subnav">
          <a href="">Engage</a>
          <!-- OPTIONAL SUBNAV -->

          <div class="mobile-sublinks">
            <div class="mobile-sublinks-inner">
              <div class="sub-nav-group">
                <ul class="sub-nav-group-links">
                  <li>
                    <a href="/insights/">Insights</a>
                  </li>
                  <li>
                    <a href="/Resources">Resources</a>
                  </li>
                  <li>
                    <a href="/Work">Work</a>
                  </li>
                  <li>
                    <a href="/events/list">Events</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="/partnerships">Partnerships</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton
export default {
  data () {
    return {
      isOpen: true,
    }
  },
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen;
    },
    handleKeyDown (event) {
      if (event.code === "Space" || event.code === "Enter") {
        this.toggleMenu()
      }
    }
    // also need to handle escape while inside the menu!
  }
}
</script>


<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.hamburger-nav {
  display: block;
}

.hamburger-nav {
  cursor: pointer;
  margin-left: auto;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 99999999;
}

.hamburger-nav:hover .hamburger-wrapper .bar {
  background-color: #a5b2b6;
}

.hamburger-nav .hamburger-wrapper {
  display: block;
  height: 30px;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  width: 40px;
}

.hamburger-nav .hamburger-wrapper .bar {
  background-color: #036;
  display: block;
  height: 2px;
  margin-bottom: 10px;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 40px;
}

.hamburger-nav.showing {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}

.hamburger-nav.showing .hamburger-wrapper {
  -webkit-transform: scale(0.7) translateY(10px);
  transform: scale(0.7) translateY(10px);
}

.hamburger-nav.showing .hamburger-wrapper .bar1 {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger-nav.showing .hamburger-wrapper .bar2 {
  -webkit-transform: rotate(-45deg) translateX(8px) translateY(-9px);
  transform: rotate(-45deg) translateX(8px) translateY(-9px);
}

.hamburger-nav.showing .hamburger-wrapper .bar3 {
  opacity: 0;
  -webkit-transform: rotate(-45deg) translateX(1pc) translateY(-20px);
  transform: rotate(-45deg) translateX(1pc) translateY(-20px);
}

#site-nav-mobile {
  background-color: #fff;
  display: none;
  height: 100vh;
  max-width: 500px;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  padding-top: 50px;
  position: fixed;
  right: -550px;
  top: 0;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  width: 100%;
  z-index: 9999999;
}

#site-nav-mobile {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#site-nav-mobile.showing {
  right: 0;
}

#site-nav-mobile .top-nav-wrap {
  border-bottom: 1px solid #d9dee2;
  display: none;
  padding: 1rem;
}

#site-nav-mobile .top-nav-wrap {
  display: block;
}

#site-nav-mobile .top-nav-wrap .location-select {
  display: block;
  height: 25px;
  left: 2rem;
  margin-bottom: 1rem;
  overflow-y: hidden;
  position: absolute;
  top: 1.5rem;
  width: 45px;
}

#site-nav-mobile .top-nav-wrap .location-select .ls-inner {
  left: 0;
  position: relative;
  top: 0;
}

#site-nav-mobile .top-nav-wrap .location-select.open,
#site-nav-mobile .top-nav-wrap .location-select:hover {
  overflow-y: visible;
}

#site-nav-mobile .top-nav-wrap .location-select .location-option {
  background-color: #e1e6e8;
  border: 2px solid #d9dee2;
  border-radius: 2px;
  display: block;
  height: 25px;
  width: 45px;
}

#site-nav-mobile .top-nav-wrap .location-select .location-option a {
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
}

#site-nav-mobile
  .top-nav-wrap
  .location-select
  .location-option
  .location-button {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#site-nav-mobile
  .top-nav-wrap
  .location-select
  .location-option
  .location-button
  i {
  color: #a2afb8;
}

#site-nav-mobile .top-nav-wrap .location-select .location-option img {
  display: inline-block;
  height: auto;
  max-height: 20px;
  max-width: 100%;
  width: auto;
}

#site-nav-mobile .top-nav-wrap .upper-nav-links {
  display: block;
  margin-top: 1rem;
  text-align: left;
  width: 100%;
}

#site-nav-mobile .top-nav-wrap .show-search {
  display: block;
  height: 0;
  overflow: hidden;
  padding-left: 1rem;
}

#site-nav-mobile .top-nav-wrap .show-search.showing {
  height: auto;
  margin-top: 0.5rem;
  width: 100%;
}

#site-nav-mobile .top-nav-wrap .searchform {
  position: relative;
  width: 100%;
}

#site-nav-mobile .top-nav-wrap .search-form {
  display: block;
  text-align: left;
  width: 100%;
}

#site-nav-mobile .top-nav-wrap .search-form input[type='text'] {
  border-color: #d6dce5;
  border-style: solid;
  border-width: 2px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
}

#site-nav-mobile .top-nav-wrap .search-form button[type='submit'] {
  background-color: #fff;
  border-color: #d6dce5;
  border-style: solid;
  border-width: 2px;
  color: #036;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  height: 100%;
  letter-spacing: 1px;
  margin-bottom: 0;
  padding: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 39px;
}

#site-nav-mobile ul.mobile-nav-links {
  margin-left: 0;
  padding: 2rem 0;
}

#site-nav-mobile ul.mobile-nav-links li {
  border-bottom: 1px solid #d9dee2;
  height: 50px;
  line-height: 50px;
  list-style-type: none;
  padding-left: 2rem;
  padding-right: 2rem;
}

#site-nav-mobile ul.mobile-nav-links li a {
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
}

#site-nav-mobile ul.mobile-nav-links li.has-mobile-subnav {
  line-height: 50px;
  max-height: 50px;
  overflow-y: hidden;
  position: relative;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
}

#site-nav-mobile ul.mobile-nav-links li.has-mobile-subnav:after {
  color: #036;
  content: '\f107';
  display: block;
  font-family: FontAwesome, sans-serif;
  font-size: 1.25rem;
  position: absolute;
  right: 20px;
  top: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

#site-nav-mobile ul.mobile-nav-links li.has-mobile-subnav.showing {
  height: auto;
  max-height: 3000px;
}

#site-nav-mobile ul.mobile-nav-links li.has-mobile-subnav.showing:after {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

#site-nav-mobile
  ul.mobile-nav-links
  li.has-mobile-subnav
  .mobile-sublinks
  .mobile-sublinks-inner {
  background-color: #f3f4f6;
  -webkit-box-shadow: -200px 0 0 0 #f3f4f6, 200px 0 0 0 #f3f4f6;
  box-shadow: -200px 0 0 0 #f3f4f6, 200px 0 0 0 #f3f4f6;
  padding: 1rem 0;
}

#site-nav-mobile
  ul.mobile-nav-links
  li.has-mobile-subnav
  .mobile-sublinks
  .mobile-sublinks-inner
  .sub-nav-group
  .sub-nav-group-label {
  color: #a5b2b6;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 1rem;
}

#site-nav-mobile
  ul.mobile-nav-links
  li.has-mobile-subnav
  .mobile-sublinks
  .mobile-sublinks-inner
  .sub-nav-group
  .sub-nav-group-links {
  margin-left: 0;
}

#site-nav-mobile
  ul.mobile-nav-links
  li.has-mobile-subnav
  .mobile-sublinks
  .mobile-sublinks-inner
  .sub-nav-group
  .sub-nav-group-links
  li {
  border-bottom: none;
  height: auto;
  line-height: 1.5;
}

#site-nav-mobile
  ul.mobile-nav-links
  li.has-mobile-subnav
  .mobile-sublinks
  .mobile-sublinks-inner
  .sub-nav-group
  .sub-nav-group-links
  li
  a {
  display: block;
  padding: 0.9375rem 0;
  size: 1.125rem;
  text-transform: none;
}
</style>