interface DeleteEmployeeModalProps {
    employeeName: string;
    onClose: () => void;
    onConfirm: () => void;
  }
  
  const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({
    employeeName,
    onClose,
    onConfirm,
  }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
          <h2 className="text-lg font-bold mb-4">Delete Employee</h2>
          <p className="mb-6 text-sm text-gray-300">
            Are you sure you want to delete{" "}
            <span className="font-bold">{employeeName}</span>? This action cannot
            be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={onConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteEmployeeModal;
  