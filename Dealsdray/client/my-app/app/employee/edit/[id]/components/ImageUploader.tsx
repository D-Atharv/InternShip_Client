import Image from "next/image";

interface ImageUploaderProps {
    imageUrl: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const ImageUploader = ({ imageUrl, onChange }: ImageUploaderProps) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Image Upload</label>
      <input type="file" name="image" onChange={onChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Employee"
          className="mt-2 w-24 h-24 object-cover rounded"
        />
      )}
    </div>
  );
  