import "./ModalBox.css";

export default function ModalBox({active, children}){
    return (
        active && <div id="myModal" className="modal">
            <div className="modal-content">
                {children}
            </div>
        </div>

    );

}