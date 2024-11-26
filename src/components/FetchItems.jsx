import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const contoller = new AbortController();
    const signal = contoller.signal;

    dispatch(fetchStatusActions.startFetching);
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions);
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      contoller.abort();
    };
  }, [fetchStatus]);

  return (
   <></>
  );
};

export default FetchItems;
