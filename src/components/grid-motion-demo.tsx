"use client";

import GridMotion from "~/components/ui/grid-motion";

export default function GridMotionDemo() {
  const items = [
    'Item 1',
    <div key='jsx-item-1' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 2',
    <div key='jsx-item-2' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'Item 4',
    <div key='jsx-item-3' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 5',
    <div key='jsx-item-4' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'Item 7',
    <div key='jsx-item-5' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 8',
    <div key='jsx-item-6' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'Item 10',
    <div key='jsx-item-7' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 11',
    <div key='jsx-item-8' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'Item 13',
    <div key='jsx-item-9' className="flex h-full items-center justify-center p-4">
      <span className="text-center text-white text-sm">Custom JSX Content</span>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 14',
  ];

  return (
    <div className="w-full max-w-4xl">
      <GridMotion items={items} columns={4} gap="gap-3" />
    </div>
  );
}