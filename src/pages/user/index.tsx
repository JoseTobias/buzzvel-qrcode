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
      <p>Hello, my name is {name}</p>
      <div className="button-content">
        <LinkButton href={linkedin}>LinkedIn</LinkButton>
        <LinkButton href={github}>Github</LinkButton>
      </div>
    </div>
  );
}

export default UserPage;
