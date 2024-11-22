interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from-black/40 via-gray-800/50 to-black/40 border border-gray-600 rounded-lg p-6 shadow-lg backdrop-blur-md w-full max-w-lg mx-4">
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
