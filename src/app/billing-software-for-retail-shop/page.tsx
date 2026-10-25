import { LandingPage, landingMetadata } from "@/components/seo/landing-page";
import { landingPages } from "@/data/landing-pages";

const page = landingPages["billing-software-for-retail-shop"];

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage page={page} />;
}
