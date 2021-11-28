import React, { useContext, useEffect } from "react";
import "./App.css";
import { DifficultyOptions } from "./model/model";
import { useDispatch, useSelector } from "react-redux";
import { setDifficulty, getMapState, getCommand, getShowError, getValidation, setValidationError, clearValidation } from "./redux/store";
import { WebSocketContext } from "./context/websocket";
import { Button, Dropdown, Grid, } from "./components";

function App() {
  const mapState = useSelector(getMapState);
  const comandNew = useSelector(getCommand);
  const showError = useSelector(getShowError);
  const validate = useSelector(getValidation)
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);


  useEffect(() => {
    if(validate === "Incorrect."){
      dispatch(setValidationError(true));
      setTimeout(() => {
        dispatch(setValidationError(false));
        dispatch(clearValidation());
      }
      , 3000);
    } else {
      // alert("You won!");
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
    const handledifficulty = (e: any) => dispatch(setDifficulty(e.target.value));
    return (
      <div className="control-options">
        <Dropdown options={DifficultyOptions} change={handledifficulty} />
        <Button onClick={() => newGame()}>New Game</Button>
        <Button onClick={() => verifySolution()}>Verify</Button>
      </div>
    );
  };

  return (
    <>
      <Controls />
      {showError && <div className="error">Incorrect</div>}
      <Grid elements={mapState} rotate={rotate} />
    </>
  );
}

export default App;
