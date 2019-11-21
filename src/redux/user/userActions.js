export const actionTypes = {
   SET_CURRENT_USER: 'SET_CURRENT_USER'
};

export const setCurrentUser = user => ({
   type: actionTypes.SET_CURRENT_USER,
   payload: user
});

