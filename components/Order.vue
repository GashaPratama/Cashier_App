<template>
  <v-row>
    <v-col cols="12">
      <h2>Shopping Cart</h2>
      <v-list>
        <v-list-item v-for="(item, index) in cartItems" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ currency(item.price) }} X
              <v-btn
                icon
                class="px-0"
                collor="primary"
                x-small
                @click="decrement(item.id)"
                ><v-icon>mdi-minus</v-icon></v-btn
              >{{ item.quantity }}
              <v-btn
                icon
                class="px-0"
                collor="primary"
                x-small
                @click="increment(item.id)"
                ><v-icon>mdi-plus</v-icon></v-btn
              ></v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-action>
            <v-btn icon collor="error" x-small @click="remove(item.id)"
              ><v-icon>mdi-close-thick</v-icon></v-btn
            >
            <v-list-item-title>{{
              currency(itemTotal(item.price, item.quantity))
            }}</v-list-item-title>
          </v-list-action>
        </v-list-item>
        <v-list-item
          v-if="items.length"
          class="text-h6 black--text grey lighten-2"
        >
          <v-list-item-content>
            <v-list-item-title>Sub Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{ currency(subTotal) }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <!-- <v-list-group
          v-if="cartItems.length"
          :value="false"
          class="text-h6 black--text grey lighten-3"
        >
          <template v-slot:activator>
            <v-list-item-content class="text-h6">
              <v-list-item-title>Additional</v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="(additional, index) in additionals">
            <v-list-item disabled class="text-h6">
              <v-list-item-content>
                <v-list-item-title>
                  {{ additional.title }}
                </v-list-item-title>
                <v-list-item-subtitle v-if="additional.mode == 'percentage'">
                  {{ currency(additional.value) }}%
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title v-if="additional.mode == 'fix'">
                  {{ currency(additional.value) }}
                </v-list-item-title>
                <v-list-item-title v-else-if="additional.mode == 'percentage'">
                  {{ currency(calculatePercentage(additional.value)) }}
                </v-list-item-title></v-list-item-action
              >
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-item
          v-if="items.length"
          class="text-h6 black--text grey lighten-2"
        >
          <v-list-item-content>
            <v-list-item-title>Grand Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{ currency(total) }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item> -->
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions('carts', {
      increment: 'increment',
      decrement: 'decrement',
      remove: 'remove',
    }),
    currency(value) {
      return Intl.NumberFormat('en-US').format(value)
    },
  },
  computed: {
    ...mapState('carts', {
      items: 'items',
      additionals: 'additionals',
    }),
    ...mapGetters('carts', {
      cartItems: 'cartItems',
      itemTotal: 'itemTotal',
      subTotal: 'subTotal',
      calculatePercentage: 'calculatePercentage',
      total: 'total',
    }),
  },
}
</script>
