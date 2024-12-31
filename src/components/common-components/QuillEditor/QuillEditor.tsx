import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
interface QuillEditorProps {
  value: string
  onChange: (content: string) => void
  className?: string
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange, className }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      className={`bg-white  ${className}`}
    />
  )
}

export default QuillEditor

