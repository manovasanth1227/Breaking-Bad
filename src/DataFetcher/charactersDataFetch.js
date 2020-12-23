import { useReducer, useEffect } from "react";
import axios from "axios";
const BASEURL = "https://www.breakingbadapi.com/api/characters";

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

export default function useFetchCharaters(page, offset, search) {
  const [state, dispatch] = useReducer(reducer, { data: {}, loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: "Data-Request" });
    axios
      .get(BASEURL, {
        cancelToken: cancelToken.token,
        params: {
          limit: 10,
          offset: Number((page - 1) * 10),
          name: `${search}`,
        },
      })
      .then((res) => {
        dispatch({ type: "Data-Success", payload: { data: res.data } });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: "Data-Fail", payload: { error: err } });
      });

    return () => cancelToken.cancel();
  }, [page, offset, search]);
  return state;
}
