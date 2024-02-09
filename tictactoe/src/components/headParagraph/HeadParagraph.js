import "./HeadParagraph.css";
export default function HeadParagraph({className, ...props}){
    return (
        <p className={className} {...props}>Tic-Tac-Toe</p>
    );
}
