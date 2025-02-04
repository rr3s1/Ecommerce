import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import Image from "next/image"

interface ImageUploadProps {
  value: string[]
  onChange: (value: string) => void
  onRemove: (value: string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, onRemove, value }) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
              <Button type="button" onClick={() => onRemove(url)} size="sm" className="bg-red-1 text-white"/>
            </div>
            <Image
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <CldUploadWidget uploadPreset="myyu6boo" onUpload={onUpload}>
        {({ open }) => (
          <Button type="button" onClick={() => open()} className="bg-grey-1 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Upload Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  )
}
export default ImageUpload