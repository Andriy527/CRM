import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootReducerType} from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector;