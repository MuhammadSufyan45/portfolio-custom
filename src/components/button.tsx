import "../style/button.css";

interface texttype {
    item:string
}

export default function Button(text:texttype){
    return(
        <>
        
        <button className="button">{text.item}</button>
        
        </>
        )
};