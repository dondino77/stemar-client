import { getCantieri } from "../../reducers/cantieri";
import { getMezzi } from "../../reducers/mezzi";
import { getPersonale } from "../../reducers/personale";
import { useAppDispatch } from "../../store";

function useHomeHook() {
  const dispatch = useAppDispatch();

  return {
    getCantieri: () => dispatch(getCantieri()),
    getPersonale: () => dispatch(getPersonale()),
    getMezzi: () => dispatch(getMezzi()),
  };
}

export default useHomeHook;
