import { IconType } from "react-icons";
import gsap from "gsap";
import { useLayoutEffect } from "react";

interface BreadCrumbData {
  breadCrumbClassName: string;
  title: string;
  icon: IconType;
  iconColor: string;
}

const BreadCrumb = ({
  title,
  breadCrumbClassName,
  icon,
  iconColor,
}: BreadCrumbData) => {
  const BreadCrumbIcon: IconType = icon;

  return (
    <span
      className={`hero__breadcrumb hero__breadcrumb--${breadCrumbClassName}`}
    >
      {title}
      {
        <BreadCrumbIcon
          className={`hero__breadcrumb--icon hero__breadcrumb--icon--${breadCrumbClassName}`}
          size="2em"
          color={iconColor}
        />
      }
    </span>
  );
};

export default BreadCrumb;
