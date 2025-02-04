
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

interface LightboxDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function LightboxDialog({ isOpen, onClose, imageSrc, imageAlt }: LightboxDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogDescription className="m-0">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto rounded-lg"
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
