import { IconButton } from '@mui/material';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import './ImageLightbox.css';

interface Props {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ open, src, alt, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <IconButton
        aria-label="Close preview"
        onClick={onClose}
        className="lightbox-close"
        size="medium"
      >
        <X size={20} />
      </IconButton>

      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox-image" />
      </div>
    </div>
  );
}
