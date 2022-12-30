
export default function CreateNoteModal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="ModalOverlay">
      <div className="ModalContent">
        {children}
      </div>
    </div>
  );
}