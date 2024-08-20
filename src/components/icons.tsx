import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import type { ElementType } from "react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: ({ iconProps, as, className, classNameText }: { iconProps?: IconProps; as?: ElementType; className?: string; classNameText?: string }) => {
    const Comp = as ?? "div";
    return (
      <Comp className={cn("flex items-center space-x-2 text-lg font-semibold", className)}>
        <Icons.logoIcon className={cn("h-5 w-5 fill-primary", iconProps?.className)} {...iconProps} />
        <span className={classNameText}>{siteConfig.name}</span>
      </Comp>
    );
  },
  logoIcon: (props: IconProps) => (
    <svg width="30" height="30" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="35" fill="white" />
      <path
        d="M32.6569 28.4414L19.5453 19.4015C16.7188 17.4527 13.3777 17.1536 10.563 19.3064C10.0662 19.6876 9.49365 20.2117 9.08755 20.8007C6.07008 25.1773 9.79415 38.5065 14.1707 41.524C16.8104 43.3439 19.6959 43.898 23.1581 43.2624C21.6812 43.7305 20.4235 44.5342 19.3812 45.6733C15.6487 49.7251 14.3087 53.3681 16.1132 55.7261C17.8654 58.0157 20.2597 60.7884 21.7186 61.7942C26.0952 64.8117 33.4465 55.1931 33.1963 50.2841L32.6569 28.4414ZM36.6652 28.3423L49.3145 18.6664C52.0418 16.5798 55.3638 16.1164 58.2815 18.1281C58.7976 18.4839 59.395 18.9792 59.8298 19.5466C63.0592 23.7695 59.9983 37.2662 55.7754 40.4956C53.229 42.4447 50.375 43.1405 46.8857 42.6759C48.3827 43.0704 49.6798 43.8113 50.7761 44.8981C54.7045 48.7607 56.2225 52.3323 54.5371 54.7768C52.9002 57.1511 50.6463 60.0377 49.2382 61.1143C45.0163 64.3443 37.1982 55.1015 37.2062 50.1848L36.6652 28.3423Z"
        fill="black"
      />
      <circle cx="35" cy="17" r="6" fill="black" />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: (props: IconProps) => (
    <svg viewBox="0 0 100 100" className={props.className}>
      <linearGradient id="b" x1="55.41" x2="12.11" y1="96.87" y2="21.87" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1e8e3e" />
        <stop offset="1" stopColor="#34a853" />
      </linearGradient>
      <linearGradient id="c" x1="42.7" x2="86" y1="100" y2="25.13" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fcc934" />
        <stop offset="1" stopColor="#fbbc04" />
      </linearGradient>
      <linearGradient id="a" x1="6.7" x2="93.29" y1="31.25" y2="31.25" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#d93025" />
        <stop offset="1" stopColor="#ea4335" />
      </linearGradient>
      <path fill="url(#a)" d="M93.29 25a50 50 90 0 0-86.6 0l3 54z" />
      <path fill="url(#b)" d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z" />
      <path fill="url(#c)" d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z" />
      <path fill="#fff" d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z" />
      <path fill="#1a73e8" d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z" />{" "}
    </svg>
  ),
  loader: (props: IconProps) => <Loader2Icon {...props} className={cn("duration-400 animate-spin transition-all", props.className)} />,
  hamburger: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
  progress: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 32 32" {...props}>
      <title>{"in-progress"}</title>
      <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z" />
      <path
        d="M0 0h32v32H0z"
        data-name="&lt;Transparent Rectangle&gt;"
        style={{
          fill: "none",
        }}
      />
    </svg>
  ),
};
