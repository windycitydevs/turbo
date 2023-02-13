import { Container, LoadingDots } from "@windycitydevs/ui";
import Link from "next/link";

export default function AlertBanner({
  preview,
  loading
}: {
  preview?: boolean;
  loading?: boolean;
}) {
  if (!preview) return <></>;
  return (
    <div className='border-accent-7 bg-accent-7 font-gotham border-b text-white'>
      <Container El='div' clean loading={loading}>
        <div className='py-2 text-center text-sm'>
          {loading ? (
            <LoadingDots className='skeleton' />
          ) : (
            "This page is a preview. "
          )}
          <Link
            href={"/api/exit-preview"}
            className='hover:text-takeda-red underline transition-colors duration-200'>
            {"Click here"}
          </Link>
          &nbsp;{"to exit preview mode."}
        </div>
      </Container>
    </div>
  );
}
