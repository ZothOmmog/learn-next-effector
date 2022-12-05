import { serialize } from "effector";
import { Provider } from "effector-react/scope";

import { useScope } from "../src/useScope";

export default function App({ Component, pageProps }) {
  const scope = useScope(pageProps.initialState);
  console.log(serialize(scope));
  return (
    <Provider value={scope}>
      <Component {...pageProps} />
    </Provider>
  );
}
