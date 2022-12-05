import { createEvent, createEffect, restore, attach, forward } from "effector";

import { debug } from "patronum/debug";

export const attachRouter = createEvent();
const $router = restore(attachRouter, null);

const pushFx = attach({
  source: $router,
  effect: (router, param) => router.push(param)
});

export const callFetch = createEvent();

const fxFetch = createEffect(() => Promise.resolve(1));

forward({ from: callFetch, to: fxFetch });

forward({ from: fxFetch.done, to: pushFx.prepend(() => "/") });

debug(attachRouter, $router, callFetch, fxFetch, pushFx);
