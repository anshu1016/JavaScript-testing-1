import commentReducer from "./comment.reducer";
describe("commentReducer", () => {
  const initialState = {
    comments: []
  };

  it("handles ADD_COMMENT action", () => {
    const newComment = { id: 1, text: "First Comment", votes: 0, replies: [] };
    const action = { type: "ADD_COMMENT", payload: newComment };
    const state = commentReducer(initialState, action);
    expect(state.comments).toContainEqual(newComment);
  });

  it("handles REMOVE_COMMENT action", () => {
    const stateWithComment = {
      comments: [{ id: 1, text: "First Comment", votes: 0, replies: [] }]
    };
    const action = { type: "REMOVE_COMMENT", payload: 1 };
    const state = commentReducer(stateWithComment, action);
    expect(state.comments).toHaveLength(0);
  });

  it("handles UPVOTE_COMMENT action", () => {
    const stateWithComment = {
      comments: [{ id: 1, text: "First Comment", votes: 0, replies: [] }]
    };
    const action = { type: "UPVOTE_COMMENT", payload: 1 };
    const state = commentReducer(stateWithComment, action);
    expect(state.comments[0].votes).toBe(1);
  });

  it("handles ADD_REPLY action", () => {
    const stateWithComment = {
      comments: [{ id: 1, text: "First Comment", votes: 0, replies: [] }]
    };
    const reply = { id: 100, text: "Reply to first comment" };
    const action = { type: "ADD_REPLY", payload: { commentId: 1, reply } };
    const state = commentReducer(stateWithComment, action);
    expect(state.comments[0].replies).toContainEqual(reply);
  });

  it("handles REMOVE_REPLY action", () => {
    const stateWithReply = {
      comments: [
        {
          id: 1,
          text: "First Comment",
          votes: 0,
          replies: [{ id: 100, text: "Reply to first comment" }]
        }
      ]
    };
    const action = {
      type: "REMOVE_REPLY",
      payload: { commentId: 1, replyId: 100 }
    };
    const state = commentReducer(stateWithReply, action);
    expect(state.comments[0].replies).toHaveLength(0);
  });

  it("handles DOWNVOTE_COMMENT action", () => {
    const stateWithComment = {
      comments: [{ id: 1, text: "First Comment", votes: 2, replies: [] }]
    };
    const action = { type: "DOWNVOTE_COMMENT", payload: 1 };
    const state = commentReducer(stateWithComment, action);
    expect(state.comments[0].votes).toBe(1);
  });
});
