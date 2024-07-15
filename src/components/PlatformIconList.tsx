import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
// 'fa' is short for Font Awesome

import { IconType } from "react-icons";
// 'md' is short for Material Design

import { SiNintendo } from "react-icons/si";
// 'si' is short for Simple Icons

import { BsGlobe } from "react-icons/bs";
// 'bs' is short for Bootstrap

import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //This is called an Index Signature in TypeScript. By using Index Signature, we do not have to specify the names of these keys.
  //This object has any number of keys, and each key is a string. (keys of type string)
  const iconMap: {[key: string] : IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    // ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  }

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
        // Defines the shades of grey
      ))}
    </HStack>
  );
};

export default PlatformIconList;
