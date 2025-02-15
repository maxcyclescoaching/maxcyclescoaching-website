
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
  const formattedDescription = description.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-4 last:mb-0">
      {paragraph}
    </p>
  ));

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
