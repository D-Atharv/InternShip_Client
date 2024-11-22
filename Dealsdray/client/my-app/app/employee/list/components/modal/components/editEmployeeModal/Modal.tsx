// components/Modal.tsx
interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg mx-4">
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
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
  