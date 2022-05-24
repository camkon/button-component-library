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
export default Simple;
