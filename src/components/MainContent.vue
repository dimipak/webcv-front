<template>
  <div class="profile-container">
    <div id="cover" :style="{backgroundImage: 'url(' + getInfo.cover_image + ')'}"></div>
    <div class="profile-pic-container">
      <div id="profile" :style="{backgroundImage: 'url(' + getInfo.profile_image + ')'}"></div>
      <h2>{{getInfo.first_name}} {{getInfo.last_name}}</h2>
      <p>{{getInfo.first_quote}}</p>
      <p><strong>{{getInfo.second_quote}}</strong></p>
<!--      <p><strong>#webapps</strong> <strong>#backend</strong> <strong>#restAPI</strong> <strong>#IoT</strong></p>-->

      <div class="icon-container">
        <ul class="nav icon-nav">

          <li class="nav-item social-icons">
            <a href="https://www.github.com/dimipak" target="_blank">
              <svg height="32" viewBox="0 0 16 16" width="32" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>

          <li class="nav-item social-icons">
            <a href="https://www.linkedin.com/in/dimitrios-pakos-7b134486/" target="_blank">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" focusable="false">
                <g transform="scale(.7083)" fill="none" fill-rule="evenodd">
                  <rect class="bug-text-color" fill="#ffffff" x="1" y="1" width="46" height="46" rx="4"></rect>
                  <path fill="#0073b1"
                        d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
                </g>
              </svg>
            </a>
          </li>

          <li class="nav-item social-icons">
            <a href="https://www.stackoverflow.com/users/9387521/dimipak?tab=profile" target="_blank">
              <svg aria-hidden="true" class="svg-icon iconLogoGlyphMd native" width="32" height="37"
                   viewBox="0 0 32 37">
                <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
                <path
                    d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z"
                    fill="#F48024"></path>
              </svg>
            </a>
          </li>

        </ul>
      </div>

      <div class="personal-info">
        <p>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
          : <a :href="'mailTo:' + getInfo.email">{{getInfo.email}}</a>
        </p>
      </div>

      <!--  BUTTON-->
      <div @click="this.download" class="download-cv btn btn-outline-secondary" :class="{disabled: pdfGenerating}">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd"
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Download CV
        <div v-show="pdfGenerating" class="spinner-border spinner-border-sm spinner" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "MainContent",
  data() {
    return {
      loading: false,
      pdfGenerating: false,
      profile: {}
    }
  },
  methods: {
    ...mapActions(['fetchProfileInfo', 'getPdf']),

    passLoaderStatus() {
      this.$emit('mcLoader', this.loading)
    },
    async download() {
      this.pdfGenerating = true

      const url = await this.getPdf()

      const fileLink = document.createElement('a');

      fileLink.href = url;
      fileLink.setAttribute('download', 'Dimitris_Pakos_CV.pdf');
      document.body.appendChild(fileLink);

      fileLink.click();

      setTimeout(() => this.pdfGenerating = false, 2000)
    },
    loadImages: function() {
      let imageLoaded = 0;

      let images = []
      images.push({"image_url": this.getInfo.cover_image})
      images.push({"image_url": this.getInfo.profile_image})

      for (const image of images) {
        const img = new Image();
        img.src = image.image_url
        img.onload = () => {
          imageLoaded++;
          if (imageLoaded === images.length) {
            this.$emit('mcLoaded')
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getInfo'])
  },
  async created() {
    await this.fetchProfileInfo()
    this.loadImages()
  }
}
</script>

<style lang="scss" scoped>

h2 {
  font-size: 2.5rem;
  margin-top: 0;
}

.profile-container {
  position: relative;
}

#cover {
  height: 260px;
  background-position-y: -60px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto 10px;

  @media screen and (max-width: 1850px) {
    background-position-y: 0;
  }

  @media screen and (max-width: 400px) {
    height: 170px;
  }
}

#profile {
  width: 180px;
  height: 180px;
  border: 1px solid mintcream;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-position: center;
  top: -110px;
  right: 10px;
  margin: 0 auto;

  @media screen and (max-width: 1250px) {
    width: 120px;
    height: 120px;
    top: -66px;
  }

  @media screen and (max-width: 930px) {
    top: -100px;
  }
}

.profile-pic-container {
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  background-color: #e6e4e4;

  p {
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
      width: 90%;
    }
  }

  .download-cv {
    margin: 30px 0 0;
  }

  .icon-nav {
    width: max-content;
    margin: 0 auto;
    padding: 20px 0;

    .social-icons {
      padding: 0 20px;

      a {
        color: transparent;
      }
    }
  }
}

.personal-info {
  a {
    color: $fontColor;
  }
}

.spinner {
  color: $fontColor;
}

</style>