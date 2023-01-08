import { Col } from "react-bootstrap";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projUrl,
  gitUrl,
}) => {
  const linkVerificationProj = (projUrl) => {
    if (projUrl === "") {
      Swal.fire({
        title: "I'm sorry",
        text: "The online page for this project its not available",
        icon: "info",
        background: "#121212",
        color: '#B8B8B8',
        confirmButtonColor: '#2fbdb1cc',
      });
    } else {
      window.open(projUrl, "_blank");
    }
  };
  const linkVerificationGit = (gitUrl) => {
    if (gitUrl === "") {
      Swal.fire({
        title: "I'm sorry",
        text: "The GitHub project its not available",
        icon: "info",
        background: "#121212",
        color: '#B8B8B8',
        confirmButtonColor: '#2fbdb1cc',
      });
    } else {
      window.open(gitUrl, "_blank");
    }
  };

  return (
    <Col className="cardproj" size={12} sm={6} md={4}>
      <div className="card-container">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <a className="btn-git" onClick={() => linkVerificationGit(gitUrl)}>
          GitHub
        </a>
        <a className="btn-link" onClick={() => linkVerificationProj(projUrl)}>
          Project
        </a>
      </div>
    </Col>
  );
};
