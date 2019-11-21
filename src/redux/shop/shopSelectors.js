import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
   [selectShop],
   shop => shop.collections
);

export const selectCollection = value => createSelector(
   [selectShopCollections],
   collections => collections[value]
);

export const selectCollectionReview = createSelector(
   [selectShopCollections],
   collections => Object.keys(collections).map(key => collections[key])
);
