import { shape, string, arrayOf, number } from "prop-types";

const TrialWord = (props, propName, componentName) => {
  const error = (detail) =>
    new Error(
      `Invalid prop \`${propName}\`: expected a tuple [char, status] (${detail})`
    );
  const value = props[propName];
  if (!value) return error("got falsie");
  if (value.length !== 2) return error("not an array, or length ≠ 2");
  const [char, status] = value;
  if (typeof char !== "string")
    return error("first element should be a string");
  if (char.length !== 1)
    return error("first element should be a single character");
  if (status !== 0 && status !== 1 && status !== 2)
    return error("second element should be a status 0, 1, or 2");
};

export const Trial = shape({
  name: string.isRequired,
  word: arrayOf(TrialWord).isRequired,
});

export const Score = shape({
  name: string.isRequired,
  score: number.isRequired,
});

export const Game = shape({
  trials: arrayOf(Trial),
  scores: arrayOf(Score),
  wordLength: number.isRequired,
});
