import React, { useCallback, useContext, useEffect } from "react";
import "./App.css";
import { DifficultyOptions } from "./model/model";
import { useDispatch, useSelector } from "react-redux";
import { setDifficulty, getMapState, getCommand, getShowError, getValidation, setValidationError, clearValidation } from "./redux/store";
import { WebSocketContext } from "./context/websocket";
import Button from "./components/button";

function App() {
  const mapState = useSelector(getMapState);
  const comandNew = useSelector(getCommand);
  const showError = useSelector(getShowError);
  const validate = useSelector(getValidation)
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);


  useEffect(() => {
    console.log(validate);
    if(validate=== "Incorrect."){
      dispatch(setValidationError(true));
      setTimeout(() => {
        dispatch(setValidationError(false));
        dispatch(clearValidation());
      } , 3000);
    }
  },[validate])

  const newGame = () => {
    ws.send(comandNew);
    getMap();
  };

  const getMap = () => {
    ws.send("map");
  };

  const rotate = (x: number, y: number) => {
    ws.send(`rotate ${x} ${y}`);
    getMap();
  };

  const verifySolution = () => {
    ws.send("verify");
    getMap();
  };

  const Controls = () => {
    return (
      <div className="control-options">
        <select
          name="difficulty"
          onChange={(event: any) => {
            dispatch(setDifficulty(event.target.value));
          }}
        >
          {DifficultyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Button onClick={() => newGame()}>New Game</Button>
        <Button onClick={() => verifySolution()}>Verify</Button>
      </div>
    );
  };

  return (
    <>
      <Controls />
      {showError && <div className="error">Incorrect</div>}
      <div className="container">
        {mapState.map((row: any[], y: number) => (
          <div className="row">
            {row.map((cell, x: number) => (
              <div className="tiles" onClick={() => rotate(x, y)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
