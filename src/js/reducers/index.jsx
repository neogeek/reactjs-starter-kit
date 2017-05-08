const page = (state = [], action) => {

    if (action.type === 'INCREMENT_PAGE_VIEWS') {

        return {
            'views': state.views + 1
        };

    }

    return state;

};

export default {
    page
};
