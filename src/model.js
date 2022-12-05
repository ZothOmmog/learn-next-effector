import {
  sample,
  scopeBind,
  createStore,
  createEvent,
  createEffect
} from "effector";
import { debug } from "patronum/debug";

function timeString(lastUpdate) {
  const pad = (n) => (n < 10 ? `0${n}` : n);
  const format = (t) =>
    `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
      t.getUTCSeconds()
    )}`;
  return format(new Date(lastUpdate));
}

function noop() {}

export const $lastUpdate = createStore(0);
export const $light = createStore(false);
const $timerId = createStore(null);

export const $timeString = $lastUpdate.map(timeString);

export const update = createEvent();
export const toggleLight = createEvent();
export const stopTimer = createEvent();

const fxStart = createEffect(() => {
  const callUpdate = scopeBind(update);
  const callToggleLight = scopeBind(toggleLight);
  return setInterval(() => {
    callUpdate(Date.now());
    callToggleLight();
  }, 1000);
});

export const start = fxStart.prepend(noop);

$lastUpdate.on(update, (_, newState) => newState);
$timerId.on(fxStart.doneData, (_, timerId) => timerId);
$light.on(toggleLight, (state) => !state);

sample({
  source: $timerId,
  clock: stopTimer,
  fn: clearInterval
});

// debug(start, update, toggleLight, fxStart, $lastUpdate, $light, $timeString);
