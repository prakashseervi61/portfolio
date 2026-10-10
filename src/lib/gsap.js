import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

// Single registration point: components import gsap/useGSAP from here instead of
// each calling gsap.registerPlugin() themselves.
gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, useGSAP };