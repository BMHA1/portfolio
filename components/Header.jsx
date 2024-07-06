import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
// import { useTranslation } from 'next-i18next';

const Header = () => {
  // const { t } = useTranslation('common');
  // console.log(t('contact-here'));;
  return (
    <header className="px-8 xl:py-12 text-white ">
      <div className="container mx-auto justify-between items-center">
        {/* {logo} */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Brajin Hanna<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* {desktop Nav} */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Contactame</Button>
          </Link>
        </div>
        {/* {mobile Nav} */}
        <div className="xl:hidden">
          <Nav />
          <Link href={"/contact"}>
            <Button>Contactameeeee</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
