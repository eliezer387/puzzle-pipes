import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { SocketConfig } from "./config";
import { ISocketData } from "./model";
import { setMap, setRotation, setValidation } from "../redux/store";

const defaultValue = {} as any;

const WebSocketContext = createContext(defaultValue);

export { WebSocketContext };

export function WebSocketProvider({ children }: any) {
  const dispatch = useDispatch();
  let socket: WebSocket ;
  let ws: ISocketData = {} as ISocketData;

     socket = new WebSocket(SocketConfig);
 
  if (socket) {
    socket.onopen = () => {
      console.log("connected");
    };

    socket.onmessage = (event) => {
      if (event) {
        const msg = event.data;
        if (isMap(msg)) {
          const pipeMap = removeMapName(msg);
          const rows = pipeMap.split("\n");
          const column = splitMap(rows);
          dispatch(setMap(column));
        } else if (isVerify(msg)) {
          const validationMessage = getVerificationResult(msg);
          dispatch(setValidation(validationMessage));
        }
      }
    };

    const isMap = (text: string) => {
      return text.startsWith("map");
    };

    const isVerify = (text: string) => {
      return text.startsWith("verify");
    }

    const getVerificationResult = (text: string) => {
      const result = text.split("verify:");
      return result[1].trim();
    }

    const splitMap = (rows: string[]) => {
      let map: string[][] = [];
      
      for (let i = 0; i < rows.length; i++) {
        const columns = rows[i].split("");
        map.push(columns);
      }
      
      return map;
    };

    const removeMapName = (text: string) => {
      const arr = text.replace("map:", "").trim();
      return arr;
    };
    const isRotation = (text: string) => {
      return text.startsWith("rotate");
    }

    const send = (msg: string) => {
      if(isRotation(msg)) {
        dispatch(setRotation(msg));
      }

      socket.send(msg);
    };
    
    ws = {
      socket: socket,
      send: send,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
}
