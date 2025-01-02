import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import AppDownload from './AppDownload';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="COMPANY">
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
          </FooterSection>

          <FooterSection title="CONTACT">
            <FooterLink href="/support">Help & Support</FooterLink>
            <FooterLink href="/partner">Partner with us</FooterLink>
            <FooterLink href="/ride">Ride with us</FooterLink>
          </FooterSection>

          <FooterSection title="LEGAL">
            <FooterLink href="/terms">Terms & Conditions</FooterLink>
            <FooterLink href="/refund">Refund & Cancellation</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/cookie">Cookie Policy</FooterLink>
          </FooterSection>

          <AppDownload />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} HungryRun. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;