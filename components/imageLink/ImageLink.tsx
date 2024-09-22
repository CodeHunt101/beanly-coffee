import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ImageLinkProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  ariaLabel?: string;
};

const ImageLink = ({ href, src, alt, ariaLabel }: ImageLinkProps) => (
  <Link href={href} aria-label={ariaLabel} rel="noopener noreferrer">
    <Image src={src} alt={alt} />
  </Link>
);

export default ImageLink;
