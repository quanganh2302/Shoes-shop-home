import { cn } from "@/lib/utils";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import { Input } from "@/components/ui/input";
import {
  SendHorizontal,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Apple from "@/public/images/apple.svg";
import Google from "@/public/images/google.svg";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("bg-black", className)}>
      <div className="hidden xl:flex items-start justify-between py-16 container text-primary-foreground/60 gap-12">
        <div className="flex flex-col items-start justify-start w-1/3">
          <h4 className={cn("text-primary-foreground mb-4", textStyle.h3)}>
            Lucas
          </h4>
          <p
            className={cn(
              textStyle.base,
              "mb-2 font-semibold text-primary-foreground"
            )}
          >
            Get on the list
          </p>
          <p className={cn(textStyle.sm, "mb-1")}>
            Subscribe for early access, exclusive discounts and partnerships
          </p>
          <div
            className={cn(
              "w-full border-gray border rounded-sm flex items-center justify-between bg-none mt-4"
            )}
          >
            <Input
              placeholder={"Enter your email"}
              className="border-none placeholder:text-gray/60 bg-transparent grow font-futura"
            />
            <SendHorizontal className="transition-all duration-300 w-6 h-6 grow text-gray/60 cursor-pointer hover:text-primary mr-2" />
          </div>
        </div>
        <div className="grow flex items-start justify-between gap-8">
          <div className="flex flex-col items-start justify-start w-1/3">
            <h4
              className={cn(
                "text-primary-foreground mb-4 font-semibold",
                textStyle.base
              )}
            >
              Contact Me
            </h4>
            <div className="flex items-center justify-start gap-2 mb-2">
              <MapPin />
              <p className={cn(textStyle.base)}>Hadong, Hanoi, Vietnam.</p>
            </div>
            <div className="flex items-center justify-start gap-2 mb-2">
              <Mail />
              <p className={cn(textStyle.base)}>anh.doanquang98@gmail.com</p>
            </div>
            <div className="flex items-center justify-start gap-2 mb-2">
              <Phone />
              <p className={cn(textStyle.base)}>84+968-965-109</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-1/6">
            <h4
              className={cn(
                "text-primary-foreground mb-4 font-semibold",
                textStyle.base
              )}
            >
              Quick Link
            </h4>
            <ul>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start w-1/6">
            <h4
              className={cn(
                "text-primary-foreground mb-4 font-semibold",
                textStyle.base
              )}
            >
              Company
            </h4>
            <ul>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Terms Of Use
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    textStyle.base,
                    "hover:text-primary transition-all duration-300"
                  )}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start w-1/3">
            <h4
              className={cn(
                "text-primary-foreground mb-4 font-semibold",
                textStyle.base
              )}
            >
              Download App
            </h4>
            <p className={cn(textStyle.sm, "text-gray")}>
              Save $3 with App New User Only
            </p>
            <div className="flex items-center justify-between w-full gap-2">
              <img
                className="border rounded-sm border-gray w-1/2 h-[40px] my-2"
                src={Apple.src}
                alt="apple"
              />
              <img
                className="border rounded-sm border-gray w-1/2 h-[40px]"
                src={Google.src}
                alt="google"
              />
            </div>
            <div className="flex items-center justify-between gap-4 mt-4">
              <Link
                className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                href={"https://www.facebook.com/quanganh.dev/"}
              >
                <Facebook className="stroke-1" />
              </Link>
              <Link
                className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                href={"https://www.facebook.com/quanganh.dev/"}
              >
                <Github className="stroke-1" />
              </Link>
              <Link
                className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                href={"https://www.facebook.com/quanganh.dev/"}
              >
                <Instagram className="stroke-1" />
              </Link>
              <Link
                className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                href={"https://www.facebook.com/quanganh.dev/"}
              >
                <Linkedin className="stroke-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:hidden w-full text-primary-foreground/60 py-10 container flex-col items-center justify-start gap-4">
        <Accordion
          className="w-full border border-gray/40 px-2 rounded-sm"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="no-underline hover:no-underline text-primary-foreground">
              Get on the list
            </AccordionTrigger>
            <AccordionContent className="">
              <p className={cn(textStyle.sm, "mb-1")}>
                Subscribe for early access, exclusive discounts and partnerships
              </p>
              <div
                className={cn(
                  "border-gray border rounded-sm flex items-center justify-between bg-none mt-4 w-8/12"
                )}
              >
                <Input
                  placeholder={"Enter your email"}
                  className="border-none placeholder:text-gray/60 bg-transparent grow font-futura"
                />
                <SendHorizontal className="transition-all duration-300 w-6 h-6 grow text-gray/60 cursor-pointer hover:text-primary mr-2" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          className="w-full border border-gray/40 px-2 rounded-sm"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="no-underline hover:no-underline text-primary-foreground">
              Contact Me
            </AccordionTrigger>
            <AccordionContent className="">
              <div className="flex items-center justify-start gap-2 mb-2">
                <MapPin />
                <p className={cn(textStyle.base)}>Hadong, Hanoi, Vietnam.</p>
              </div>
              <div className="flex items-center justify-start gap-2 mb-2">
                <Mail />
                <p className={cn(textStyle.base)}>anh.doanquang98@gmail.com</p>
              </div>
              <div className="flex items-center justify-start gap-2 mb-2">
                <Phone />
                <p className={cn(textStyle.base)}>84+968-965-109</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          className="w-full border border-gray/40 px-2 rounded-sm"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="no-underline hover:no-underline text-primary-foreground">
              Quick Link
            </AccordionTrigger>
            <AccordionContent className="">
              <ul>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          className="w-full border border-gray/40 px-2 rounded-sm"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="no-underline hover:no-underline text-primary-foreground">
              Company
            </AccordionTrigger>
            <AccordionContent className="">
              <ul>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className={cn(
                      textStyle.base,
                      "hover:text-primary transition-all duration-300"
                    )}
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          className="w-full border border-gray/40 px-2 rounded-sm"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="no-underline hover:no-underline text-primary-foreground">
              Download App
            </AccordionTrigger>
            <AccordionContent className="">
              {" "}
              <p className={cn(textStyle.sm, "text-gray")}>
                Save $3 with App New User Only
              </p>
              <div className="flex flex-col items-start justify-center w-full gap-2">
                <img
                  className="border rounded-sm border-gray w-[160px] h-[40px] my-2"
                  src={Apple.src}
                  alt="apple"
                />
                <img
                  className="border rounded-sm border-gray w-[160px] h-[40px]"
                  src={Google.src}
                  alt="google"
                />
              </div>
              <div className="flex items-center justify-between gap-4 mt-4 w-4/12">
                <Link
                  className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                  href={"https://www.facebook.com/quanganh.dev/"}
                >
                  <Facebook className="stroke-1" />
                </Link>
                <Link
                  className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                  href={"https://www.facebook.com/quanganh.dev/"}
                >
                  <Github className="stroke-1" />
                </Link>
                <Link
                  className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                  href={"https://www.facebook.com/quanganh.dev/"}
                >
                  <Instagram className="stroke-1" />
                </Link>
                <Link
                  className="hover:text-primary hover:-translate-y-2 transition-all duration-300"
                  href={"https://www.facebook.com/quanganh.dev/"}
                >
                  <Linkedin className="stroke-1" />
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Footer;
