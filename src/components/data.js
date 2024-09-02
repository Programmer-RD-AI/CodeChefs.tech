import {
  FaceSmileIcon,
  TrophyIcon,  // Make sure to import the correct icon if using Heroicons
  CodeBracketIcon, // For coding-related benefits
  ChatBubbleBottomCenterTextIcon, // For community or content-related benefits
  DevicePhoneMobileIcon,
  SparklesIcon, // For general benefits
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "CodeChefs Highlights",
  desc: "Explore the core benefits of CodeChefs. Our platform supports diverse tech events and competitions while offering unique features tailored for tech enthusiasts.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Engage in Hackathons",
      desc: "Participate in exciting coding competitions and hackathons hosted by CodeChefs.",
      icon: <TrophyIcon />,
    },
    {
      title: "Collaborate on Projects",
      desc: "Join or form teams to tackle innovative tech projects and startup challenges.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "Access Valuable Content",
      desc: "Stay updated with the latest tech news, tutorials, and insights shared by CodeChefs.",
      icon: <ChatBubbleBottomCenterTextIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More Ways to Get Involved",
  desc: "Discover additional opportunities with CodeChefs, including exclusive content and community interactions designed to enhance your tech journey.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Friendly Access",
      desc: "Our platform is designed to be accessible and user-friendly on all devices.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Innovative Features",
      desc: "Benefit from our latest tools and features designed to enhance your experience.",
      icon: <SparklesIcon />,
    },
    {
      title: "Community Engagement",
      desc: "Connect with like-minded tech enthusiasts and share your knowledge and experiences.",
      icon: <FaceSmileIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
