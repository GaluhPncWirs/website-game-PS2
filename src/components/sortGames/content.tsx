import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortGames() {
  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-3xl font-semibold tracking-wide">List Games PS2</h1>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="mostDownloaded">Most Downloaded</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="topRated">Top Rated</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
