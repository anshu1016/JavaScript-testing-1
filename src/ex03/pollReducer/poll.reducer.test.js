import pollReducer from "./poll.reducer";

describe("pollReducer", () => {
  const initialState = {
    polls: []
  };

  it("should return the initial state when no action is provided", () => {
    expect(pollReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle CREATE_POLL action", () => {
    const newPoll = {
      id: 1,
      question: "Which is your favorite fruit?"
    };
    const action = {
      type: "CREATE_POLL",
      payload: newPoll
    };
    const expectedState = {
      polls: [{ id: 1, question: "Which is your favorite fruit?", options: [] }]
    };
    expect(pollReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle ADD_OPTION action", () => {
    const initialStateWithPoll = {
      polls: [{ id: 1, question: "Which is your favorite fruit?", options: [] }]
    };
    const action = {
      type: "ADD_OPTION",
      payload: { pollId: 1, optionText: "Apple" }
    };
    const expectedState = {
      polls: [
        {
          id: 1,
          question: "Which is your favorite fruit?",
          options: [{ text: "Apple", votes: 0 }]
        }
      ]
    };
    expect(pollReducer(initialStateWithPoll, action)).toEqual(expectedState);
  });

  it("should handle VOTE action", () => {
    const initialStateWithOption = {
      polls: [
        {
          id: 1,
          question: "Which is your favorite fruit?",
          options: [{ text: "Apple", votes: 0 }]
        }
      ]
    };
    const action = {
      type: "VOTE",
      payload: { pollId: 1, optionText: "Apple" }
    };
    const expectedState = {
      polls: [
        {
          id: 1,
          question: "Which is your favorite fruit?",
          options: [{ text: "Apple", votes: 1 }]
        }
      ]
    };
    expect(pollReducer(initialStateWithOption, action)).toEqual(expectedState);
  });
});
