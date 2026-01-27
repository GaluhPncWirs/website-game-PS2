import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function GenreGames() {
  return (
    <>
      <h2 className="text-xl font-medium border border-slate-400 px-5 py-2 border-b-0 bg-slate-300">
        Genre Games
      </h2>
      <div className="border border-slate-400 px-5 py-3 bg-slate-100">
        <ul className="grid grid-cols-3 md:grid-cols-1 gap-y-2 mb-4">
          <li className="flex items-center gap-x-2">
            <Input type="checkbox" className="size-4" />
            <label htmlFor="">Action</label>
          </li>
          <li className="flex items-center gap-x-2">
            <Input type="checkbox" className="size-4" />
            <label htmlFor="">Adventure</label>
          </li>
          <li className="flex items-center gap-x-2">
            <Input type="checkbox" className="size-4" />
            <label htmlFor="">RPG</label>
          </li>
          <li className="flex items-center gap-x-2">
            <Input type="checkbox" className="size-4" />
            <label htmlFor="">Racing</label>
          </li>
          <li className="flex items-center gap-x-2">
            <Input type="checkbox" className="size-4" />
            <label htmlFor="">Horor</label>
          </li>
          <li className="flex items-center gap-x-2">
            <Input type="checkbox" className="size-4" />
            <label htmlFor="">Sports</label>
          </li>
        </ul>
        <Button className="w-full">Apply Filter</Button>
      </div>
    </>
  );
}
