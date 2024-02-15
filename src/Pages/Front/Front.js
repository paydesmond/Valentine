import { Link, useNavigate } from 'react-router-dom';
import './Front.css';
import { useState } from 'react';
import { notifyNo, valentineToast } from '../../components/Success/Success';
import { fetchAdmirerData } from '../../Hooks/Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../Features/idSlice';

const Front = () => {
  const [accessed, setAccessed] = useState(false);
  const [id, setId] = useState({ id: '' }); // Initialize id with an empty string
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector(state => state.id.userdata);

  const handleClick = () => setAccessed(prevState => !prevState);

  const handleChange = (e) => {
    setId({
      ...id,
      [e.target.name]: e.target.value
    });
  };

  const handleNavigate = async () => {
    setTimeout(async () => {
      if (!isNaN(id.id) && id.id !== '') {
        try {
          const data = await fetchAdmirerData(id);
          setId({ ...id, id: '' });
          dispatch(setUserData(data));
          
          if (userdata && userdata?.id === id?.id) {
            navigate('/asking');
          } else {
            notifyNo('Please provide a valid ID');
          }
        } catch (error) {
          notifyNo('Please provide a valid ID');
        }
      } else {
        notifyNo('Please provide a valid ID');
      }
    },);
  };

  return (
    <div className='front-container'>
      <button onClick={() => navigate('/initial-docs')} className='front-docs'>FOR INFO ON USAGE CLICK HERE</button>
      <div className='front-item'>
        <div className='link-h'>
        <Link  onClick={handleClick} >
          <div className='size'>CHECK OUT YOUR MESSAGE VIA ID</div>
        </Link>
        </div>

        {accessed && (
          <div className='user-id'>
            <input
              name='id'
              value={id.id}
              onChange={handleChange}
              placeholder="Enter ID"
            />
            <button onClick={handleNavigate} className='go'>GO</button>
          </div>
        )}

        <div className='link-h'>
        <Link  to='/askcrushout'>
          <div className='size'>ASK HIM / HER OUT</div>
        </Link>
        </div>
      </div>
      {valentineToast}
    </div>
  );
};

export default Front;
