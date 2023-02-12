import { ArrowRightIcon } from "@heroicons/react/outline";

export const ExternalLink = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target={"_blank"}
      rel='noopener noreferrer'
      className='inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white'>
      <div>{children}</div>
      <ArrowRightIcon className='block w-4' />
    </a>
  );
};
