import React from "react";
import { WebSocketContext, WebSocketProvider } from "../websocket";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("WebSocketContext", () => {


    it("context provider", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
            <WebSocketProvider>
                <WebSocketContext.Consumer>
                    {
                        (ws: WebSocket) => {
                            expect(ws).toBeDefined();
                            return <div>{ws.url}</div>;
                        }
                    }
                </WebSocketContext.Consumer>
            </WebSocketProvider>
            </Provider>,
            div
        );
    })
})
