import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mainNavItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const registerHref = siteConfig.registrationUrl || "/#register";
  const isExternalRegistration = registerHref.startsWith("http");

  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="WLIMP home">
        <Image
          src="/brand/wecare-leadership-conference-logo-nav.png"
          alt="WeCare Leadership Conference"
          width={1413}
          height={526}
          className="brand-logo"
          priority
        />
      </Link>
      <nav aria-label="Primary navigation">
        {mainNavItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Button asChild variant="secondary" size="default">
          <Link href="/partners">Partner</Link>
        </Button>
        <Button asChild size="default">
          <Link
            href={registerHref}
            className="cta-on-emerald"
            target={isExternalRegistration ? "_blank" : undefined}
            rel={isExternalRegistration ? "noreferrer" : undefined}
          >
            Register
          </Link>
        </Button>
      </div>
    </header>
  );
}
