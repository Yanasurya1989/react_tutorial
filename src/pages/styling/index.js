import './style.css'
import Opo from './text'
const Stylei = () => {
    return (
        <div>
            <p style={
                {
                    color: 'green',
                    textAlign: 'center'
                }
            }>Styling</p>

            <p className='blue italic'>Style</p>
            <Opo/>
        </div>
    );
}

export default Stylei;