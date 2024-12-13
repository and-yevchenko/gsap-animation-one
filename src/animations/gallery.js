import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function galleryAnimation() {
    gsap.from('.gallery-title', {
        scrollTrigger: {
            trigger: '.gallery',
            start: '-30% bottom',
            end: '+=350',
            scrub: true,
        },
        scale: 0,
        transformOrigin: 'left center',
    });

    const items = gsap.utils.toArray('.gallery-box');

    gsap.to(items, {
        scrollTrigger: {
            trigger: '.gallery',
            start: '-30% center',
            scrub: true,
        },
        xPercent: -30 * (items.length - 1),
    });
}
