import productReducer from "./product.reducer";
describe("productReducer", () => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Phone",
        category: "Electronics",
        price: 500,
        inStock: true
      },
      { id: 2, name: "Shirt", category: "Clothing", price: 20, inStock: true },
      {
        id: 3,
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        inStock: true
      },
      { id: 4, name: "Jeans", category: "Clothing", price: 40, inStock: false }
      // ... more products
    ],
    filters: {
      category: "All",
      searchQuery: "",
      sortBy: "price",
      ascending: true,
      priceRange: { min: 0, max: 1000 }
    }
  };
  it("handles SET_CATEGORY_FILTER action", () => {
    const action = { type: "SET_CATEGORY_FILTER", payload: "Electronics" };
    const state = productReducer(initialState, action);
    expect(state.filters.category).toBe("Electronics");
  });

  it("handles SET_SEARCH_QUERY action", () => {
    const action = { type: "SET_SEARCH_QUERY", payload: "Phone" };
    const state = productReducer(initialState, action);
    expect(state.filters.searchQuery).toBe("Phone");
  });

  it("handles SET_SORT action", () => {
    const sortData = { field: "price", ascending: false };
    const action = { type: "SET_SORT", payload: sortData };
    const state = productReducer(initialState, action);
    expect(state.filters.sortBy).toBe("price");
    expect(state.filters.ascending).toBe(false);
  });

  it("handles SET_PRICE_RANGE action", () => {
    const priceRange = { min: 100, max: 800 };
    const action = { type: "SET_PRICE_RANGE", payload: priceRange };
    const state = productReducer(initialState, action);
    expect(state.filters.priceRange).toEqual(priceRange);
  });

  it("handles TOGGLE_AVAILABILITY action", () => {
    const productId = 4;
    const action = { type: "TOGGLE_AVAILABILITY", payload: productId };
    const state = productReducer(initialState, action);
    const product = state.products.find((p) => p.id === productId);
    expect(product.inStock).toBe(true); // Assuming the product's initial state was false
  });
});
