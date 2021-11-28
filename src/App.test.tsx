import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { WebSocketProvider } from "./context/websocket";

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <WebSocketProvider>
          <App />
        </WebSocketProvider>
      </Provider>
    );
  });

  // it("renders the title", () => {
  //   render(<App />);
  //   const title = screen.getByText(/Puzzle Pipes/i);
  //   expect(title).toBeInTheDocument();
  // });
});
