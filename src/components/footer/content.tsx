import { Mail, MailIcon, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="w-11/12 mx-auto text-slate-100 pt-5">
        <div className="mb-5">
          <div className="flex items-center gap-x-5">
            <img src="/images/global/logoApp.png" alt="Logo" className="w-60" />
            <div className="w-0.5 h-14 bg-slate-600" />
            <h3 className="text-lg md:text-xl font-semibold tracking-wider">
              A secure and fast PS2 game download platform
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
            <div>
              <h1 className="mb-3 font-medium text-xl tracking-wide">
                Category
              </h1>
              <ul className="flex flex-col gap-y-2">
                <Link to="#" className="linkFooter">
                  Home
                </Link>
                <Link to="#" className="linkFooter">
                  All Games
                </Link>
                <Link to="#" className="linkFooter">
                  Guide Install
                </Link>
                <Link to="#" className="linkFooter">
                  Contact
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="mb-3 font-medium text-xl tracking-wide">
                Information
              </h1>
              <ul className="flex flex-col gap-y-2">
                <Link to="#" className="linkFooter">
                  Privacy Policy
                </Link>
                <Link to="#" className="linkFooter">
                  Terms of Service
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="mb-3 font-medium text-xl tracking-wide">
                Contact Us
              </h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-3 items-center">
                  <PhoneCall className="size-5" />
                  <h3>0896-3712-9854</h3>
                </li>
                <li className="flex gap-x-3 items-center">
                  <Mail className="size-5" />
                  <Link
                    to="mailto:support@letsPlayPS2.com"
                    className="linkFooter"
                  >
                    support@letsPlay.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mb-3 font-medium text-xl tracking-wide">
                Follow Us
              </h1>
              <ul className="grid grid-cols-3 md:grid-cols-4 place-items-center gap-5">
                <Link to="">
                  <img
                    src="/images/footer/facebook.png"
                    alt="Facebook"
                    className="imgFooterSocialMedia"
                  />
                </Link>
                <Link to="">
                  <img
                    src="/images/footer/x.png"
                    alt="X"
                    className="imgFooterSocialMedia"
                  />
                </Link>

                <Link to="">
                  <img
                    src="/images/footer/instagram.png"
                    alt="Instagram"
                    className="imgFooterSocialMedia"
                  />
                </Link>
                <Link to="">
                  <img
                    src="/images/footer/tiktok.png"
                    alt="Tiktok"
                    className="imgFooterSocialMedia"
                  />
                </Link>

                <Link to="">
                  <img
                    src="/images/footer/youtube.png"
                    alt="Youtube"
                    className="imgFooterSocialMedia"
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-slate-700" />
        <h2 className="py-4 text-end">
          Copyright 2026, Let`s Play PS2, All Rights Reserved.
        </h2>
      </div>
    </footer>
  );
}
