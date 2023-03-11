"use client";
import React from "react";
import SvgIcon from "@/component/icons/svg-icon";
import Appbar from "./((component))/appbar.component";
import SearchBar from "./((component))/search-bar.component";
import Label from "@/component/atom/label.component";
import { Prata, Courgette } from "next/font/google";

const spaceMono = Courgette({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function HomePage() {
  const [keyword, setKeyword] = React.useState<string>("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "failed" | "success"
  >("idle");

  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await searchQuery(keyword);
  }
  async function searchQuery(query: string) {
    try {
      if (query === "") return;
      if (query !== keyword) {
        setKeyword(query);
      }
      setStatus("loading");
      setData(undefined);
      const dynamicData = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const data = await dynamicData.json();
      if (dynamicData.status === 200) {
        setData(data);
        setError(data);
        setStatus("success");
      } else {
        setStatus("failed");
        setError(data);
        setData(undefined);
      }
    } catch (error) {
      console.log(error);
      setStatus("failed");
    }
  }
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-0">
      <Appbar />
      <SearchBar
        status={status}
        keyword={keyword}
        setKeyword={setKeyword}
        search={handleSearch}
      />
      {data && data.length > 0 && (
        <Word
          word={data[0]}
          setKeyword={setKeyword}
          searchQuery={searchQuery}
        />
      )}
      {error && Object.keys(error).length > 0 && (
        <>
          <div className="flex flex-col my-32 text-center">
            <Label size="h3" variant="t1">
              {error.message}
            </Label>
            <Label variant="s1">{error.resolution}</Label>
          </div>
        </>
      )}
    </main>
  );
}

function Word({ word, setKeyword, searchQuery }: any) {
  return (
    <section className=" flex flex-col my-11">
      <div className="flex place-content-between items-center">
        <div className="flex flex-col gap-1">
          <Label
            size="h1"
            variant="t1"
            className={`text-4xl first-letter:uppercase ${prata.className}`}
          >
            {word.word}
          </Label>
          <Label className="theme-text-primary">{word.phonetic}</Label>
        </div>
        <button
          className="flex items-center place-content-center p-2 theme-bg-primary rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200"
          onClick={() => {
            const wordToSay = word.word ?? word.phonetic;
            const utterance = new SpeechSynthesisUtterance(wordToSay);
            speechSynthesis.speak(utterance);
          }}
        >
          <SvgIcon icon={"Play"} className="theme-text-on-primary" size={10} />
        </button>
      </div>
      <div className="flex flex-col">
        <Meanings
          meanings={word.meanings}
          setQuery={(query: string) => {
            setKeyword(query);
            searchQuery(query);
          }}
        />
      </div>
      <div>
        <div className="flex flex-col my-4 border-t py-2">
          <Label size="body" variant="s1">
            Origin{" "}
          </Label>
          <a href={word.sourceUrls}>
            <Label size="caption" variant="s1" className="underline">
              {word.sourceUrls}
            </Label>
          </a>
        </div>
      </div>
    </section>
  );
}

function Meanings({ meanings, setQuery = () => {} }: any) {
  return (
    <>
      {meanings.map((meaning: any, index: number) => {
        const { partOfSpeech, synonyms, antonyms } = meaning;
        return (
          <>
            <div key={index}>
              <div className="flex gap-4 items-center my-4">
                <Label size="h3" className={spaceMono.className}>
                  {partOfSpeech}
                </Label>
                <div className="flex-1 border-b h-1 " />
              </div>
              <Definition definitions={meaning.definitions} />
              <div className="flex flex-col gap-2 mt-4">
                <Nonyms
                  nonyms={synonyms}
                  label={"Synonyms "}
                  setQuery={setQuery}
                />
                <Nonyms
                  nonyms={antonyms}
                  label={"Antonyms "}
                  setQuery={setQuery}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

function Definition({ definitions }: any) {
  return (
    <div className="flex flex-col gap-2">
      <Label variant="s1">Meaning </Label>
      <div className="flex flex-col gap-1">
        {definitions.map((item: any, index: number) => (
          <ul
            key={index}
            className="flex flex-col  list-disc list-outside pl-4"
          >
            <li key={index}>
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
    </div>
  );
}

function Nonyms({ nonyms, label, setQuery = (e: any) => {} }: any) {
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
              onClick={() => {
                setQuery(item);
              }}
              className={`cursor-pointer theme-text-primary ${prata.className}`}
            >
              {item}
            </Label>
          ))}
        </div>
      </div>
    )
  );
}
