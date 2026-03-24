import { MessageCircle } from "lucide-react";

const LineButton = () => (
  <a
    href="https://line.me/ti/p/@138rtgio"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(145,63%,42%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="LINE 聯繫"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default LineButton;
