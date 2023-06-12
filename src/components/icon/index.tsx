import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  variant: "linkedin" | "instagram" | "github";
}

const mapIcons: Record<IconProps["variant"], IconDefinition> = {
  linkedin: faLinkedin,
  instagram: faInstagram,
  github: faGithub,
};

export function Icon(props: IconProps) {
  return <FontAwesomeIcon {...props} icon={mapIcons[props.variant]} />;
}
