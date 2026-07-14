import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="brand-mark">
          <Image
            src="/brand/wecare-leadership-conference-logo-nav.png"
            alt="WeCare Leadership Conference"
            width={1413}
            height={526}
            className="brand-logo footer-logo"
          />
        </Link>
        <p>{siteConfig.organizer}</p>
      </div>
      <address>
        <a href={`mailto:${siteConfig.email}`}>
          <Mail aria-hidden="true" /> {siteConfig.email}
        </a>
        <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
          <Phone aria-hidden="true" /> {siteConfig.phone}
        </a>
      </address>
      <div className="footer-meta">
        <p>Partnership conversations are welcome for institutional support, media, technical assistance and follow-on opportunities.</p>
        <Link href="/partners" className="footer-link">
          Partner with WLIMP
        </Link>
      </div>
      <small className="footer-copyright">
        Copyright {new Date().getFullYear()} WeCare Centre for Community Awareness and Empowerment Initiative.
      </small>
    </footer>
  );
}
