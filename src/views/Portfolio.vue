<template>

  <div class="portfolio-container">
    <h2 ref="portfolio">Portfolio</h2>

    <div id="component-spinner" v-if="isLoading">
      <div></div>
    </div>

    <div v-show="!isLoading" class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">

      <div class="col" v-for="(portfolio, index) in getPortfolio" :key="index">
        <div class="portfolio-job"
             @click="toggle(portfolio)"
             :style="{backgroundImage: 'url(' + portfolio.image_url + ')'}"
        >
          <div class="grayscale">
            <div class="magnify-lens">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="white"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
            </div>
            <div class="details">
              <p>{{portfolio.technology}}</p>
              <p>{{portfolio.customer}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>


    <transition name="fade" mode="out-in">
      <div v-if="modalOpen" class="portfolio-modal" @click.self="close()">
        <div class="portfolio-body">
          <a class="btn btn-info portfolio-link" :href="link" target="_blank">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-link" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
              <path
                  d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
            </svg>
          </a>
          <div class="portfolio-image">
            <img :src="image"/>

          </div>
        </div>
      </div>
    </transition>


  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Portfolio",
  data() {
    return {
      modalOpen: false,
      isLoading: true,
      image: "",
      link: "",
    }
  },
  computed: {
    ...mapGetters(['getPortfolio'])
  },
  methods: {
    ...mapActions(['fetchProfilePortfolio']),

    toggle: function (portfolio) {
      this.image = portfolio.image_url
      this.link = portfolio.website_url
      this.modalOpen = !this.modalOpen;
    },
    close: function () {
      this.modalOpen = false;
    },
    scrollTo: function () {
      const headerOffSet = 75;
      const elemPosition = this.$refs.portfolio.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    },
    loadImages: function() {
      let imageLoaded = 0;
      for (const portfolio of this.getPortfolio) {
        const img = new Image();
        img.src = portfolio.image_url
        img.onload = () => {
          imageLoaded++;
          if (imageLoaded === this.getPortfolio.length) {
            this.isLoading = false;
          }
        }
      }
    },
    fadeInContent: function () {
      this.$el.querySelectorAll('.col').forEach((elem, index) => {
        // index = index > 3 ? index % 3 : index;
        // Create the Scene and trigger when visible
        var scene = this.$scrollmagic.scene({
          triggerElement: elem,
          triggerHook: .8,
          reverse: false
        }).setTween(elem, .4, {opacity: 1, stagger: .2, delay: '.' + index});

        this.$scrollmagic.addScene(scene);

      })
    },
  },
  async created() {
    await this.fetchProfilePortfolio()

    this.scrollTo()

    this.loadImages()

  },
  mounted() {

    // this.fetchProfilePortfolio()
    //
    // this.loadImages()

    // this.scrollTo()
    //
    // this.fadeInContent()
  },
  watch: {
    isLoading: function(newValue, oldValue) {
      if (newValue !== oldValue) {
        setTimeout(() => {
          this.scrollTo()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#component-spinner {
  @include spinner();
}

.portfolio-container {
  width: 60%;
  margin: 50px auto;
  background-color: white;
  padding: 20px 50px 50px;

  @media screen and (max-width: 520px) {
    width: 100%;
  }
}

.portfolio-job {
  transition: all .2s linear;
  cursor: pointer;
  //width: 300px;
  height: 300px;
  background-size: 100%;
  background-position-x: center;

  .magnify-lens {
    position: relative;
    top: 50%;
    visibility: hidden;
    opacity: 0;
    transition: all .2s linear;
  }

  &:hover .grayscale {
    background-color: #2c3e50d9;
    transition: background-color .2s linear;
  }

  &:hover .details {
    visibility: visible;
    opacity: 1;
    transition: visibility, opacity .2s linear;
    transition-delay: .1s;
  }

  &:hover {
    background-size: 110% !important;
    transition: background-size .2s linear;
  }

  &:hover .magnify-lens {
    visibility: visible;
    opacity: 1;
    transition: all .2s linear;
    transition-delay: .1s;
  }

  .grayscale {
    width: inherit;
    height: inherit;
    position: relative;
    transition: background-color .2s linear;
  }

  .details {
    transition: all .2s linear;
    visibility: hidden;
    opacity: 0;
    padding: 10px;
    width: 100%;
    text-align: center;
    color: white;
    position: absolute;
    bottom: 0;

    p {
      font-size: 14px;
      margin-bottom: 0;

      &:first-child {
        border-bottom: 2px solid white;
        padding-bottom: 3px;
      }
    }
  }
}

.col {
  padding-bottom: 50px;
  opacity: 1;
}

h6 {
  margin-bottom: 0;
}

.portfolio-modal {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #aaaaaaab;

  .portfolio-body {
    position: relative;
    width: 700px;
    max-height: 700px;
    margin: 5em auto 0;

    @media screen and (max-width: 700px) {
      width: 100%;
      max-height: 500px;
    }

    .portfolio-link {
      bottom: 10px;
      left: 10px;
      position: absolute;
      background-color: #2c3e50d9;
      border-color: #2c3e50d9;
    }

    .portfolio-image {
      overflow-y: scroll;
      overflow-x: hidden;
      width: inherit;
      height: inherit;
      max-height: inherit;

      img {
        width: inherit;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>