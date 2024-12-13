import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function contentBoxAnimation() {
    gsap.to('.content-box-img', {
        scrollTrigger: {
            trigger: '.content-box',
            scrub: true,
        },
        yPercent: -30,
    });
    gsap.to('.content-box-info', {
        scrollTrigger: {
            trigger: '.content-box',
            scrub: true,
        },
        yPercent: 20,
    });
}
