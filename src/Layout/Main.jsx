import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;