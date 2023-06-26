import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Counter/Counter.css";
import {useSelector, useDispatch} from "react-redux";

const Counter = () =>{
    const counter = useSelector(state=>state.counter);

    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch({type: "increment"});
    }

    const handleDecrement = () =>{
        dispatch({type: "decrement"});
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="text-center mb-4">Temperature Counter</h2>
                        </div>
                    </div>
                    <div className='text-center pb-5'>
                        <div className='temperature-container'>
                            <div className={`temperature-unit ${counter > 14 ? "hot" : ""}`}>
                                <p className='temperature'>{counter}°C</p>
                            </div>
                            <div className='button-container'>
                                <button onClick={handleIncrement}>+</button>
                                <button onClick={handleDecrement}>-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;