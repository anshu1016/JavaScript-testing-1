const initialState = {};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };

    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        )
      };
    case "UPDATE_TAGS":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) => {
          if (bookmark.id === action.payload.id) {
            return { ...bookmark, tags: action.payload.tags };
          }
          return bookmark;
        })
      };

    case "FILTER_BOOKMARKS_BY_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) =>
          bookmark.tags.includes(action.payload)
        )
      };

    case "ADD_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) => {
          if (bookmark.id === action.payload.id) {
            return {
              ...bookmark,
              tags: [...bookmark.tags, action.payload.tag]
            };
          }
          return bookmark;
        })
      };
    case "REMOVE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) => {
          if (bookmark.id === action.payload.id) {
            return {
              ...bookmark,
              tags: bookmark.tags.filter((tag) => tag !== action.payload.tag)
            };
          }
          return bookmark;
        })
      };

    default:
      return state;
  }
}

export default bookmarkReducer;
