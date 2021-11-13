import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
const socketUrl = "wss://hometask.eg1236.com/game-pipes/";
const ws = new WebSocket(socketUrl);
ws.onopen = () => {
  console.log("connected");
};

function App() {
  const [mapState, setMapState]: any[]  = useState([]);
  let message: MessageEvent<any> | null = null;
  useEffect(() => {
    if (ws.readyState) {
    }
  }, []);

  ws.onmessage = (event) => {
    console.log(event);
    if (event) {
      let msg = event.data;
      console.log(isMap(msg));
      if (isMap(msg)) {
        let pipeMap = removeMapName(msg);
        let columns = pipeMap.split("\n");
        let rows = columns
          .map((column) => column.split(""))
          .filter((row) => row.length > 0);
        setMapState(rows);
        console.log(rows);
        // console.log(stringArray);
      }
      switch (msg.type) {
        case "map":
          // const lines = msg.split('\n');
          break;
      }
    }
  };

  const isMap = (text: string) => {
    return text.startsWith("map");
  };

  const removeMapName = (text: string) => {
    return text.replace("map:", "");
  };

  useEffect(() => {
    if (message) {
      // message.split('\n').forEach(msg => {
      //   console.log(msg);
      // })
    }
  }, [message]);

  const sendMessage = useCallback(() => {
    ws.send("new 1");
    getMap();
  }, []);

  const getMap = useCallback(() => {
    ws.send("map");
  }, []);

  const rotate = (x: number,y: number) =>{
    ws.send(`rotate ${x} ${y}`);
    getMap();
  }

  const verifySolution = useCallback(() => {
    ws.send("verify");
    getMap();
  } , []);  


  return (
    <>
      <button onClick={sendMessage}>new</button>
      <button onClick={getMap}>map</button>
      <button onClick={verifySolution}>verify</button>
      <div className="container">
        {mapState.map((row: any[], y: number) => (
          <div className="row">
            {row.map((cell, x: number) => (
              <div className="cell" onClick={() => rotate(x,y)}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
