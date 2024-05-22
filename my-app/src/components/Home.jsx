import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/student">
        <button>Go to Student</button>
      </Link>
      <Link to="/teacher">
        <button>Go to Teacher</button>
      </Link>
    </div>
  );
}

export default Home;