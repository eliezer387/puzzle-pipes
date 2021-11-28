import React from "react";
import {
  clearValidation,
  getCommand,
  getDifficulty,
  getMapState,
  getShowError,
  getValidation,
  setDifficulty,
  setMap,
  setRotation,
  setValidation,
  setValidationError,
  store,
} from "../store";

describe("redux store", () => {
  it("should be defined", () => {
    expect(store).toBeDefined();
  });

  test("should have a default state", () => {
    expect(store.getState()).toEqual({
      difficulty: 1,
      command: "new 1",
      map: [[]],
      validation: "",
      showError: false,
    });
  });

  it("should set difficulty", () => {
    store.dispatch(setDifficulty(2));
    const state = store.getState();
    expect(getDifficulty(state)).toEqual(2);
  });

  it("should set map", () => {
    store.dispatch(setMap([["1", "2", "3"]]));
    const state = store.getState();
    expect(getMapState(state)).toEqual([["1", "2", "3"]]);
  });

  it("should set command", () => {
    store.dispatch({ type: "SET_COMMAND", payload:"new 1"});
    const state = store.getState();
    expect(getCommand(state)).toEqual("new 1");
  });

  it("should set validation", () => {
    store.dispatch(setValidation("validate"));
    const state = store.getState();
    expect(getValidation(state)).toEqual("validate");
  });

  it("should set showError", () => {
    store.dispatch(setValidationError(true));
    const state = store.getState();
    expect(getShowError(state)).toEqual(true);
  });

  it("should set rotation", () => {
    store.dispatch(setRotation("rotate 1 1"));
    const state = store.getState();
    expect(getCommand(state)).toEqual("rotate 1 1");
  });

  it("should clear validation", () => {
    store.dispatch(clearValidation());
    const state = store.getState();
    expect(getValidation(state)).toEqual("");
  });
});
