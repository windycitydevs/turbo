import {
  createParser,
  ParsedEvent,
  ReconnectInterval
} from "eventsource-parser";

export async function FlexibleEdgeReadStream() {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  const res = await fetch(
    new URL("../../../public/hero.avif", import.meta.url),
    {
      headers: {
        "Content-Type": "image/avif"
      },
      method: "GET"
    }
  );

  const stream = new ReadableStream({
    async start(controller) {
      // cb
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          if (!data) {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json;
            console.log(text || "no text here");
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (err) {
            // parse on error
            controller.error(err);
          }
        }
      }
      // stream response (SSE) from OpenAI may be fragmented into multiple chunks
      // this ensures we properly read chunks and invoke an event for each SSE event stream
      const parser = createParser(onParse);
      // https://web.dev/streams/#asynchronous-iteration
      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    }
  });
  return stream;
}