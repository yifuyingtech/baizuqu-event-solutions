import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-10 bg-gradient-charcoal text-charcoal-foreground/60 text-sm">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
          <span className="font-black text-lg">
            <span className="text-gradient-orange">BAIZU</span>
            <span className="text-charcoal-foreground">QU</span>
          </span>
          <span>擺租趣股份有限公司</span>
        </div>
        <p className="text-xs text-charcoal-foreground/40">
          活動設備租賃與工程統籌 | info@baizuqu.com | 0988-105-413
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-1">
        <p>© {new Date().getFullYear()} BAIZUQU. All rights reserved.</p>
        <Link
          to="/privacy-policy"
          className="text-charcoal-foreground/40 hover:text-primary transition-colors underline underline-offset-2"
        >
          隱私權政策
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
