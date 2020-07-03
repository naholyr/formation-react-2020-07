export const login = (username, token) => ({
  type: "LOGIN",
  payload: { username },
  meta: { token },
});

export const logout = () => ({
  type: "LOGIN",
  payload: { username: null },
});

export const stopLoading = () => ({
  type: "SET_LOADING",
  payload: { loading: false },
});

export const startLoading = () => ({
  type: "SET_LOADING",
  payload: { loading: true },
});

export const setScores = (scores) => ({
  type: "SET_SCORES",
  payload: { scores },
});

export const setTrials = (trials) => ({
  type: "SET_TRIALS",
  payload: { trials },
});

export const setWordLength = (wordLength) => ({
  type: "SET_WORDLENGTH",
  payload: { wordLength },
});

export const toggleInputDisabled = (disabled) => ({
  type: "SET_INPUT_DISABLED",
  payload: { disabled },
});

export const addTrial = (trial) => ({
  type: "ADD_TRIAL",
  payload: { trial },
});
