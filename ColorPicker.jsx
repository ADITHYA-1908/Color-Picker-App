import react, {useState} from 'react';
function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF');
    function handlecolorchange(event){
        setColor(event.target.value);
    }
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>select a color:</label>
            <input type='color' value={color} onChange={handlecolorchange}></input>
        </div>
    );

}
export default ColorPicker;