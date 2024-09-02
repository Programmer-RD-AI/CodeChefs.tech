"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqData = [
  {
    question: "What is CodeChefs?",
    answer:
      "CodeChefs is an organization that specializes in organizing tech events, hackathons, and coding competitions to foster innovation and collaboration in the tech community.",
  },
  {
    question: "How can I participate in a CodeChefs event?",
    answer:
      "You can participate in our events by registering on our website or social media channels. Stay tuned for announcements about upcoming events and competitions.",
  },
  {
    question: "Do you offer mentorship or coaching?",
    answer:
      "Yes, CodeChefs provides mentorship and coaching through various programs and workshops. Check our website for more details on how to get involved.",
  },
  {
    question: "How can I contact CodeChefs for support?",
    answer:
      "For support, please email us at support@codechefs.org. We’re here to help with any questions or issues you may have.",
  },
];
