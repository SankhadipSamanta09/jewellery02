"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Smartphone,
  Banknote,
  ChevronRight,
  Diamond,
  Heart,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#D97706] via-[#2D6A4F] to-[#D97706]" />

      {/* Newsletter Section */}
      <div className="bg-[#16213e] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif italic text-[#D97706] mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Get exclusive offers and latest updates on new collections
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#D97706] transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#D97706] text-white font-medium rounded-full hover:bg-[#B45309] transition-all duration-300 hover:shadow-lg hover:shadow-[#D97706]/30 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Column 1: About / Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Diamond className="w-8 h-8 text-[#D97706]" />
              <h4 className="text-2xl font-serif italic text-[#D97706]">
                Samanta Jewelry
              </h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting timeless elegance since 1995. We bring you the finest
              collection of gold, diamond, and platinum jewelry, designed to
              make every moment special.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links / Navigation */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white border-b-2 border-[#D97706] pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Events", href: "/events" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#D97706] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#D97706] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white border-b-2 border-[#D97706] pb-2 inline-block">
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Gold Jewellery", href: "/gold" },
                { name: "Exclusive", href: "/exclusive" },
                { name: "Diamond Jewellery", href: "/diamond" },
                { name: "Platinum", href: "/platinum" },
                { name: "Bridal Collection", href: "/bridal" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#D97706] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#D97706] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white border-b-2 border-[#D97706] pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Jewelry Lane, Diamond Market,
                  <br />
                  Kolkata, West Bengal - 700001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 text-sm hover:text-[#D97706] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                <a
                  href="mailto:info@samantajewelry.com"
                  className="text-gray-400 text-sm hover:text-[#D97706] transition-colors"
                >
                  info@samantajewelry.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods & Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-xs uppercase tracking-wider">
                We Accept:
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] text-gray-400 font-bold">
                  UPI
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] text-gray-400 font-bold">
                  PP
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-gray-500 text-xs md:text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by Samanta Jewelry</span>
              <span className="mx-1">|</span>
              <span>© {new Date().getFullYear()} All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;