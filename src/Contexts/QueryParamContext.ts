import { createContext } from "react";

type QParamContext = { query: object; setQuery: (query: object) => void };
const QueryParamContext = createContext<QParamContext>({} as QParamContext);

export default QueryParamContext;
