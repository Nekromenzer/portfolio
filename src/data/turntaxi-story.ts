import { Car, Layers3, MapPin, Settings2 } from "lucide-react";
import type { ProjectChapter } from "./project-stories";

export const turntaxiChapters: ProjectChapter[] = [
  {
    id: "overview",
    title: "Three applications coordinating one transport service",
    paragraphs: [
      "Turn Taxi is a transport platform for a Sri Lankan tuk-tuk service, connecting passengers, drivers, and administrators through two React Native mobile applications and a React web dashboard. It combines map-based ride discovery, driver fare offers, live location tracking, onboarding, and operational administration.",
      "The product work spans pickup and destination selection, real-time driver visibility, competitive offers, synchronized ride progress, document-based driver approval, subscription management, targeted notifications, and reporting. English, Sinhala, and Tamil resources support the mobile experiences.",
    ],
  },
  {
    id: "ride-requests",
    title: "From a map selection to a structured ride request",
    paragraphs: [
      "The passenger home screen combines a map with pickup and destination selection. Place autocomplete and detail lookup provide searchable addresses, while device location initializes pickup details. Passengers can reposition the pickup marker and reverse-geocode the chosen coordinates. Map directions display route distance and duration.",
      "Zustand stores hold selected locations and route metrics, resetting the metrics when location selections change. Firestore ride requests capture passenger identity, pickup, drop-off, optional notes, and route information so drivers receive the trip context needed to evaluate an offer.",
    ],
  },
  {
    id: "fare-offers",
    title: "Let passengers compare driver quotations",
    paragraphs: [
      "Drivers see incoming ride details and enter a fare, validated as a positive number. Each quotation is stored in the ride’s offer collection, and drivers can withdraw it by deleting their offer record. The passenger app subscribes to changes and sorts offers by price, showing offer counts, driver names, and quoted fares.",
      "Accepting an offer uses a Firestore transaction that checks the ride is still searching and the selected offer exists. It records the selected driver, quoted price, and acceptance timestamp. Once the ride leaves the searching state, a second acceptance cannot pass that transaction’s state check.",
    ],
  },
  {
    id: "mobile-languages",
    title: "Mobile experiences in three languages",
    paragraphs: [
      "Both mobile applications include English, Sinhala, and Tamil translation resources through i18next and react-i18next. Language switches persist preferences in AsyncStorage, with English fallback behavior and driver-side normalization of supported locale codes.",
      "Translated labels and messages appear across booking, onboarding, ride progress, driver tracking, and shared components. The implementation provides reusable localization resources; complete translation coverage was not established by the supplied review.",
    ],
  },
  {
    id: "driver-onboarding",
    title: "Document-based onboarding and review",
    paragraphs: [
      "Both mobile apps integrate native Google Sign-In with Firebase Authentication and onboarding for contact details and profile completion. Drivers move through terms, privacy, contact details, profile submission, and approval stages, including pending-approval and rejection-related states.",
      "Driver submissions collect identity details, Sri Lankan NIC numbers, vehicle information, and supporting photographs. NIC and registration inputs have format validation. Profile and vehicle photographs and both sides of driving licences are uploaded to Firebase Storage with Expo Image Picker. Contact-number entry does not establish SMS ownership verification.",
    ],
  },
  {
    id: "background-tracking",
    title: "Driver availability and background location publishing",
    paragraphs: [
      "Online and offline controls persist the driver’s availability intent locally. Tracking requests foreground and background location permissions before registering an Expo Task Manager background task. High-accuracy updates use time and distance intervals, with Android foreground-service notification text for ongoing tracking.",
      "A shared repository function throttles writes of coordinates, speed, heading, online state, and heartbeat timestamps to Firebase Realtime Database. The stop workflow ends location updates and marks the driver offline. The driver interface also observes subscription changes and stops tracking when expiry is detected. Physical-device background behavior requires separate verification.",
    ],
  },
  {
    id: "ride-lifecycle",
    title: "A shared ride record for both participants",
    paragraphs: [
      "Passenger and driver snapshot subscriptions observe the same ride document through searching, accepted, arrived, started, completed, and cancelled states. Drivers have controls for arrival, journey start, and completion; passenger cancellation and completion actions appear in their supported interface states.",
      "Both experiences display ride status, locations, route information, and fare details. Accepted drivers are routed into the active-ride screen, and completion moves passengers toward driver rating. Shared records let each application react to progress without repeated manual refreshes.",
    ],
  },
  {
    id: "dispatch",
    title: "Discover nearby drivers and notify a candidate batch",
    paragraphs: [
      "The passenger app subscribes to online positions in Realtime Database, displays driver markers, and supports driver selection and detail retrieval with pickup-distance information. A Firestore creation trigger handles new ride requests, filtering live driver records by online state, available coordinates, and heartbeat freshness.",
      "Drivers are ranked by Haversine distance from the pickup, with up to five selected as candidates. Activation and subscription checks run before preparing pushes, and ride-request payloads carry the ride identifier for driver navigation. The reviewed implementation selects one candidate batch; further automatic dispatch rounds were not established.",
    ],
  },
  {
    id: "driver-subscriptions",
    title: "Approval, eligibility, and subscription adjustments",
    paragraphs: [
      "Administrators can search driver records, review submitted identity and vehicle details, and inspect approval, activation, and subscription information. Approval and rejection actions include rejection reasons. Subscription extensions and reductions use a configurable daily cutoff, record administrative attribution, and create driver notifications.",
      "A scheduled function checks active drivers for expiry every 15 minutes, while a driver-document update trigger also enforces expiry. Expired drivers are marked inactive and offline, live presence is synchronized, and administrative alerts are created. These backend functions apply eligibility behavior independently of dashboard activity.",
    ],
  },
  {
    id: "notifications",
    title: "Announcements and operational notifications",
    paragraphs: [
      "An administrative composer supports titles, message bodies, optional images, audience selection, immediate publication, and scheduled announcements. A five-minute scheduled function publishes due records. Backend audience handling supports passengers, drivers, shared broadcasts, and driver-specific notifications, with general Expo push delivery chunked into batches of up to 100.",
      "Operational paths cover driver approval, subscription expiry, and ride requests. The mobile apps register push tokens and use notification interactions to navigate to relevant screens. In-app notification views and passenger read-state records connect persistent messages to device pushes. Live push delivery was not reverified for the supplied write-up.",
    ],
  },
  {
    id: "architecture",
    title: "Separate apps, shared operational data",
    paragraphs: [
      "Passenger, driver, and administrator interfaces live in separate projects. Expo Router handles mobile navigation, while React Router handles the web dashboard. Shared Firebase ride, driver, user, and notification records coordinate the three experiences. Firestore stores operational documents, Realtime Database carries frequently updated driver positions, and Firebase Storage holds profile, vehicle, and licence images.",
      "Scheduled automation and database-triggered operations live in the admin project’s Firebase Functions package, using Functions v2, Firebase Admin SDK, and Node.js 22 configuration. The passenger app uses Expo SDK 54, React Native 0.81, and React 19; the driver app uses Expo SDK 52, React Native 0.76, and React 18. The administration app uses React 18 and Vite 5. These versions reflect the reviewed package manifests.",
    ],
  },
  {
    id: "admin-reporting",
    title: "Operational visibility and administrator controls",
    paragraphs: [
      "Dashboard summaries cover drivers, approvals, clients, and ride requests alongside recent activity. Admin and super-admin profiles define page and action permissions, with interface helpers controlling available screens and actions. Administrator management includes account status and permission configuration. Backend authorization enforcement was not verified by the source review.",
      "Taxi activity calendars and individual driver reports combine stored daily usage records with accepted-driver information from ride records. Recharts provides a seven-day driver-activity chart, and CSV exports cover worked days and date-range usage. The daily-usage reporting interfaces exist, but the reviewed scheduled aggregation function is commented out.",
    ],
  },
  {
    id: "ratings-release",
    title: "Ride feedback and release preparation",
    paragraphs: [
      "Post-ride feedback is stored beneath driver-specific rating records. A Firestore transaction updates rating totals, counts, and averages, accounting for an edited rating by adjusting its previous contribution. This supports both new feedback and changes to an existing ride rating.",
      "EAS profiles cover development, preview, and production builds, including Android APK previews and passenger store-distribution configuration. Project commands cover mobile linting, formatting, native builds, admin builds and linting, and Firebase Functions emulation, deployment, and logs. Configuration and tooling do not establish store-delivered runtime behavior.",
    ],
  },
  {
    id: "quality",
    title: "Implementation scope and verification boundaries",
    paragraphs: [
      "The supplied source review covers kisal/turn-client, kisal/turn-driver, and kisal/turn-admin, including the admin project’s Firebase Functions. It did not execute or reverify tests, lint, builds, cloud deployments, live authentication, Google API responses, push delivery, background behavior on physical devices, or store-delivered applications.",
      "Payment-related files are present, but processing logic in the reviewed payment component is commented out, so completed payment integration is not claimed. The review also does not establish production scale, measured performance gains, full security-rule coverage, or complete translations. The separate Turn marketing website is outside the three-application review.",
    ],
  },
  {
    id: "backend-automation",
    title: "Event-driven coordination behind the mobile experience",
    paragraphs: [
      "Firebase event triggers and scheduled functions connect ride requests, driver eligibility, and notifications. New requests initiate nearby-driver selection; subscription schedules and document updates enforce expiry; scheduled announcement publishing turns due notification records into delivery work.",
      "Firestore holds the operational record, Realtime Database carries live presence, and Expo Push connects events to mobile navigation. The implementation separates frequent position updates from business documents while letting passenger, driver, and administration interfaces respond to the same transport workflow.",
    ],
  },
  {
    id: "outcomes",
    title: "A connected booking and operations workflow",
    paragraphs: [
      "Turn Taxi brings passenger ride discovery, competitive driver offers, transactional acceptance, shared ride progress, and post-ride feedback into a three-application platform. Driver tracking and document-based onboarding connect to administrative approval, subscription adjustments, targeted notifications, and activity reporting.",
      "The work combines React Native mobile delivery, a React operations dashboard, Firebase data synchronization, backend automation, Google mapping integrations, and multilingual interfaces. The result connects booking, driver participation, and administrative workflows for a Sri Lankan tuk-tuk service.",
    ],
  },
];

