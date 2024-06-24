import { Listbox, ListboxItem } from '@nextui-org/react';
import { item } from '@/types/types';

export default function Sidebar({
  chainId,
}: item) {
  return (
    <div className="flex flex-col justify-center h-screen m-2 w-2/12">
      <h2>Selected Item</h2>
      <Listbox className="" aria-label="Actions">
        <ListboxItem key="chainId">{chainId}</ListboxItem>
        <ListboxItem key="edit">Edit </ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
    </div>
  );
}
