import { createSelector } from 'reselect';


const collectionIdMap = {
   hats: 1,
   sneakers: 2,
   jackets: 3,
   womens: 4,
   mens: 5
};

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
   [selectShop],
   shop => shop.collections
);

export const selectCollection = value => createSelector(
   [selectShopCollections],
   collections => collections.find(collection => collection.id === collectionIdMap[value])
);

