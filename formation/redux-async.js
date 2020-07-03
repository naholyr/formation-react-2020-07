import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

// TODO action creators

// Component
export const LoadingButton = () => {
  const { loading, result, error } = useSelector((state) => state.x);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "X",
      payload: { request: { url: "http://google.fr" } },
    });

    // Objectif: se passer du code suivant (et des action creators)
    dispatch(startRequest());
    Axios.get("http://google.fr")
      .then((result) => {
        dispatch(successResult(result));
      })
      .catch((error) => {
        dispatch(errorResult(error.message));
      });
  };

  if (loading) {
    return <button disabled>Loading…</button>;
  }

  if (error) {
    return (
      <>
        <div className="error">Failed: {error}</div>
        <button onClick={handleClick}>Restart</button>
      </>
    );
  }

  if (result) {
    return <p>OK: {result}</p>;
  }

  return <button onClick={handleClick}>Start</button>;
};

// Initial state
export const initialState = {
  x: {
    loading: false,
    result: null,
    error: null,
  },
};

// Reducer (= mutations)
export const reducer = (state, action) => {
  switch (action.type) {
    case "X_START":
      return { ...state, x: { loading: true, result: null, error: null } };
    case "X_SUCCESS":
      return {
        ...state,
        x: { loading: false, result: action.payload.result, error: null },
      };
    case "X_ERROR":
      return {
        ...state,
        x: { loading: false, result: null, error: action.payload.error },
      };
    default:
      return state;
  }
};
