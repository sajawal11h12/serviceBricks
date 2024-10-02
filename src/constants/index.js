import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap2,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import roadmap1 from '../assets/roadmap1.png'
import roadmap3 from '../assets/roadmap3.png'

import sqlicon from '../assets/sqlicon.png'
import comosicon from '../assets/comosicon.png'
import storageicon from '../assets/storageicon.png'
import mongodbicon from '../assets/mongodbicon.png'
import netcoreicon from '../assets/netcoreicon.png'
import postsqlicon from '../assets/postsqlicon.png'
import sqlservericon from '../assets/sqlservericon.png'
import sqllite from '../assets/sqllite.png'
import inmemory from '../assets/inmemory.png'

export const navigation = [
  
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Features",
    url: "/features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "/price",
  },
  {
    id: "3",
    title: "Get Started",
    url: "/getstarted",
  },
  {
    id: "4",
    title: "Documentation",
    url: "/documentation",
  },
  {
    id: "5",
    title: "Consulting",
    url: "/consulting",
  },
  {
    id: "6",
    title: "About",
    url: "/about",
  },
  
  {
    id: "7",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "8",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Generate tailored microservices instantly.",
  "Build and deploy in seconds.",
  "Download source code for immediate use.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Cache Microservice",
    text: "Generic key/value pair data storage with an expiration process to delete expired data.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Logging Microservice",
    text: "Service-scoped or centralized application logging with web request and response auditing.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: " Notification Microservice",
    text: "Notification and delivery of emails and SMS messages",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "  Security Microservice",
    text: "Authentication, authorization, and application security with JWT bearer token support for multi-application deployments.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
];

export const collabText =
  "Use our online tools to create microservices quickly and easily in just a few seconds."
export const collabContent = [
  {
    id: "0",
    title: "Try completely free!",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: sqlicon,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: comosicon,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: storageicon,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: mongodbicon,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "netcoreicon",
    icon: netcoreicon,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: inmemory,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: sqllite,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Individual",
    description: "per month",
    price: "10",
    features: [
      "Open Source & Online Generation Tools",
      "Full Source Code with all Database Providers",
      "Unit / Integration Tests with Email Support & Unlimited Licenses",
    ],
  },
  {
    id: "1",
    title: "Business",
    description: "per month",
    price: "19 ",
    features: [
      "Open Source & Online Generation Tools",
      "Full Source Code All Database Providers",
      "Unit / Integration Tests with Email Support & Up to 20 User Licenses",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "per month",
    price: 39,
    features: [
      "Open Source  & Online Generation Tools",
      "Full Source Code with all Database Providers",
      "Unit / Integration Tests and Email Support with Unlimited Licenses",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "REST API Services",
    text: "Templated, repository-based services for quickly exposing standard CRUD methods or custom methods.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "ServiceQuery",
    text: "Supports standardized, polyglot data querying for SQL and NoSQL databases.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Business Rule Engine",
    text: "Business Rule Engine: Polymorphic techniques to build reusable business logic.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Domain-Driven Design",
    text: "Domain-Driven Design concepts, standards and patterns.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Event-Driven Architecture",
    text: "Customize business logic for any supported object and method.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Classic or Modern API Design",
    text: "Choose between Classic or Modern modes, with various response formats.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Microservices Architecture",
    text: "Break down applications into smaller, manageable services that can be developed and deployed independently.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Classic or Modern API Design ",
    text: "Choose between Classic or Modern modes, with various response formats.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "8",
    title: " Background Processing",
    text: "Supports asynchronous processes, tasks, and rules.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "SQL and NoSQL Database Support",
    text: "Works standard with relational (SQL) and document (NoSQL) database engines.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "10",
    title: "Service Bus Engine",
    text: "Supports broadcasts of system data with InMemory and Azure Service Bus.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "11",
    title: " NuGet Packages",
    text: "Quickly build new services and applications.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
