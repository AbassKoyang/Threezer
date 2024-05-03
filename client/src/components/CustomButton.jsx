import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({type, title, customStyles, handleClick}) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if(type === 'filled'){
            return (
               { 
                    backgroundColor: snap.color,
                    color: '#fff',
               }
            )
        }
    }
    return (
    <button 
        className={`px-2 ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton