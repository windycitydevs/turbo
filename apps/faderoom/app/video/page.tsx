import { ExternalLink } from "@/ui/ExternalLink";

export default function Page() {
  return (
    <div className='space-y-4'>
      <h1 className='text-xl font-medium text-gray-400/80'>
        Streaming Runtimes: Edge vs Node vs Client
      </h1>
      <div className='space-y-4'>
        <ul className='list-disc space-y-2 pl-4 text-sm text-gray-300'>
          <li>
            In this route, the video playing in the header is being served from
            the edge route `/api/edge-video` -- whereas the video below is a
            client-side react component.
          </li>
          <li>
            Why is the (updated soon) smaller video a client side component? because to use the
            intersection observer library you must utilize the `useRef` hook.
          </li>
          <li>
            useRef Hooks are by nature strictly for client-side use. Refs should
            never be triggered during render time but should always be used
            outside of render time. Why? Refs silently update the DOM without
            any rerenders or undesirable UI/UX side effects. You can think of
            them as the ninjas of react.
          </li>
        </ul>
      </div>
      <div>
        <ExternalLink href='#'>View the Code</ExternalLink>
      </div>
    </div>
  );
}
