// File: components/LocalSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale() || "ar"; // default to Arabic if no active locale

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

  const languageOptions = [
    { value: "fr", label: "French", flag: "/flags/fr.svg" },
    { value: "ar", label: "العربية", flag: "/flags/ar.svg" },
  ];

  return (
    <div className="text-black rounded">
      <p className="sr-only">Change language</p>
      <Select
        onValueChange={onSelectChange}
        defaultValue={localActive}
        disabled={isPending}
      >
        <SelectTrigger className="w-[120px] border-primary-blue outline-primary-blue">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="">
            <SelectLabel>Languages</SelectLabel>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <Image
                  src={option.flag}
                  alt={`${option.label} flag`}
                  width={20}
                  height={20}
                  className="mr-2 inline-block"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                />
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
