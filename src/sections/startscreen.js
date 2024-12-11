import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const appearElements = () => {
    const tl = gsap.timeline();
    tl.fromTo(
        '.startscreen-title',
        {
            x: -100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
        },
        0.5
    )
        .fromTo(
            '.startscreen-text',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            0.5
        )
        .fromTo(
            '.startscreen-btn-1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            0.8
        )
        .fromTo(
            '.startscreen-btn-2',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            1
        )
        .fromTo(
            '.startscreen-star',
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
            },
            1.2
        );
};

const scrollAnimation = () => {
    gsap.to('.startscreen-content', {
        scrollTrigger: {
            trigger: '.startscreen',
            start: 'top top',
            scrub: true,
        },
        yPercent: 60,
        scale: 0.7,
        xPercent: -60,
        opacity: 0,
    });

    gsap.to('[data-speed]', {
        y: (id, el) =>
            -(1 - parseFloat(el.getAttribute('data-speed'))) *
            ScrollTrigger.maxScroll(window),
        scrollTrigger: {
            scrub: 0,
        },
    });
};

export function startscreenAnimation() {
    appearElements();
    scrollAnimation();
}
