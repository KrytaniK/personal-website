"use client";

import { useState } from "react";
import { SVG } from "../";
import Link from "next/link";
import styles from "./projectCarousel.module.css";

export default function ProjectCarousel({ projects }) {
  const [currentProject, setCurrentProject] = useState(0);

  const project = projects[currentProject];

  return (
    <>
      <div style={{ backgroundImage: `url(${project.imageSrc})` }} />
      {currentProject > 0 && (
        <SVG
          iconSrc="/chevron-left.svg"
          className={styles.projectNavBtnLeft}
          onClick={() => {
            setCurrentProject((prev) => prev - 1);
          }}
        />
      )}
      {currentProject < projects.length - 1 && (
        <SVG
          iconSrc="/chevron-right.svg"
          className={styles.projectNavBtnRight}
          onClick={() => {
            setCurrentProject((prev) => prev + 1);
          }}
        />
      )}
      <div className={styles.projectInfo}>
        <h1>{project.title}</h1>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.projectLinks}>
          {!!project.githubLink && (
            <Link
              target="_blank"
              className={styles.githubLink}
              href={project.githubLink}
            >
              View Source Code
            </Link>
          )}
          {!!project.demoLink && (
            <Link
              target="_blank"
              className={styles.demoLink}
              href={project.demoLink}
            >
              Try The Demo
            </Link>
          )}
        </div>
      </div>
      <div className={styles.projectIndicators}>
        {projects.length > 1 &&
          projects.map((project, index) => {
            return (
              <span
                key={project.title}
                className={
                  index === currentProject
                    ? styles.activeIndicator
                    : styles.indicator
                }
              ></span>
            );
          })}
      </div>
    </>
  );
}
