import ButtonLink from "@/components/buttons/ButtonLink";

type BaseHeroProps = {
  title: string;
  description: string;
  styles?: {
    content: string;
    title: string;
    description: string;
  };
};

type HeroPropsWithoutLink = BaseHeroProps & {
  linkButton: false;
};

type HeroPropsWithLink = BaseHeroProps & {
  linkButton: true;
  linkButtonContent: string;
};

type HeroProps = HeroPropsWithoutLink | HeroPropsWithLink;

const Hero = ({
  title,
  description,
  linkButton,
  styles,
  ...props
}: HeroProps) => {
  return (
    <div className={styles?.content}>
      <h1 className={`${styles?.title} ff-serif`}>{title}</h1>
      <p className={`${styles?.description} fw-300`}>{description}</p>
      {linkButton && (
        <ButtonLink href="/create-plan">
          {" "}
          {(props as HeroPropsWithLink).linkButtonContent}
        </ButtonLink>
      )}
    </div>
  );
};

export default Hero;
