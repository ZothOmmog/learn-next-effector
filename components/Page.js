import React from "react";
import Link from "next/link";
import { useUnit } from "effector-react/scope";
import { useEffect } from "react";

import Clock from "./Clock";
import { start, stopTimer } from "../src/model";

const Page = ({ title }) => {
  const startEvent = useUnit(start);
  const stopTimerEvent = useUnit(stopTimer);

  useEffect(() => {
    startEvent();
    return stopTimerEvent;
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <Clock />
      <nav>
        <Link href="/">/index</Link>
        &nbsp;
        <Link href="/ssg">/ssg</Link>
        &nbsp;
        <Link href="/ssr">/ssr</Link>
        &nbsp;
        <Link href="/other">/other</Link>
        &nbsp;
        <Link href="/attach">/attach</Link>
      </nav>
    </div>
  );
};

export default Page;
