import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLazyBooksQuery } from "@/redux/api/booksApi";

import { useEffect, useState } from "react";

export default function Books() {
  const [trigger, { data }] = useLazyBooksQuery({});
  const [genre, setGenre] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    trigger({ query: search });
  };

  const handleSelect = () => {
    if (year === "all" && genre === "all") {
      setYear(null);
      setGenre(null);
    } else if (genre === "all") setGenre(null);
    else if (year === "all") setYear(null);

    if (year === "2020s") trigger({ genre, minYear: 2020 });
    else if (year === "2010s") trigger({ genre, minYear: 2010, maxYear: 2019 });
    else if (year === "2000s") trigger({ genre, minYear: 2000, maxYear: 2009 });
    else if (year === "1990s") trigger({ genre, minYear: 1990, maxYear: 1999 });
    else if (year === "1980s") trigger({ genre, minYear: 1980, maxYear: 1989 });
    else if (year === "1970s") trigger({ genre, minYear: 1970, maxYear: 1979 });
    else if (year === "1960s") trigger({ genre, minYear: 1960, maxYear: 1969 });
    else if (year === "1950s") trigger({ genre, minYear: 1950, maxYear: 1959 });
    else if (year === "1940s") trigger({ genre, minYear: 1940, maxYear: 1949 });
    else if (year === "1930s") trigger({ genre, minYear: 1930, maxYear: 1939 });
    else if (year === "1920s") trigger({ genre, minYear: 1920, maxYear: 1929 });
    else if (year === "1910s") trigger({ genre, minYear: 1910, maxYear: 1919 });
    else if (year === "1900s") trigger({ genre, minYear: 1900, maxYear: 1909 });
    else if (year === "<1900s") trigger({ genre, maxYear: 1899 });
    else trigger({ genre });
  };
  useEffect(() => {}, [data]);
  useEffect(() => {
    trigger({});
  }, []);
  useEffect(() => {
    handleSelect();
  }, [genre, year]);
  return (
    <div className="mt-20 p-10">
      <div className="flex w-full items-center mx-auto space-x-[15vw]">
        <div className="flex space-x-5">
          <Input
            type="search"
            placeholder="Search"
            className="w-[500px] ml-20"
            onBlur={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => handleSearch()}>Search</Button>
        </div>
        <div className="flex space-x-3">
          <Select
            onValueChange={(value) => {
              setGenre(value);
            }}
          >
            <SelectTrigger className="w-[180px] bg-black text-white ">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Classic">Classic</SelectItem>
                <SelectItem value="Horror">Horror</SelectItem>
                <SelectItem value="Fantasy">Fantasy</SelectItem>
                <SelectItem value="Biography">Biography</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => {
              setYear(value);
            }}
          >
            <SelectTrigger className="w-[180px] bg-black text-white">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="2020s">2020-Current</SelectItem>
                <SelectItem value="2010s">2010-2019</SelectItem>
                <SelectItem value="2000s">2000-2009</SelectItem>
                <SelectItem value="1990s">1990-1999</SelectItem>
                <SelectItem value="1980s">1980-1989</SelectItem>
                <SelectItem value="1970s">1970-1979</SelectItem>
                <SelectItem value="1960s">1960-1969</SelectItem>
                <SelectItem value="1950s">1950-1959</SelectItem>
                <SelectItem value="1940s">1940-1949</SelectItem>
                <SelectItem value="1930s">1930-1939</SelectItem>
                <SelectItem value="1920s">1920-1929</SelectItem>
                <SelectItem value="1910s">1910-1919</SelectItem>
                <SelectItem value="1900s">1900-1909</SelectItem>
                <SelectItem value="<1900s">{"<1900"}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full mt-10 relative ">
        <div className="col-span-9 grid grid-cols-4 gap-10 pb-20">
          {data?.data?.map((book: any) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
