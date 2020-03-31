import { EventEmitter } from "eventemitter3";

interface GameLoop extends EventEmitter {
  start();
  stop();
  on('tick', (dt: number) => void);
  on('frame', (t: number) => void);
}

function gloop(options?: {
  scale?: number;
  TPS?: number;
}) {}

export = gloop;
