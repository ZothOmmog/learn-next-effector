import { useEvent } from "effector-react/scope";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { attachRouter, callFetch } from "../src/attachRouter";

export default function Other() {
  const attachRouterEvent = useEvent(attachRouter);
  const callFetchEvent = useEvent(callFetch);
  const router = useRouter();

  useEffect(() => {
    attachRouterEvent(router);
    return () => attachRouterEvent(null);
  }, [router, attachRouterEvent]);

  return (
    <div>
      <h1>Redirect on action</h1>
      <button onClick={callFetchEvent}>call fx</button>
    </div>
  );
}
