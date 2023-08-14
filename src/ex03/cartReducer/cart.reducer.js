import cartReducer from "./cart.reducer";

describe("cartReducer", () => {
  const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    discounts: []
  };

  // Test for ADD_TO_CART action
  it("should add an item to the cart", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: { item: { id: 1, name: "item1", price: 10, quantity: 2 } }
    };
    const state = cartReducer(initialState, action);
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(action.payload.item);
  });

  // Test for REMOVE_FROM_CART action
  it("should remove an item from the cart", () => {
    const initState = {
      ...initialState,
      items: [{ id: 1, name: "item1", price: 10, quantity: 2 }]
    };
    const action = { type: "REMOVE_FROM_CART", payload: { itemId: 1 } };
    const state = cartReducer(initState, action);
    expect(state.items).toHaveLength(0);
  });

  // Test for UPDATE_QUANTITY action
  it("should update the quantity of an item in the cart", () => {
    const initState = {
      ...initialState,
      items: [{ id: 1, name: "item1", price: 10, quantity: 2 }]
    };
    const action = {
      type: "UPDATE_QUANTITY",
      payload: { itemId: 1, quantity: 5 }
    };
    const state = cartReducer(initState, action);
    expect(state.items[0].quantity).toBe(5);
  });

  // Test for ADD_DISCOUNT action
  it("should add a discount to the cart and recalculate total price", () => {
    const action = {
      type: "ADD_DISCOUNT",
      payload: { discount: { id: 1, name: "discount1", value: 5 } }
    };
    const state = cartReducer(initialState, action);
    expect(state.discounts).toContainEqual(action.payload.discount);
  });

  // Test for APPLY_PROMOTION action
  it("should add a promotion to the cart and recalculate total price", () => {
    const action = {
      type: "APPLY_PROMOTION",
      payload: { promotion: { id: 1, name: "promotion1", value: 5 } }
    };
    const state = cartReducer(initialState, action);
    expect(state.discounts).toContainEqual(action.payload.promotion);
  });

  // Test for REMOVE_DISCOUNT action
  it("should remove a discount from the cart and recalculate total price", () => {
    const initState = {
      ...initialState,
      discounts: [{ id: 1, name: "discount1", value: 5 }]
    };
    const action = { type: "REMOVE_DISCOUNT", payload: { discountId: 1 } };
    const state = cartReducer(initState, action);
    expect(state.discounts).toHaveLength(0);
  });
});
