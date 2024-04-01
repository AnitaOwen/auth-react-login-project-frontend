const AboutDevs = () => {
  return (
    <div className="about-container">
      <h1 className="about-dev">About Code 418 🫖 Developers</h1>
      <ul className="developer-list">
        <li className="developer">
          <h2>Anita</h2>
          <a
            href="https://github.com/AnitaOwen"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711312831/TeaWhips-slide1_spdyvw.jpg"
              alt="Anita!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Anita Owen, a passionate full-stack developer, is
            also a devoted mom and longtime DJ who's always thrived in dynamic
            environments, blending creativity with technical skill. Her journey
            from the turntables to the terminal, fueled by a love for
            problem-solving and a dedication to continuous growth, helps her to
            navigate the world of software development."
          </p>
        </li>
        <li className="developer">
          <h2>Brenda</h2>
          <a
            href="https://github.com/BSoto85"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711730824/TeaWhips-BrendaAbout_vnayip.jpg"
              alt="Brenda!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Brenda Soto, a former veterinary technician, is now
            an aspiring full-stack web developer enrolled in Pursuit's
            mentorship program. She blends her rich background in
            problem-solving with a passion for learning web development,
            showcasing adaptability and eagerness for new challenges in tech."
          </p>
        </li>
        <li className="developer">
          <h2>Kenneth</h2>
          <a
            href="https://github.com/KenCab123"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711480425/TeaWhips-HotRod_k7i3hu.avif"
              alt="Kenneth!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Kenneth Cabral is a full stack web developer who
            loves working with others to create applications and solve problems.
            He enjoys collaborating with teammates by using his technical skills
            to tackle challenges together, and his dedication to teamwork
            delivers innovative solutions to meet user needs effectively."{" "}
          </p>
        </li>
        <li className="developer">
          <h2>Marlon</h2>
          <a
            href="https://github.com/MarlonPelau"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711051183/TeaWhip10_zettiw.webp"
              alt="Marlon!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Moving into the world of tech at Pursuit.org, I've
            been learning the many different languages and methods to become a
            great Fullstack engineer, web designer/software developer. This
            pivot away from media, marketing and creative journalism, is an
            opportunity to find a possible unique fusion, to merge my past
            expertise with!"
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutDevs;
