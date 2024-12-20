import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Newsletter } from "./Newsletter";

export const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenNewsletterPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("hasSeenNewsletterPopup", "true");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] border-primary/20 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            <span className="block text-foreground">Stay in the Loop</span>
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Join Our Newsletter
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Newsletter isPopup={true} onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};