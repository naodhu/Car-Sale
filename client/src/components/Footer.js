// src/components/Footer.js
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-center py-6">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} CarFinder. All rights reserved.</p>
        <p className="mt-2">
          Follow us on:
          <a href="#" className="text-white ml-2">
            <FacebookIcon className="h-5 w-5 inline" />
          </a>
          <a href="#" className="text-white ml-2">
            <TwitterIcon className="h-5 w-5 inline" />
          </a>
          <a href="#" className="text-white ml-2">
            <InstagramIcon className="h-5 w-5 inline" />
          </a>
          <a href="#" className="text-white ml-2">
            <LinkedInIcon className="h-5 w-5 inline" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
