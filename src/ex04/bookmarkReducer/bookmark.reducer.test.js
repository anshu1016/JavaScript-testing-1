import bookmarkReducer from "./bookmark.reducer";
describe("bookmarkReducer", () => {
  const initialState = {
    bookmarks: []
  };

  it("handles ADD_BOOKMARK action", () => {
    const newBookmark = {
      id: 1,
      name: "kuch vi pa nai",
      url: "kuchviptanai.com",
      tags: ["kuch", "vi"]
    };
    const action = { type: "ADD_BOOKMARK", payload: newBookmark };
    const state = bookmarkReducer(initialState, action);
    expect(state.bookmarks).toContainEqual(newBookmark);
  });
  it("handles REMOVE_BOOKMARK action", () => {
    const stateWithBookmark = {
      bookmarks: [
        { id: 1, name: "pta nai", url: "ptanai.com", tags: ["pta", "nai"] }
      ]
    };
    const action = { type: "REMOVE_BOOKMARK", payload: 1 };
    const state = bookmarkReducer(stateWithBookmark, action);
    expect(state.bookmarks).toHaveLength(0);
  });

  it("handles UPDATE_TAGS action", () => {
    const initialBookmarks = [
      {
        id: 1,
        name: "DilLagi",
        url: "dillagi to nibhani pdegi .mp3",
        tags: ["Dil", "lagi"]
      }
    ];
    const updatedTags = ["Ek Bar Dil", "La ke to dekho"];
    const action = {
      type: "UPDATE_TAGS",
      payload: { id: 1, tags: updatedTags }
    };
    const state = bookmarkReducer({ bookmarks: initialBookmarks }, action);
    expect(state.bookmarks[0].tags).toEqual(updatedTags);
  });

  it("handles FILTER_BOOKMARKS_BY_TAG action", () => {
    const initialBookmarks = [
      {
        id: 1,
        name: "aajPhir",
        url: "aajphirGaliMeChandNikla",
        tags: ["NagaArjuna"]
      },
      {
        id: 2,
        name: "Kabhi Khushi",
        url: "Kabhi KHushi Kbhi  Gm.mp3",
        tags: ["hrithik"]
      }
    ];
    const action = { type: "FILTER_BOOKMARKS_BY_TAG", payload: "hrithik" };
    const state = bookmarkReducer({ bookmarks: initialBookmarks }, action);
    expect(state.bookmarks).toHaveLength(1);
    expect(state.bookmarks[0].tags).toContain("hrithik");

    it("handles ADD_TAG action", () => {
      const initialBookmarks = [
        {
          id: 1,
          name: "dil chura lia",
          url: "dil chura lia h tumne sanam.mp3",
          tags: ["pta nai"]
        }
      ];
      const action = { type: "ADD_TAG", payload: { id: 1, tag: "pta nai" } };
      const state = bookmarkReducer({ bookmarks: initialBookmarks }, action);
      expect(state.bookmarks[0].tags).toContain("pta nai");
    });

    it("handles REMOVE_TAG action", () => {
      const initialBookmarks = [
        { id: 1, name: "very Lenghty", url: "neoG", tags: ["Very", "Lengthy"] }
      ];
      const action = { type: "REMOVE_TAG", payload: { id: 1, tag: "Very" } };
      const state = bookmarkReducer({ bookmarks: initialBookmarks }, action);
      expect(state.bookmarks[0].tags).not.toContain("Very");
    });
  });
});
