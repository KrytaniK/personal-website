import { ProjectCarousel } from "../_components";

// TODO: Connect this to a DB to more easily store, retrieve and update info.
const PROJECTS = [
  {
    title: "Indy Game Engine",
    description:
      "[WIP] An open source, modular-core game engine. Opt into the functionality you need to build the things you want, without the fluff. Currently only supporting Windows.",
    githubLink: "https://github.com/KrytaniK/Indy",
    demoLink: null,
    imageSrc: null,
  },
];

export default function ProjectsPage() {
  return <ProjectCarousel projects={PROJECTS} />;
}
