import { Link, useNavigate } from 'react-router-dom';
import './Front.css';
import { useState } from 'react'; // Removed unused imports
import { notifyNo, valentineToast } from '../../components/Success/Success';
import { fetchAdmirerData1 } from '../../Hooks/Hooks';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../Features/idSlice';

const Front = () => {
  const [accessed, setAccessed] = useState(false);
  const [id, setId] = useState({
    id: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => setAccessed(prevState => !prevState);

  const handleChange = (e) => {
    setId({
      ...id,
      [e.target.name]: e.target.value
    });
  };

  const handleNavigate = async () => {

    setTimeout(async () => {
      if (!isNaN(id.id)) {
        const data = await fetchAdmirerData1(id);
        dispatch(setUserData(data))
        if (data) {
          navigate('/asking');
        }
      } else {
        notifyNo('Please provide a valid ID');
      }
    }, 2000);
  };

  return (
    <div className='front-container'>
      <div className='front-item'>
        <Link className='link-h' onClick={handleClick}>
          CHECK OUT YOUR MESSAGE
        </Link>

        {accessed &&  
          <div className='user-id'>
            <input
              name='id'
              value={id.id}
              onChange={handleChange}
              placeholder="Enter ID"
            />
            <button onClick={handleNavigate} className='go'>GO</button>
          </div>
        }

        <Link className='link-h' to='/askcrushout'>
          ASK HIM / HER OUT
        </Link>
      </div>
      {valentineToast}
    </div>
  );
};

export default Front;
