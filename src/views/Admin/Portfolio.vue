<template>

  <div style="text-align: left;">
    <button class="btn btn-success" @click="this.createPortfolioModal = true">Create</button>
  </div>

  <div class="table-responsive">
    <table class="table .table-striped">
      <thead>
<!--      <th></th>-->
      <th>Url</th>
      <th>Name</th>
      <th>Type</th>
      <th>Technology</th>
      <th>Customer</th>
      <th>Actions</th>
      </thead>
      <tbody>
      <tr v-for="portfolio in getPortfolios" :key="portfolio.portfolio_id">
        <td>
          {{portfolio.website_url}}
          <div class="portfolio" :style="{backgroundImage: 'url(' + portfolio.image_url + ')'}"></div>
        </td>
<!--        <td></td>-->
        <td>{{portfolio.name}}</td>
        <td>{{portfolio.type}}</td>
        <td>{{portfolio.technology}}</td>
        <td>{{portfolio.customer}}</td>
<!--        <td>-->
<!--          <div>-->
<!--            <p>Name: {{portfolio.name}}</p>-->
<!--            <p>Type: {{portfolio.type}}</p>-->
<!--            <p>Technology: {{portfolio.technology}}</p>-->
<!--            <p>Customer: {{portfolio.customer}}</p>-->
<!--            <p>Url: {{portfolio.website_url}}</p>-->
<!--          </div>-->
<!--        </td>-->
        <td>
          <i class="bi bi-pencil-square actions" @click="setPortfolio(portfolio); this.updatePortfolioModal = true"></i>
          <i class="bi bi-trash3 actions" @click="setPortfolio(portfolio); this.deletePortfolioModal = true"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <DeletePortfolioConfirmation
      v-if="deletePortfolioModal"
      :portfolio-id="portfolio.id"
      :portfolio-name="portfolio.name"
      @confirm="deletePortfolioConfirmation"
      @close="deletePortfolioModal = false"
  />

  <CreatePortfolio
      v-if="createPortfolioModal"
      @submit="createNewPortfolio"
      @close="createPortfolioModal = false"
  />

  <UpdatePortfolio
      v-if="updatePortfolioModal"
      :website-url="portfolio.websiteUrl"
      :name="portfolio.name"
      :type="portfolio.type"
      :technology="portfolio.technology"
      :customer="portfolio.customer"
      @submit="updateCurrentPortfolio"
      @close="updatePortfolioModal = false"
  />

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import DeletePortfolioConfirmation from "../../components/Modals/portfolio/DeletePortfolioConfirmation";
import CreatePortfolio from "../../components/Modals/portfolio/CreatePortfolio";
import UpdatePortfolio from "../../components/Modals/portfolio/UpdatePortfolio";

export default {
  name: "Portfolio",
  props: {
    profileId: Number,
  },
  emits: ['usernameUpdated'],
  data() {
    return {
      portfolio: {
        id: 0,
        websiteUrl: "",
        name: "",
        type: "",
        technology: "",
        customer: ""
      },
      deletePortfolioModal: false,
      createPortfolioModal: false,
      updatePortfolioModal: false
    }
  },
  components: {
    DeletePortfolioConfirmation,
    CreatePortfolio,
    UpdatePortfolio
  },
  computed: {
    ...mapGetters('admin/portfolio', ['getPortfolios'])
  },
  methods: {
    ...mapActions('admin/portfolio', ['fetchPortfolios', 'deletePortfolio', 'createPortfolio', 'uploadPortfolioImage', 'updatePortfolio']),

    setPortfolio(portfolio) {
      this.portfolio.name = portfolio.name
      this.portfolio.websiteUrl = portfolio.website_url
      this.portfolio.customer = portfolio.customer
      this.portfolio.technology = portfolio.technology
      this.portfolio.type = portfolio.type
      this.portfolio.id = portfolio.portfolio_id
    },

    async deletePortfolioConfirmation() {
      if (await this.deletePortfolio({profileId: this.profileId, portfolioId: this.portfolio.id})) {
        console.log("portfolio deleted")
        this.deletePortfolioModal = false
      }
    },

    async createNewPortfolio(portfolio, file) {
      if (await this.createPortfolio({profileId: this.profileId, request: portfolio})) {
        console.log("portfolio created")
        if (await this.uploadPortfolioImage({profileId: this.profileId, portfolioId: this.getPortfolios.at(-1).portfolio_id, fileData: file})) {
          console.log("portfolio image uploaded")
          this.createPortfolioModal = false
        }
      }
    },

    async updateCurrentPortfolio(portfolio, file) {
      if (await this.updatePortfolio({profileId: this.profileId, portfolioId: this.portfolio.id, request: portfolio})) {
        console.log("portfolio updated")
      }

      if (file !== null) {
        if (await this.uploadPortfolioImage({profileId: this.profileId, portfolioId: this.portfolio.id, fileData: file})) {
          console.log("portfolio image uploaded")
        }
      }
    }
  },
  async mounted() {
    console.log("portfolio")
    await this.fetchPortfolios(this.profileId)
  }
}
</script>

<style scoped>
.portfolio {
  width: 200px;
  height: 300px;
  background-size: 100%;
  background-position-x: center;
  background-repeat: no-repeat;
  margin: 0 auto;
}
.actions {
  color: white;
  margin-right: 5px;
  cursor: pointer;
}
</style>