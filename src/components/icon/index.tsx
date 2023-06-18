import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  use: "linkedin" | "instagram" | "github";
}

const mapIcons: Record<IconProps["use"], IconDefinition> = {
  linkedin: faLinkedin,
  instagram: faInstagram,
  github: faGithub,
};

export function Icon(props: IconProps) {
  return (
    <>
      {mapIcons[props.use] && (
        <FontAwesomeIcon
          {...props}
          icon={mapIcons[props.use]}
          data-testid={`icon of ${props.use}`}
        />
      )}
    </>
  );
}
