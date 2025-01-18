import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';



const ImageUpload = () => {
  return (
    <CldUploadWidget uploadPreset="Borcella_Upload_Preset">
    {({ open }) => {
      return (
        <Button onClick={() => open()} className='bg-grey-1 text-white'><Plus />
          Upload an Image
        </Button>
      );
    }}
  </CldUploadWidget> 
  )
}

export default ImageUpload




 
