import type { FC, PropsWithChildren } from "react";

export const Hero: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "relative mb-[4rem] bg-[rgb(0,0,0)]/[0.34] xl:mx-auto xl:justify-center"
      }>
      <div className='absolute inset-0'>
        {children ?? "hmmm"}
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-[rgb(0,0,0)]/[0.34]
      mix-blend-multiply'
        />
      </div>
      <div
        className='font-kaisei-tokumin relative mx-auto origin-center py-28
    px-4 align-middle'>
        <h1>Hero GIF from the EDGE</h1>
        <h3
          className='absolute top-0 font-normal uppercase
      tracking-[4.5px] text-white'>
          <span className='lg:relative lg:-bottom-6'>
            {"There are many paths to impact patients' lives."}&nbsp;
            <em>{"Find yours."}</em>
          </span>
        </h3>
        <div
          className='absolute top-6 mb-6 max-w-4xl text-[0.85rem]
      font-light tracking-[1.25px] text-white'></div>
      </div>
      <div className='absolute inset-x-0 h-1/2 min-h-full min-w-full' />
    </div>
  );
};

/**
 .root {
  @apply relative mb-[4rem] bg-[rgb(0,0,0)]/[0.34];
  & > *:nth-child(2n + 1) {
    @apply absolute inset-0;
    & > *:nth-child(2n + 1) {
      & > img {
        @apply h-[43.5vh] w-full object-contain;
      }
    }
    & > *:nth-child(2n + 2) {
      @apply absolute inset-0 bg-[rgb(0,0,0)]/[0.34]
      mix-blend-multiply;
    }
  }
  & > *:nth-child(2n + 2) {
    @apply relative mx-auto origin-center py-28 px-4
    align-middle font-kaisei-tokumin;
    & > *:nth-child(3n + 1) {
      @apply absolute top-0 font-normal uppercase
      tracking-[4.5px] text-white;
    }
    & > *:nth-child(3n + 2) {
      @apply absolute top-6 mb-6 max-w-4xl text-[0.85rem]
      font-light tracking-[1.25px] text-white;
    }
    & > *:nth-child(3n + 3) {
      @apply absolute inset-x-0 h-1/2 min-h-full min-w-full;
    }
  }
}

@screen 3xs {
  .root {
    & > *:nth-child(2n + 2) {
      & > *:nth-child(3n + 1) {
        @apply text-[1rem];
      }
      & > *:nth-child(3n + 2) {
        @apply text-[0.9rem];
      }
    }
  }
}

@screen xs {
  .root {
    & > *:nth-child(2n + 2) {
      & > *:nth-child(3n + 1) {
        @apply text-[1.25rem];
      }
      & > *:nth-child(3n + 2) {
        @apply max-w-[80vw];
      }
    }
  }
}

@screen smxs {
  .root {
    & > *:nth-child(2n + 2) {
      & > *:nth-child(3n + 2) {
        @apply max-w-[90vw];
      }
    }
  }
}

@screen sm {
  .root {
    @apply min-h-[43.5vh];
    & > *:nth-child(2n + 2) {
      @apply px-6 py-48;
      & > *:nth-child(3n + 1) {
        @apply text-[2.5rem];
      }
      & > *:nth-child(3n + 2) {
        @apply top-14 max-w-none text-[1.5rem];
      }
    }
  }
}

@screen lg {
  .root {
    @apply mb-[32px] max-w-[2770px];
    & > *:nth-child(2n + 2) {
      @apply top-[50%] max-w-8xl py-48 px-8;
      & > *:nth-child(3n + 1) {
        @apply top-10 text-[3rem];
      }
      & > *:nth-child(3n + 2) {
        @apply top-20 leading-[2rem];
      }
    }
  }
}

@screen xl {
  .root {
    @apply mx-auto justify-center;
    & > *:nth-child(2n + 1) {
      & > *:nth-child(2n + 1) {
        @apply object-center;
      }
    }
  }
}
 */
