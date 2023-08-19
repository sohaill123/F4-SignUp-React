export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: 'SET_USER',
        payload: user,
    };
};

export const clearUser = () => {
    localStorage.removeItem('user');
    return {
        type: 'CLEAR_USER',
    };
};
