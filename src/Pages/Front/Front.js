import { Link, useNavigate } from 'react-router-dom';
import './Front.css';
import { useState } from 'react'; // Removed unused imports
import { notifyNo, valentineToast } from '../../components/Success/Success';
import { fetchAdmirerData } from '../../Hooks/Hooks';
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
      if (!isNaN(id.id) || !id.id==='') {
        const data = await fetchAdmirerData(id);
        setId({
          ...id,
          id:''
        })
        dispatch(setUserData(data))
        if (data) {
          navigate('/asking');
        }
      } else {
        notifyNo('Please provide a valid ID');
        setId({
          ...id,
          id:''
        })
      }
    },);
  };

  return (
    <div className='front-container'>
      <button onClick={()=>navigate('/initial-docs')} className='front-docs'>FOR INFO ON USAGE CLICK HERE</button>
      <div className='front-item'>
        <Link className='link-h' onClick={handleClick} >
          CHECK OUT YOUR MESSAGE VIA ID
        </Link>

        { accessed && <div className='user-id'>
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
