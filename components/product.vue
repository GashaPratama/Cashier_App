<template>
  <!-- Row Seatch -->
  <div>
    <v-row align="center" px-6>
      <v-col cols="10">
        <v-autocomplete
          label="Products"
          placeholder="Start Typing to Search"
          :search-input.sync="search"
          :loading="isLoading"
          :items="itemsSearch"
          item-text="title"
          :item-value="id"
          v-model="selectedSearch"
          return-object
          hide-no-data
        >
        </v-autocomplete>
      </v-col>
      <v-col cols="2">
        <v-menu>
          <template v-slot:activator="{ on: category }">
            <v-btn v-on="category" color="primary"> Category </v-btn>
          </template>

          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(category, index) in categories"
                :key="index"
                :disabled="category.id == categoryId"
                @change="updateCategoryId(category.id)"
              >
                <v-list-item-title> {{ category.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <!-- row menu -->
    <v-row>
      <v-col v-for="(product, index) in filteredproducts" cols="2" :key="index">
        <v-card
          @click="addToCart(product.id)"
          :title="product.title"
          :ripple="true"
        >
          <v-card-actions>
            <v-img
              :src="require(`@/assets/images/products/${product.thumbnail}`)"
            />
          </v-card-actions>
          <v-card-text align="center" class="product-title">
            {{ product.title }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'product',
  data() {
    return {
      search: null,
      isLoading: false,
      itemSearch: [],
      selectedSearch: null,
    }
  },

  methods: {
    ...mapActions({
      updateCategoryId: 'products/updateCategoryId',
      addToCart: 'carts/addToCart',
    }),
    resetSearchCategory() {
      this.categoryId = false
    },
  },
  computed: {
    filteredproducts() {
      if (this.categoryId) {
        return this.products.filter((s) => s.categoryId == this.categoryId)
      } else if (this.selectedSearch) {
        return this.products.filter((s) => s.title == this.selectedSearch.title)
      }

      return this.products
    },

    ...mapState('products', {
      products: 'products',
      categories: 'categories',
      categoryId: 'categoryId',
    }),
  },
  watch: {
    search(val) {
      console.log(val)
      this.isLoading = true
      setTimeout(() => {
        this.itemsSearch = this.products.filter((e) => {
          this.loading = false
          this.resetSearchCategory()
          return e.title
        })
      }, 500)
    },
  },
}
</script>

<style scoped>
.product-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
