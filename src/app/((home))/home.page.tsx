"use client";
import React from "react";
import cx from "classnames";
import SvgIcon from "@/component/icons/svg-icon";
import Appbar from "./((component))/appbar.component";
import Loading from "@/component/atom/loader.component";
import SearchBar from "./((component))/search-bar.component";
import Label from "@/component/atom/label.component";

export default function HomePage() {
  const [keyword, setKeyword] = React.useState<string>("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "failed" | "success"
  >("idle");

  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  async function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (keyword === "") return;

    try {
      setStatus("loading");
      const dynamicData = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      );
      const data = await dynamicData.json();
      if (dynamicData.status === 200) {
        console.log(data);
        setData(data);
        setStatus("success");
      } else {
        setStatus("failed");
        setError(data);
      }
    } catch (error) {
      console.log(error);
      setStatus("failed");
    }
  }
  return (
    <div className=" max-w-3xl mx-auto">
      <Appbar />
      <SearchBar status={status} setKeyword={setKeyword} search={search} />
      {data && (
        <section className="py-10 flex flex-col">
          <Label size="h1" variant="t1">
            {data[0].word}
          </Label>
          <Label className="theme-text-primary">{data[0].phonetic}</Label>

          <div className="flex flex-col gap-2">
            <Meanings meanings={data[0].meanings} />
          </div>
        </section>
      )}
      {error && (
        <>
          <div className="flex flex-col my-32 text-center">
            <Label size="h3" variant="t1">
              {error.message}
            </Label>
            <Label variant="s1">{error.resolution}</Label>
          </div>
        </>
      )}
    </div>
  );
}

function Meanings({ meanings }: any) {
  return (
    <>
      {meanings.map((meaning: any, index: number) => {
        const { partOfSpeech, synonyms, antonyms } = meaning;
        return (
          <>
            <div key={index}>
              <div className="flex gap-4 items-center my-4">
                <Label size="h2" variant="t2" className="">
                  {partOfSpeech}
                </Label>
                <div className="flex-1 border-b h-1 " />
              </div>
              <Definition definitions={meaning.definitions} />
              <Nonyms nonyms={synonyms} label={"Synonyms "} />
              <Nonyms nonyms={antonyms} label={"Antonyms "} />
            </div>
          </>
        );
      })}
    </>
  );
}

function Definition({ definitions }: any) {
  return (
    <div>
      <Label variant="s1">Meaning </Label>
      {definitions.map((item: any, index: number) => (
        <ul
          key={index}
          className="flex flex-col pb-2 list-disc list-outside pl-4"
        >
          <li>
            <Label size="h3" variant="t3">
              {item.definition}
            </Label>

            {item.example && (
              <div className="ml-4">
                <Label size="body" variant="s2">
                  Example:{" "}
                </Label>
                <Label size="body" variant="s2" className="italic">
                  {item.example}
                </Label>
              </div>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
}

function Nonyms({ nonyms, label }: any) {
  return (
    nonyms &&
    nonyms.length > 0 && (
      <div className="flex items-start gap-2">
        <Label size="body" variant="s2">
          {label}
        </Label>
        <div className="flex flex-wrap gap-2 ">
          {nonyms.map((item: any, index: number) => (
            <Label
              key={index}
              size="body"
              className="italic theme-text-primary"
            >
              {item}
            </Label>
          ))}
        </div>
      </div>
    )
  );
}
