import "./GameContent.css"

export default function GameContent({children}){
    return (
        <div className="game-content">
            {children}
        </div>
    );
}