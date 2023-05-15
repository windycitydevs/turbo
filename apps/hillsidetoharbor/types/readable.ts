export interface ReadableStream<TChunk> {
  getReader(): ReadableStreamDefaultReader<TChunk>;
  readonly locked: boolean;
  [Symbol.asyncIterator](): AsyncIterator<TChunk>;
  cancel(reason?: any): Promise<void>;
  pipeTo(
    destination: WritableStream<TChunk>,
    options?: StreamPipeOptions
  ): Promise<void>;
  pipeThrough<TChunk2>(
    transform: ReadableWritablePair<TChunk2, TChunk>,
    options?: StreamPipeOptions
  ): ReadableStream<TChunk2>;
  tee(): [ReadableStream<TChunk>, ReadableStream<TChunk>];
}

export interface StreamPipeOptions {
  signal?: AbortSignal;
  preventClose?: boolean;
  preventAbort?: boolean;
  preventCancel?: boolean;
}

export interface ReadableStreamGenericReader {
  readonly closed: Promise<undefined>;
  cancel(reason?: any): Promise<void>;
}

export interface ReadableStreamDefaultReader<TChunk>
  extends ReadableStreamGenericReader {
  releaseLock(): void;
  read(): Promise<ReadableStreamReadResult<TChunk>>;
}

export interface ReadableStreamReadResult<TChunk> {
  done: boolean;
  value: TChunk | undefined;
}

export async function* getAsyncIterableFor<TChunk>(
  readableStream: ReadableStream<TChunk>
) {
  const reader = readableStream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
