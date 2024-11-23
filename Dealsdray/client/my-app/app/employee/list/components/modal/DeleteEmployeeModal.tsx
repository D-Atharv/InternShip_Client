'use client';

import { useState } from "react";

interface DeleteEmployeeModalProps {
  employeeName: string;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({
  employeeName,
  onClose,
  onConfirm,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);
    try {
      await onConfirm();
    } catch (e : unknown) {
      setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg shadow-2xl p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Delete Employee</h2>
        <p className="mb-6 text-sm text-gray-300">
          Are you sure you want to delete{" "}
          <span className="font-bold text-yellow-400">{employeeName}</span>? This action cannot be undone.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow transition-all duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition-all duration-200"
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployeeModal;
