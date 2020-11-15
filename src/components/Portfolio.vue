<template>

  <div class="portfolio-container">
    <h2>Portfolio</h2>
    <div class="row row-cols-3">
      <div class="col">
        <div class="portfolio-job" id="correct" @click="toggle('c')" ref="correct">
          <div class="grayscale">
            <div class="details">
              <p>Wordpress</p>
              <p>Company</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="portfolio-job" id="giasite" @click="toggle('g')">
          <div class="grayscale">
            <div class="details">
              <p>CodeIgniter</p>
              <p>Company</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="portfolio-job" id="mairyrizou" @click="toggle">
          <div class="grayscale">
            <div class="details">
              <p>Wordpress</p>
              <p>Personal</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="portfolio-job" id="triantafylli" @click="toggle">
          <div class="grayscale">
            <div class="details">
              <p>Wordpress</p>
              <p>Personal</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="portfolio-job" id="julius" @click="toggle">
          <div class="grayscale">
            <div class="details">
              <p>Wordpress</p>
              <p>Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="modalOpen" class="portfolio-big" @click.self="close()">
      <div class="body">
        <img :src="require('@/assets/images/'+image)" />
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: "Portfolio",
  data() {
    return {
      modalOpen: false,
      image: "",
      image1: "correct.jpg",
      image2: "giasite.jpg"
    }
  },
  methods: {
    toggle: function(e) {
      if (e === 'c') {
        this.image = this.image1
      } else if (e === 'g') {
        this.image = this.image2
      }
      this.modalOpen = !this.modalOpen;
    },
    close: function() {
      this.modalOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped>

.portfolio-container {
  width: 60%;
  margin: 50px auto;
  background-color: white;
  padding: 20px 50px 50px;
}

#correct {
  width: 300px;
  height: 300px;
  background: url("../assets/images/correct.jpg");
  background-size: 100%;
  background-position-x: center;
}

#giasite {
  width: 300px;
  height: 300px;
  background: url("../assets/images/giasite.jpg");
  background-size: 100%;
  background-position-x: center;
}

#mairyrizou {
  width: 300px;
  height: 300px;
  background: url("../assets/images/mairyrizou.jpg");
  background-size: 100%;
  background-position-x: center;
}

#triantafylli {
  width: 300px;
  height: 300px;
  background: url("../assets/images/triantafylli.jpg");
  background-size: 100%;
  background-position-x: center;
}

#julius {
  width: 300px;
  height: 300px;
  background: url("../assets/images/julius.png");
  background-size: 100%;
  background-position-x: center;
}

.portfolio-job {
  transition: all .2s linear;
  cursor: pointer;

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
    background-size:110% !important;
    transition: background-size .2s linear;
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
}

h6 {
  margin-bottom: 0;
}

.portfolio-big {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #aaaaaaab;

  .body {
    position: relative;
    width: 700px;
    height: 700px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 5em auto 0;
  }

  img {
    width: inherit;
  }
}

</style>