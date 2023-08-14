import cartReducer from "./cart.reducer";
describe("cartReducer", () => {
  const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    discounts: []
  };

  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          items: [...state.items, action.payload.item]
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.itemId)
        };

      case "UPDATE_QUANTITY":
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.itemId
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        };
      case "ADD_DISCOUNT":
        const newDiscounts = [...state.discounts, action.payload.discount];
        const newTotalPriceWithDiscounts = calculateTotalPrice(
          state.items,
          newDiscounts,
          state.totalQuantity
        );
        return {
          ...state,
          discounts: newDiscounts,
          totalPrice: newTotalPriceWithDiscounts
        };

      case "APPLY_PROMOTION":
        const newPromotions = [...state.discounts, action.payload.promotion];
        const newTotalPriceWithPromotions = calculateTotalPrice(
          state.items,
          newPromotions,
          state.totalQuantity
        );
        return {
          ...state,
          discounts: newPromotions,
          totalPrice: newTotalPriceWithPromotions
        };

      case "REMOVE_DISCOUNT":
        const remainingDiscounts = state.discounts.filter(
          (discount) => discount.id !== action.payload.discountId
        );
        const newTotalPriceWithoutDiscounts = calculateTotalPrice(
          state.items,
          remainingDiscounts,
          state.totalQuantity
        );
        return {
          ...state,
          discounts: remainingDiscounts,
          totalPrice: newTotalPriceWithoutDiscounts
        };

      default:
        return state;
    }
  }

  function calculateTotalPrice(items, discounts, totalQuantity) {
    const totalDiscount = discounts.reduce(
      (sum, discount) => sum + discount.value,
      0
    );
    const itemTotalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const totalPrice = itemTotalPrice - totalDiscount;
    return totalPrice;
  }
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
