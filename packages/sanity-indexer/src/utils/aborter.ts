export class MockAbortController {
  _signal = { aborted: false };
  get signal() {
    return this._signal as AbortSignal;
  }
  abort() {
    this._signal.aborted = true;
  }
}

export function getAborter():
  | InstanceType<typeof MockAbortController>
  | InstanceType<typeof AbortController> {
  return typeof AbortController === "undefined"
    ? new MockAbortController()
    : new AbortController();
}
