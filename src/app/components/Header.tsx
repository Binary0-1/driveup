
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">My Drive</h1>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button>
            <Upload className="mr-2 h-4 w-4" /> Upload File
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <input type="file" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
