import { cardsAnimation } from './cards';
import { startscreenAnimation } from './startscreen';
import { contentBoxAnimation } from './content-box';
import { galleryAnimation } from './gallery';

export function runAnimations() {
    startscreenAnimation();
    cardsAnimation();
    contentBoxAnimation();
    galleryAnimation();
}
