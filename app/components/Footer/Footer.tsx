import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://twitter.com",
    width: 14,
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Image
              src="/images/Logo/icon-enersol.png"
              alt="logo"
              width={56}
              height={56}
            />
            <Link href="/" className="text-2xl font-semibold text-black ml-4">
              Enersol Energia Solar.
            </Link>
          </div>
          <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
            {" "}
            Acompanhe-nos em nossas redes <strong>Sociais.</strong>
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CLOUMN-2/3/4 */}
      </div>

      {/* All Rights Reserved */}

      <div className="py-10 md:flex items-center  border-t border-t-bordertop">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          Enersol©. All Rights Reserved by{" "}
          <Link href="https://alexandre.agency/" target="_blank">
            {" "}
            Alexandre Brasil
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default footer;
