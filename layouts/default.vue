<template>
  <v-app dark>
    <v-navigation-drawer v-model="sidedrawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-bottom-navigation horizontal height="7.6vh" fixed app>
      <v-app-bar-nav-icon
        @click.stop="sidedrawer = !sidedrawer"
        v-ripple="false"
        plain
      />

      <v-btn
        v-for="(item, i) in bottommenu"
        :key="i"
        :to="item.to"
        v-ripple="false"
        plain
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      sidedrawer: false,
      items: [
        {
          icon: 'mdi-account',
          title: 'Account',
          to: '/inspire',
        },
        {
          icon: 'mdi-bell',
          title: 'Notification',
          to: '/notification',
        },
      ],
      bottommenu: [
        {
          icon: 'mdi-application',
          title: 'App',
          to: '/',
        },
      ],
    }
  },
}
</script>
