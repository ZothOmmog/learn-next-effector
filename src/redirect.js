import { createEffect, createEvent, forward } from "effector";

export const redirect = createEvent();
export const callFetch = createEvent();

export const fxFetch = createEffect(() => Promise.resolve(1));

forward({ from: callFetch, to: fxFetch });

forward({ from: fxFetch.done, to: redirect });
