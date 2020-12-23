import { useReducer, useEffect } from "react";
import axios from "axios";
const BASEURL = "https://www.breakingbadapi.com/api/quote?author";

const reducer = (state, action) => {
  switch (action.type) {
    case "Data-Request":
      return {
        loading: true,
        data: {},
      };
    case "Data-Success":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case "Data-Fail":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: {},
      };
    default:
      return state;
  }
};

export default function useFetchQuote(name) {
  const [state, dispatch] = useReducer(reducer, { data: {}, loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: "Data-Request" });
    axios
      .get(`${BASEURL}=${name}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        dispatch({ type: "Data-Success", payload: { data: res.data } });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: "Data-Fail", payload: { error: err } });
      });

    return () => cancelToken.cancel();
  }, [name]);
  return state;
}
