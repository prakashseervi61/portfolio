import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

/**
 * Single registration point for the GSAP plugins.
 *
 * Components used to call `gsap.registerPlugin(useGSAP, ScrollTrigger)` in
 * every file, which meant any component imported in isolation had to remember
 * to register them. Importing this module registers them once for the app.
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, useGSAP, ScrollTrigger };