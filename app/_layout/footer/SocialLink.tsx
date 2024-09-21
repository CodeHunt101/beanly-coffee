import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type SocialLinkProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  ariaLabel?: string;
};

const SocialLink = ({ href, src, alt, ariaLabel }: SocialLinkProps) => (
  <li>
    <Link href={href} aria-label={ariaLabel} rel="noopener noreferrer">
      <Image src={src} alt={alt} />
    </Link>
  </li>
);

export default SocialLink;
