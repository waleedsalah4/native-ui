"use client";
import { useState } from "react";
import { FolderClosed, File, ChevronRight } from "lucide-react";

interface INodes {
  id: number;
  name: string;
  folders?: INodes[];
}

function BasicTree({ nodes }: { nodes: INodes[] }) {
  return (
    <div className="max-w-sm p-8">
      <ul className="pl-6">
        {nodes.map((node) => (
          <Folder folder={node} key={node.id} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: INodes }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={() => setIsOpen((prevState) => !prevState)}>
            <ChevronRight
              className={`size-4 text-gray-500 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : "rotate-0"}`}
              // style={{ rotate: isOpen ? "90deg" : "0deg" }}
            />
          </button>
        )}
        {folder.folders ? (
          <FolderClosed
            className={`size-6 text-yellow-500 ${
              folder.folders?.length === 0 ? "ml-[22px]" : ""
            }`}
          />
        ) : (
          <File className="ml-[22px] size-6 text-black dark:text-white" />
        )}
        {folder.name}
      </span>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden pl-6">
          {folder?.folders?.map((nestedFolder) => (
            <Folder folder={nestedFolder} key={nestedFolder.id} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default BasicTree;
