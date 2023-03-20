import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

import "./styles.css";

import LinkButton from "../../components/LinkButton";

function UserPage() {
  const { name } = useParams<{ name: string }>();
  const [searchParams] = useSearchParams();
  const linkedin = searchParams.get("linkedin") || "";
  const github = searchParams.get("github") || "";
  return (
    <div className="page">
      <h3>Hello, my name is {name}</h3>
      <div className="button-content">
        {linkedin && <LinkButton href={linkedin}>LinkedIn</LinkButton>}
        {github && <LinkButton href={github}>Github</LinkButton>}
      </div>
    </div>
  );
}

export default UserPage;
