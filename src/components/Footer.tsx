const Footer = () => (
  <footer className="py-10 bg-gradient-charcoal text-charcoal-foreground/60 text-sm">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="font-black text-lg">
          <span className="text-gradient-orange">BAIZU</span>
          <span className="text-charcoal-foreground">QU</span>
        </span>
        <span className="ml-3">擺租趣 — 活動設備租賃與工程統籌</span>
      </div>
      <p>© {new Date().getFullYear()} BAIZUQU. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
