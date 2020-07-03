export const initialState = {
  username: null, // string (null if not authenticated, otherwise user's name)
  token: null, // string (idem username)
  loading: false, // is App loading (auto-login)?
  game: {
    scores: [], // Array<{ name: string, score: number }>
    trials: [], // Array<{ name: string, word: Array<[ letter: char, status: 0|1|2 ]> }
    wordLength: null, // number
    inputDisabled: false, // bool
  },
};

/*
{
  type: 'LOGIN',
  payload: {
    username: 'Nicolas'
  },
}
*/

export const reducer = (state, action) => {
  switch (action.type) {
    /*
      // FORBIDDEN!!! → READONLY
      state.username = action.payload.username;
      return state;
    */
    case "LOGIN":
      return {
        ...state,
        username: action.payload.username,
        token: action.meta.token,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };

    case "SET_SCORES":
      return {
        ...state,
        game: {
          ...state.game,
          scores: action.payload.scores,
        },
      };

    case "SET_TRIALS":
      return {
        ...state,
        game: {
          ...state.game,
          trials: action.payload.trials,
        },
      };

    case "SET_WORDLENGTH":
      return {
        ...state,
        game: {
          ...state.game,
          wordLength: action.payload.wordLength,
        },
      };

    case "SET_INPUT_DISABLED":
      return {
        ...state,
        game: {
          ...state.game,
          inputDisabled: action.payload.disabled,
        },
      };

    case "ADD_TRIAL":
      // FORBIDDEN! state.game.trials.push(action.payload.trial);
      // Immutable.js → return state.setIn(
      //   ["game", "trials"],
      //   state.game.trials.push(action.payload.trial)
      // );
      // ES6
      return {
        ...state,
        game: {
          ...state.game,
          trials: [...state.game.trials, action.payload.trial],
        },
      };

    default:
      return state;
  }
};
