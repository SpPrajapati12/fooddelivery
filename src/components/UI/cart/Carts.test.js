import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import Carts from "./Carts";

const store = configureStore({
  reducer: {
    cart: () => ({
      cartItems: [],
      totalAmount: 0,
    }),
    cartUi: () => ({
      cartIsVisible: true,
    }),
  },
});

test("shows empty cart message", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Carts />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/No item added to the cart/i)).toBeInTheDocument();
});