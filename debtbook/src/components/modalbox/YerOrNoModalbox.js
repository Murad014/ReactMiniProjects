import {forwardRef, useImperativeHandle, useRef} from "react";


const YesOrNoModalbox = forwardRef(function YesOrNoModalbox({yesClickHandler, noClickHandler, ...props}, ref){
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            },
            close(){
                dialog.current.close();
            }
        }
    });

    return (
        <dialog
            ref={dialog}
        >
            <div className="flex items-center justify-center p-4 text-center">
                <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
                <div className="relative bg-white rounded p-8 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 ">Are you sure?</h2>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={yesClickHandler}
                        >
                            Yes
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            onClick={noClickHandler}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
});

export default YesOrNoModalbox;