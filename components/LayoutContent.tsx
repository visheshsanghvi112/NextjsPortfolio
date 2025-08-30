"use client";
import CommandPalette from './CommandPalette';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';
import { useContactModal } from '../contexts/ContactModalContext';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, closeModal } = useContactModal();
  
  return (
    <>
      <CommandPalette />
      <Header />
      {children}
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}