export const turntaxiPresentation = {
  introTitle: ["A ride for the passenger.", "A workspace for the driver."],
  journeyLabel: "THE RIDE WORKFLOW",
  journeyTitle: "From choosing a pickup to completing the ride.",
  steps: [
    ["Request", "Choose pickup and destination on the map."],
    ["Compare", "Review fare offers from available drivers."],
    ["Ride", "Accept an offer and follow shared ride progress."],
    ["Rate", "Complete the journey and leave driver feedback."],
  ],
  groups: [
    { title: "Give passengers a clear way to book.", label: "Passenger experience", description: "Map-based requests, comparable fare offers, and three-language resources connect discovery to booking.", icon: MapPin, chapters: ["ride-requests", "fare-offers", "mobile-languages"] },
    { title: "Support the driver from onboarding to arrival.", label: "Driver operations", description: "Document submission, availability controls, location publishing, and ride actions bring the driver workflow together.", icon: Car, chapters: ["driver-onboarding", "background-tracking", "ride-lifecycle"] },
    { title: "Coordinate requests, eligibility, and updates.", label: "Dispatch & automation", description: "Nearby-driver selection, subscription expiry checks, and notifications connect mobile activity to backend events.", icon: Layers3, chapters: ["dispatch", "driver-subscriptions", "notifications"] },
    { title: "Give operators the context to manage the service.", label: "Administration & engineering", description: "Shared records, activity reporting, feedback aggregation, and release tooling support the wider platform.", icon: Settings2, chapters: ["architecture", "admin-reporting", "ratings-release", "quality"] },
  ],
  previews: {
    "ride-requests": ["Map-based ride requests", "Place search, pickup adjustment, route metrics, and structured requests"],
    "fare-offers": ["Competitive fare offers", "Live quotations, price comparison, and transactional acceptance"],
    "mobile-languages": ["English, Sinhala & Tamil", "Reusable translation resources and saved language preferences"],
    "driver-onboarding": ["Driver registration & approval", "Google sign-in, identity details, vehicle records, and document uploads"],
    "background-tracking": ["Availability & background location", "Permission handling, tracking controls, heartbeats, and throttled writes"],
    "ride-lifecycle": ["Synchronized ride progress", "Shared searching, arrival, journey, completion, and cancellation states"],
    dispatch: ["Nearby-driver dispatch", "Fresh online positions, distance ranking, and one candidate batch"],
    "driver-subscriptions": ["Driver eligibility & subscriptions", "Administrative adjustments and scheduled expiry enforcement"],
    notifications: ["Targeted & scheduled notifications", "Audience selection, operational alerts, push delivery, and in-app records"],
    architecture: ["Three-application architecture", "Two Expo apps and a React dashboard connected through Firebase"],
    "admin-reporting": ["Administrative access & reporting", "Permission-aware interfaces, activity calendars, charts, and CSV exports"],
    "ratings-release": ["Ratings & release tooling", "Transactional rating updates and EAS build configurations"],
    quality: ["Implementation & verification scope", "Source-review boundaries for payments, reporting, security, and devices"],
  } as Record<string, string[]>,
  spotlight: {
    chapterId: "backend-automation",
    eyebrow: "BEHIND THE RIDE",
    title: "Shared records. Event-driven coordination.",
    description: "Operational documents, live driver presence, and backend triggers keep the three applications connected.",
    tools: ["Firestore", "Realtime Database", "Functions v2"],
    toolsLabel: "Backend coordination services",
    summary: "Explore the backend workflow",
  },
  technologies: [
    ["Passenger application", "Expo SDK 54 · React Native 0.81 · React 19 · TypeScript · Expo Router"],
    ["Driver application", "Expo SDK 52 · React Native 0.76 · React 18 · TypeScript · Expo Router"],
    ["Administration & reporting", "React 18 · Vite 5 · React Router · JavaScript · TypeScript · Redux Toolkit · React Redux · Recharts · Ant Design · CSV exports"],
    ["Interface & mobile state", "NativeWind · Tailwind CSS · Expo Vector Icons · Zustand · React hooks · AsyncStorage"],
    ["Identity & operational data", "Firebase Authentication · Native Google Sign-In · Cloud Firestore · Snapshot listeners · Transactions · Batched writes · Realtime Database · Firebase Storage · Expo Image Picker"],
    ["Maps & device location", "React Native Maps · Google Places APIs · React Native Maps Directions · Expo Location · Expo Task Manager · Android foreground-service configuration"],
    ["Languages & notifications", "i18next · react-i18next · English · Sinhala · Tamil · Expo Notifications · Expo Push API · Firebase event triggers"],
    ["Backend & release tooling", "Firebase Functions v2 · Firebase Admin SDK · Scheduled functions · Node.js 22 configuration · Expo development builds · EAS Build · ESLint · Prettier · TypeScript"],
  ],
  outcomeTitle: "Passenger booking, driver operations, and administration — connected.",
};
