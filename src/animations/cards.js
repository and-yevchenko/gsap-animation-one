import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function cardsAnimation() {
    gsap.from('.cards-img', {
        scrollTrigger: {
            trigger: '.cards',
            start: '-70% center',
            end: '+=300px',
            scrub: true,
        },
        scale: 0,
        transformOrigin: 'left center',
        ease: 'power3',
        stagger: 1,
    });

    gsap.from('.cards-text', {
        scrollTrigger: {
            trigger: '.cards',
            start: '-30% center',
            end: '+=300px',
            scrub: true,
        },
        scale: 0,
        transformOrigin: 'top center',
        ease: 'none',
        stagger: 1,
    })
}