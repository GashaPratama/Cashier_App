export const state = () => ({
  products: [
    //Category 1 -- Drinks
    {
      id: 1,
      title: 'Thai Tea',
      price: 25000,
      categoryId: 1,
      thumbnail: 'thaitea.jpg',
    },
    {
      id: 2,
      title: 'Mocchacino',
      price: 28000,
      categoryId: 1,
      thumbnail: 'moccacino.jpg',
    },
    {
      id: 3,
      title: 'Milk Shake',
      price: 20000,
      categoryId: 1,
      thumbnail: 'milkshake.jpg',
    },
    {
      id: 4,
      title: 'Milk Blend',
      price: 23000,
      categoryId: 1,
      thumbnail: 'milkblend.jpg',
    },
    {
      id: 5,
      title: 'Macchiato',
      price: 26000,
      categoryId: 1,
      thumbnail: 'macchiato.jpg',
    },
    {
      id: 6,
      title: 'Ice Tea',
      price: 10000,
      categoryId: 1,
      thumbnail: 'icetea.jpg',
    },
    {
      id: 7,
      title: 'Ice Cappucino',
      price: 28000,
      categoryId: 1,
      thumbnail: 'ice-cappucino.jpg',
    },
    {
      id: 8,
      title: 'Green Tea',
      price: 17000,
      categoryId: 1,
      thumbnail: 'greentea.jpg',
    },
    {
      id: 9,
      title: 'Robusta',
      price: 15000,
      categoryId: 1,
      thumbnail: 'robusta.jpg',
    },
    {
      id: 10,
      title: 'Luwak Coffe',
      price: 13000,
      categoryId: 1,
      thumbnail: 'luwak.jpg',
    },
    {
      id: 11,
      title: 'Long Black Coffe',
      price: 16000,
      categoryId: 1,
      thumbnail: 'long-black.jpg',
    },
    {
      id: 12,
      title: 'Cold Brew',
      price: 13000,
      categoryId: 1,
      thumbnail: 'Cold-Brew.jpg',
    },
    {
      id: 13,
      title: 'Cappucino Hot',
      price: 27000,
      categoryId: 1,
      thumbnail: 'cappucino.jpg',
    },
    {
      id: 14,
      title: 'Affogato',
      price: 16000,
      categoryId: 1,
      thumbnail: 'affogato.jpg',
    },

    //Category 2 -- Food and Snack
    {
      id: 15,
      title: 'Nasi uduk',
      price: 10000,
      categoryId: 2,
      thumbnail: 'uduk.jpg',
    },
    {
      id: 16,
      title: 'Toast',
      price: 8000,
      categoryId: 2,
      thumbnail: 'toast.jpg',
    },
    {
      id: 17,
      title: 'Pisang Goreng (Paket) ',
      price: 12000,
      categoryId: 2,
      thumbnail: 'pisang.jpg',
    },
    {
      id: 18,
      title: 'Onion Ring',
      price: 7000,
      categoryId: 2,
      thumbnail: 'onion.jpg',
    },
    {
      id: 19,
      title: 'Nasi Padang',
      price: 15000,
      categoryId: 2,
      thumbnail: 'naspad.jpg',
    },
    {
      id: 20,
      title: 'Nasi Goreng',
      price: 13000,
      categoryId: 2,
      thumbnail: 'nasgor.jpg',
    },
    {
      id: 21,
      title: 'Ayam Geprek',
      price: 13000,
      categoryId: 2,
      thumbnail: 'iwakgeprek.jpg',
    },
    {
      id: 22,
      title: 'Kentang Goreng',
      price: 11000,
      categoryId: 2,
      thumbnail: 'fries.jpg',
    },
    {
      id: 23,
      title: 'Croissant',
      price: 10000,
      categoryId: 2,
      thumbnail: 'croissant.jpg',
    },
    {
      id: 24,
      title: 'Nasi Kebuli',
      price: 20000,
      categoryId: 2,
      thumbnail: 'buly.jpg',
    },
    {
      id: 25,
      title: 'Nasi Rawon Paket Lengkap',
      price: 23000,
      categoryId: 2,
      thumbnail: 'rawon.jpg',
    },
    {
      id: 26,
      title: 'Nasi Kentucky',
      price: 10000,
      categoryId: 2,
      thumbnail: 'nasikentaki.jpg',
    },

    //Category 3 -- Dessert
    {
      id: 27,
      title: 'bombocado',
      price: 15000,
      categoryId: 3,
      thumbnail: 'bombocado.jpg',
    },
    {
      id: 28,
      title: 'Carlota de limon',
      price: 8000,
      categoryId: 3,
      thumbnail: 'Carlotadelimon.jpg',
    },
    {
      id: 29,
      title: 'Clotted Cream',
      price: 8000,
      categoryId: 3,
      thumbnail: 'ClottedCream.jpg',
    },
    {
      id: 30,
      title: 'Crepes',
      price: 10000,
      categoryId: 3,
      thumbnail: 'Crepes.jpg',
    },
    {
      id: 31,
      title: 'Frozen custard',
      price: 13000,
      categoryId: 3,
      thumbnail: 'frozencustard.jpg',
    },
    {
      id: 32,
      title: 'Kladdkaka',
      price: 15000,
      categoryId: 3,
      thumbnail: 'Kladdkaka.jpg',
    },
    {
      id: 33,
      title: 'kunafah',
      price: 12000,
      categoryId: 3,
      thumbnail: 'kunafah.jpg',
    },
    {
      id: 34,
      title: 'Makrou del louse',
      price: 18000,
      categoryId: 3,
      thumbnail: 'Makroudellouse.jpg',
    },
    {
      id: 35,
      title: 'Pastel De Belem',
      price: 16000,
      categoryId: 3,
      thumbnail: 'PastelDeBelem.jpg',
    },
    {
      id: 36,
      title: 'pastel de nata',
      price: 17000,
      categoryId: 3,
      thumbnail: 'pasteldenata.jpg',
    },
    {
      id: 37,
      title: 'Petticoat tails',
      price: 14000,
      categoryId: 3,
      thumbnail: 'Petticoattails.jpg',
    },
    {
      id: 38,
      title: 'sernik',
      price: 7000,
      categoryId: 3,
      thumbnail: 'sernik.jpg',
    },
    {
      id: 39,
      title: 'Tiramisu',
      price: 18000,
      categoryId: 3,
      thumbnail: 'Tiramisu.jpg',
    },
    {
      id: 40,
      title: 'WuesoHelado',
      price: 15000,
      categoryId: 3,
      thumbnail: 'WuesoHelado.jpg',
    },
  ],

  categories: [
    {
      id: 0,
      title: 'All Category',
    },
    {
      id: 1,
      title: 'Drinks',
    },
    {
      id: 2,
      title: 'Food And Snacks',
    },
    {
      id: 3,
      title: 'Dessert',
    },
  ],
  categoryId: 0,
})

export const mutations = {
  updateCategoryId(state, categoryId) {
    state.categoryId = categoryId
  },
}

export const actions = {
  updateCategoryId({ commit }, categoryId) {
    commit('updateCategoryId', categoryId)
  },
}
