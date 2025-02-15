
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export function ServiceDialog({ isOpen, onClose, title, description }: ServiceDialogProps) {
  const formattedDescription = description.split('\n\n').map((paragraph, index) => {
    // Check if the paragraph starts with a number followed by a dot
    const isHeadline = /^\d+\./.test(paragraph);
    
    if (isHeadline) {
      // Split the headline into number and text
      const [number, ...rest] = paragraph.split(' ');
      const text = rest.join(' ');
      
      return (
        <p key={index} className="mb-4 last:mb-0">
          <span className="font-bold">{number} {text}</span>
        </p>
      );
    }
    
    return (
      <p key={index} className="mb-4 last:mb-0">
        {paragraph}
      </p>
    );
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-left mt-4 whitespace-pre-line">
            {formattedDescription}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
