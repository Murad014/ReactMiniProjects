import "./Cell.css";

export default function Cell({children, func, ...props}){
    return (
        <div className="cell" onClick={func} {...props}>{children}</div>
    );
}