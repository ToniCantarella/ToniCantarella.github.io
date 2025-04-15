import { useTranslation } from "react-i18next"
import "./Ripple.scss"

export const RippleButton = () => {
    const { t } = useTranslation()

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;

        const previousRipple = button.getElementsByClassName("ripple-effect")[0];

        if (previousRipple) {
            previousRipple.remove();
        }

        const rippleEffect = document.createElement("div");
        button.appendChild(rippleEffect);

        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        const rect = button.getBoundingClientRect();
        const left = event.clientX - rect.left - radius;
        const top = event.clientY - rect.top - radius;

        rippleEffect.style.width = rippleEffect.style.height = `${diameter}px`;
        rippleEffect.style.left = `${left}px`;
        rippleEffect.style.top = `${top}px`;
        rippleEffect.classList.add("ripple-effect");
    }

    return (
        <button
            id="ripple-button"
            onClick={createRipple}
        >
            <span>{t("examples.button-sample-text")}</span>
        </button>
    )
}