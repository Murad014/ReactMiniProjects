
export default function Form({title, ...props}){
    return (
        <div className="text-xl m-auto shadow-xl">
            <div className="p-5 flex flex-col">
                <h1 className="m-auto mb-2">Add Customer</h1>
                <hr className="border-t border-gray-300 mb-5"/>

                <label className="text-xl">First name</label>
                <input type="text" className="border-2 p-1 text-lg w-80 mb-5"/>

                <label className="text-xl">Last name</label>
                <input type="text" className="border-2 p-1 text-lg w-80 mb-5"/>

                <label className="text-xl">Email</label>
                <input type="text" className="border-2 p-1 text-lg w-80 mb-5"/>

                <label className="text-xl">Phone</label>
                <input type="text" className="border-2 p-1 text-lg w-80"/>

                <div className="flex flex-row">
                    <button className="flex-1 rounded-2xl border-2 mt-2 hover:bg-gray-200 p-2 mr-1">Save</button>
                    <button className="flex-1 rounded-2xl border-2 mt-2 hover:bg-gray-200 p-2">Cancel</button>
                </div>

            </div>
        </div>
    );
}