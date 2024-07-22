"use client";
import { useState } from "react";
import { FolderClosed, File, ChevronRight } from "lucide-react";

interface IFolders {
  id: number;
  name: string;
  folders?: IFolders[];
}

let folders: IFolders[] = [
  {
    id: 0,
    name: "Home",
    folders: [
      {
        id: 1,
        name: "Movies",
        folders: [
          {
            id: 11,
            name: "Action",
            folders: [
              {
                id: 111,
                name: "2000s",
                folders: [
                  {
                    id: 1111,
                    name: "Harry potter",
                  },
                ],
              },
              {
                id: 1112,
                name: "2006s",
                folders: [
                  {
                    id: 11241,
                    name: "The Prestige",
                  },
                ],
              },
            ],
          },
          {
            id: 12,
            name: "Comedy",
            folders: [{ id: 121, name: "1994s", folders: [] }],
          },
        ],
      },
      {
        id: 2,
        name: "Music",
        folders: [
          { id: 21, name: "Rock", folders: [] },
          { id: 22, name: "Classical", folders: [] },
        ],
      },
      { id: 3, name: "Pictures", folders: [] },
      { id: 4, name: "passwords.txt" },
    ],
  },
];
function RecursiveComponents() {
  return (
    <div className="max-w-sm p-8">
      <ul className="pl-6">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.id} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: IFolders }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={() => setIsOpen((prevState) => !prevState)}>
            <ChevronRight
              className="size-4 text-gray-900"
              style={{ rotate: isOpen ? "90deg" : "0deg" }}
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
          <File className="ml-[22px] size-6 text-black" />
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

export default RecursiveComponents;
