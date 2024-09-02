import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              <Mark>
                CodeChefs has truly transformed our approach to tech events.
              </Mark>
              Their innovative solutions and team support were outstanding.
            </p>
            <Avatar name="Sarah Steiner" title="VP Sales at Google" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              <Mark>Efficient and dedicated</Mark>—CodeChefs' team knows how to
              deliver results that exceed expectations.
            </p>
            <Avatar name="Dylan Ambrose" title="Lead Marketer at Netflix" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              <Mark>Exceptional</Mark> service and a game-changing experience. I
              highly recommend CodeChefs!
            </p>
            <Avatar name="Gabrielle Winn" title="Co-founder of Acme Inc" />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image?: string; // image should be a string URL
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      {props.image ? (
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
          <Image
            src={props.image}
            width={40} // width as number
            height={40} // height as number
            alt="Avatar"
            placeholder="blur"
          />
        </div>
      ) : (
        <div className="flex-shrink-0 bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center text-gray-500">
          <span className="text-xl">{props.name.charAt(0)}</span>
        </div>
      )}
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
      {props.children}
    </mark>
  );
}
