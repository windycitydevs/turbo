import type { FC } from "react";
import mapParams from "../../lib/map-params";
import Button from "../Buttons";

const VERCEL_CLONE = "https://vercel.com/new/clone" as const;

export interface DeployButtonProps {
  repositoryUrl: string;
  env?: string[];
  projectName?: string;
  repositoryName?: string;
  variant?: "primary" | "secondary" | "ghost" | "violet" | "black" | "white";
}

const DeployButton: FC<DeployButtonProps> = props => {
  const query = mapParams([
    ["repository-url", props.repositoryUrl],
    ["env", props.env?.join(",")],
    ["project-name", props.projectName],
    ["repository-name", props.repositoryName]
  ]);

  return (
    <Button
      Component='a'
      variant={props.variant ?? "primary"}
      href={`${VERCEL_CLONE}${query ? `?${query}` : ""}`}
      target='_blank'
      rel='noreferrer noopener'>
      Clone & Deploy
    </Button>
  );
};

export default DeployButton;
