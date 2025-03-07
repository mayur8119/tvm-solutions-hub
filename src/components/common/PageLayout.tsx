
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import PromotionPopup from "./PromotionPopup";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
      <PromotionPopup />
    </div>
  );
};

export default PageLayout;
