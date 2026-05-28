import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo-json-ld";

export function SiteJsonLd() {
  return <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />;
}
