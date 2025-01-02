import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Modal } from "@/base/modal/modal";
import { useState } from "react";
interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (location: string) => void;
  locations: string[];
  action: "add" | "remove";
}

export function LocationModal({ isOpen, onClose, onConfirm, locations, action }: LocationModalProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleConfirm = () => {
    if (selectedLocation) {
      onConfirm(selectedLocation);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        {action === "add" ? "Add to Location" : "Remove from Location"}
      </h2>
      <Select onValueChange={setSelectedLocation} value={selectedLocation}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="mt-4 flex justify-end space-x-2">
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={!selectedLocation}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
}

