import React from "react";
import "./About.css";
import theme_pattern from "../../assets/template/theme_pattern.svg"; // Assuming you have a theme pattern image
import profile_img from "../../assets/template/about_profile.svg"; // Assuming you have a profile image

// Change the About skills width to reflect the progress of each skill

import RepelParticles from "../Particles/RepelParticles";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="parallax-wrapper">
        <div className="sky"></div>
        {/* <div className="mist"></div>
        <div className="clouds"></div>
        <div className="mountain"></div>
        <div className="moon"></div> */}
        <div className="particle-overlay">
          <RepelParticles />
        </div>

        <div className="main-content">
          <div className="about-title">
            <h1>Experience & Leadership</h1>
          </div>
          <div className="about-sections">
            <div className="open-alpha">
              <div className="open-alpha-about">
                <h1>Open Alpha</h1>
                {/* <p>
                  , the #1 ranked university for
                  game design in the nation (The Princeton Review)
                </p> */}
                <p>
                  Game development club at USC, where our cohort of 60+ members
                  pitch, develop, and release original games every semester. We
                  teach members how to make a game, navigate a production
                  timeline, and work in a studio-style environment in 4 teams:
                  Design, Programming, Art, and Sound.{" "}
                </p>
                <a
                  href="https://openalphausc.weebly.com/"
                  className="open-alpha-button"
                >
                  Open Alpha Website
                </a>
              </div>
              <div className="open-alpha-roles">
                <div className="open-alpha-lead">
                  <h2>Programming Lead: 2024-2025</h2>
                  <p>
                    As Programming Lead, I oversee a team of 20+ members. I aim
                    to create an environment where members can learn how to code
                    in large teams while meeting new people and having fun.
                  </p>
                  <li>
                    Develop a Unity curriculum to teach the programming team
                  </li>
                  <li>Create and assign tasks to programming team</li>
                  <li>Create mentor/mentee pairings each week</li>
                  <li>
                    Teach my mentees the fundamentals of Unity and work
                    togetether on weekly programming tasks as a Programming
                    Mentor
                  </li>
                  <li>
                    Ensure smooth project progress and check task completion
                  </li>
                  <li>
                    Manage version control and merging branches using Github and
                    Azure DevOps
                  </li>
                </div>

                <div className="open-alpha-president">
                  <h2>Co-president: 2025-2026</h2>
                  <p>
                    As Co-President, I lead the team in setting production
                    goals, organizing events, and recruiting members. My mission
                    is to foster a collaborative, studio-like, and fun
                    atmosphere where students can learn new skills, create, and
                    forge new bonds.
                  </p>
                  <li>
                    Set production and overall timeline, including social
                    events, workshops, and game jams
                  </li>
                  <li>
                    Recruit and interview new general members, board members,
                    and team leads{" "}
                  </li>
                  <li>
                    Run general club and board meetings to ensure efficeincy,
                    progress, and clear communication{" "}
                  </li>
                  <li>Manage board and team leads</li>
                  <li>
                    Collected feedback to refine club processes and improve
                    member experience
                  </li>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="coding-instructor">
                <div className="coding-instructor-info">
                  <h1>Coding Instructor at AYC Logic Academy</h1>
                  <p>2020-present</p>

                  <p>
                    Part-time Python and Scratch coding instructor. Taught
                    elementary and middle school students the fundamentals of
                    coding. Lessons include: Object-oriented programming.
                    Generators and simulators. Interactive music and art.
                    Multiplayer, race, and maze games. And more!
                  </p>
                </div>
              </div>
              <div className="gamespawn">
                <div className="gamespawn-info">
                  <h1>Gamespawn</h1>
                  <p>2023-2024</p>

                  <p>
                    Part-time Python and Scratch coding instructor. Taught
                    elementary and middle school students the fundamentals of
                    coding. Lessons include: Object-oriented programming.
                    Generators and simulators. Interactive music and art.
                    Multiplayer, race, and maze games. And more!
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="about-skills">
                <div className="about-skill">
                  <p>HTML&CSS</p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="-skill">
                  <p>React JS</p>
                  <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                  <p>JavaScript</p>
                  <hr style={{ width: "70%" }} />
                </div>{" "}
                <div className="about-skill">
                  <p>HTML&CSS</p>
                </div>
                <div className="about-skill">
                  <p>C++</p>
                  <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                  <p>C# (Unity)</p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p>Python</p>
                  <hr style={{ width: "40%" }} />
                </div>
              </div> */}
          </div>
        </div>
        {/* <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>9+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;

// add timeline visual for open alpha?
// add gamespawn?
// ...maybe creative labs? prob not...
// add fallback for gradient backgrounds?

// add pictures
