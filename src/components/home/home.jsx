import { useSelector } from "react-redux";

const Home = () => {
    const rateCount = useSelector((state) => state.counter.counter);

    return (
        <>
            <div className="container w-75 text-center
             my-5 py-5 text-uppercase shadow 
              ">
                <h3 className="fs-2 py-5 text-black-50">our clients supports us with <span className="text-danger fs-1">{rateCount}</span>  $</h3>
            </div>
        </>
    )
};


export default Home;