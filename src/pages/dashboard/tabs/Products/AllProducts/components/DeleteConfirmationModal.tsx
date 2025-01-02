import { Button } from "@/components/ui/button";
import { Modal } from "@/base/modal/modal";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmationModal({ isOpen, onClose, onConfirm }: DeleteConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
      <p>Are you sure you want to delete the selected items?</p>
      <div className="mt-4 flex justify-end space-x-2">
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm} className="bg-red-500 text-white hover:bg-red-600">
          Delete
        </Button>
      </div>
    </Modal>
  );
}

