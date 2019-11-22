export const actionTypes = {
   UPDATE_COLLECTION: 'UPDATE_COLLECTION'
};

export const updateCollections = collectionMap => ({
   type: actionTypes.UPDATE_COLLECTION,
   payload: collectionMap
});
