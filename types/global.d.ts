import { MutableRefObject } from "react";

type UseClickToScroll = (elementId?: string, direction:string, refClick: React.MutableRefObject<HTMLDivElement|null>) => () => void;

interface IUseClickToScroll {
    (elementId?: string, direction: 'left' | 'right', refClick: React.MutableRefObject<HTMLDivElement|null>): () => void;
  }
  