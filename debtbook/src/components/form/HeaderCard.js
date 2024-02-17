

export default function HeaderCard({cardName}){

    return(
        <>
            <h1 className="m-auto mb-2">{cardName}</h1>
            <hr className="border-t border-gray-300 mb-5"/>
        </>
    );

}