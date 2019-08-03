import { Injectable } from '@angular/core';

export const START = 'START';
export const STOP = 'STOP';
export const RESTART = 'RESTART';
export const RESET = 'RESET';
export const STATE_START = 1;
export const STATE_STOP = 0;
export const STATE_RESET = 3;

@Injectable()
export class TimerActions { }
