export const LetterMIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class=""
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#000000"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 20v-16l6 14l6 -14v16" />
  </svg>
);

export const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="submit_game_button"
    id="validTry"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#000000"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="8" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="16" y1="12" x2="12" y2="8" />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#000000"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <path d="M10 10l4 4m0 -4l-4 4" />
  </svg>
);

export const FingerClickIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="0.8"
    stroke="white"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
    <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
    <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
    <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
  </svg>
);
