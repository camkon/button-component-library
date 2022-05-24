/// <reference types="react" />
interface SimpleButtonProps {
    action?: string;
    label?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    fontSize?: string;
    onClick?: any;
}
declare const Simple: {
    (props: SimpleButtonProps): JSX.Element;
    SimpleButtonProps: SimpleButtonProps;
};

interface LoginButtonProps {
    label: string;
}
declare const Login: (props: LoginButtonProps) => JSX.Element;

export { Login, Simple };
