import { LandingPage, landingMetadata } from "@/components/seo/landing-page";
import { landingPages } from "@/data/landing-pages";

const page = landingPages["lifetime-billing-software"];

export const metadata = landingMetadata(page);

export default function Page() {
  return <LandingPage page={page} />;
}
