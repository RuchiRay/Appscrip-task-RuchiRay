import React from "react";
import "./Footer.css";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="flex footer-top justify-between border-bottom flex-wrap">
        <div className="flex flex-col top-left">
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className="flex subscribe flex-wrap">
            <input
              type="text"
              className="input"
              placeholder="Enter your e-mail..."
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="top-right flex flex-col">
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <p className="text-sm">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap footer-bottom">
        <div className="footer-options flex flex-col">
          <h2>mettā muse</h2>
          <p>About Us</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-options flex flex-col">
          <h2>QUICK LINKS</h2>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-options flex flex-col">
          <h2>FOLLOW US</h2>
          <div className="flex social-wrapper">
            <div className="social-icon">
              <BiLogoInstagramAlt />
            </div>
            <div className="social-icon">
              <FaLinkedin />
            </div>
          </div>
          <h2>mettā muse Accepts</h2>
          <div className="cards-wrapper flex flex-wrap">
            <Image src={"/images/gpay.png"} width={56} height={35} alt="gpay" />
            <Image
              src={"/images/masterCard.png"}
              width={56}
              height={35}
              alt="mastercard"
            />
            <Image
              src={"/images/paypal.png"}
              width={56}
              height={35}
              alt="paypal"
            />
            <Image src={"/images/amex.png"} width={56} height={35} alt="gpay" />
            <Image
              src={"/images/applePay.png"}
              width={56}
              height={35}
              alt="apple pay"
            />
            <Image src={"/images/pay.png"} width={56} height={35} alt="pay" />
          </div>
        </div>
      </div>
      <p className="text-sm">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};
