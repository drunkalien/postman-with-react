import { createContext } from "react";

type QParamContext = { query: string; setQuery: (query: string) => void };
const QueryParamContext = createContext<QParamContext>({} as QParamContext);

export default QueryParamContext;
