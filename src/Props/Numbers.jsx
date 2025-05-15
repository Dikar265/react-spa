import {
  IconPaw,
  IconDog,
  IconCat,
  IconHeartHandshake,
} from '@tabler/icons-react';

const petBlogStats = [
  {
    start: 0,
    end: 1200,
    duration: 3.1,
    tittle: "Articles Published",
    icon: <IconPaw size={50} />,
  },
  {
    start: 0,
    end: 850,
    duration: 1.5,
    tittle: "Happy Dogs Featured",
    icon: <IconDog size={50} />,
  },
  {
    start: 0,
    end: 640,
    duration: 2.7,
    tittle: "Cat Care Tips",
    icon: <IconCat size={50} />,
  },
  {
    start: 0,
    end: 980,
    duration: 1.9,
    tittle: "Bonding Success Stories",
    icon: <IconHeartHandshake size={50} />,
  },
];

export default petBlogStats;
