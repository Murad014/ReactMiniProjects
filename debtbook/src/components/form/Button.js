import Home from "../Home";


export default function Button({handleAction, children, className, ...props}) {
    if(className === undefined || className === null)
        className = "flex-1 rounded-2xl border-2 mt-2 hover:bg-gray-200 p-2 mr-1";

    return (
        <button className={className} onClick={handleAction} {...props}>
            {children}
        </button>
    );
}