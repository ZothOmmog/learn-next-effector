import { useEvent } from "effector-react/scope";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { redirect, callFetch } from "../src/redirect";

export default function Other() {
  const callFetchEvent = useEvent(callFetch);
  const router = useRouter();

  useEffect(() => {
    const unsub = redirect.watch(() => {
      router.push("/");
    });
    return unsub;
  });

  return (
    <div>
      <h1>Redirect on action</h1>
      <button onClick={callFetchEvent}>call fx</button>
    </div>
  );
}
