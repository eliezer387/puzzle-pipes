import { createStore } from "redux";
import { Difficulty } from "../model/model";
import { actions } from "./actions";

const { SET_DIFFICULTY, SET_MAP, SET_COMMAND, SET_VALIDATION, SET_ROTATION, SHOW_ERROR, CLEAR_VALIDATION } =
  actions;

export const initialState = {
  difficulty: Difficulty.Easy,
  command: "new 1",
  map: [[]],
  validation: "",
  showError: false,
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
        command: setDifficultyCommand(action.payload),
      };

    case SET_MAP:
      return { ...state, map: action.payload };

    case SET_COMMAND:
      return { ...state, command: action.payload };

    case SET_VALIDATION:
      return { ...state, validation: action.payload };

    case SET_ROTATION:
      return { ...state, command: action.payload };

    case SHOW_ERROR:
      return { ...state, showError: action.payload };
    
    case CLEAR_VALIDATION: 
      return { ...state, validation: "" };

    default:
      return state;
  }
}

const setDifficultyCommand = (difficulty: Difficulty) => {
  return `new ${difficulty}`;
};

//action creators
export const setDifficulty = (difficulty: Difficulty) => {
  return { type: SET_DIFFICULTY, payload: difficulty };
};

export const setMap = (map: string[][]) => {
  return { type: SET_MAP, payload: map };
};

export const setValidation = (validation: string) => {
  return { type: SET_VALIDATION, payload: validation };
};

export const setRotation = (command: string) => {
  return { type: SET_ROTATION, payload: command };
}

export const setValidationError = (show: boolean) => {
  return { type: SHOW_ERROR, payload: show };
}

export const clearValidation = () => {
  return { type: CLEAR_VALIDATION };
}

// selectors
export const getDifficulty = (state: any) => state.difficulty;
export const getMapState = (state: any) => state.map;
export const getCommand = (state: any) => state.command;
export const getShowError = (state: any) => state.showError;
export const getValidation = (state: any) => state.validation;
export const getNewGameCommand = (state: any) => `new ${state.difficulty}`;

export const store = createStore(reducer);
