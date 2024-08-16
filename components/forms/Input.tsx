import Link from "next/link";
import { ChangeEvent } from "react";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
}

export default function Input({
  labelId,
  type,
  onChange,
  value,
  required = false,
  children,
  link,
}: Props) {
  return (
    <div>
      <div className="flex justify-between align-center">
        <label
          htmlFor={labelId}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {children}
        </label>
        {link && (
          <div className="block text-sm font-medium leading-6 text-gray-900">
            <Link
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          id={labelId}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name={labelId}
          type={type}
          required
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
