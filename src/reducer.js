import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => {
          if (action.payload.id !== story.objectID) {
            return story;
          }
        }),
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload.query,
        page: 0,
      };

    case HANDLE_PAGE:
      if (action.payload.value === "prev") {
        let prevPage = state.page - 1;
        if (state.page <= 0) {
          state.page = 50;
        }
        return {
          ...state,
          page: prevPage,
        };
      }
      if (action.payload.value === "next") {
        let nextPage = state.page + 1;
        if (nextPage >= state.nbPages) {
          nextPage = 0;
        }
        return {
          ...state,
          page: nextPage,
        };
      }

    default:
      throw new Error("no matching action type");
  }
};
export default reducer;
