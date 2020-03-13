import { keyframes } from "../../../../theme/styled-components"

export const animationFade = keyframes`
    0% {
    opacity: 0;
    transform: scale(0.85);
    }
    100% {
    opacity: 1;
    transform: scale(1);
    }
`
export const animationFadeSlide = keyframes`
    0% {
    opacity: 0;
    transform: translateY(7%);
    }
    100% {
    opacity: 1;
    transform: translateY(0);
}
`