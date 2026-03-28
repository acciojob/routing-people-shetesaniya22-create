import { useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers(){
        try{

        }catch(error){

        }
    }
    useEffect(()=>{
        fetchUsers();

    },[])

    if(loading) return <h2>Loading...</h2>

  return (
    <div>
       <h1> UserList</h1>
       <ul>
        {users.map((user)=>(
            <li key={user.id}>
                <Link to={`/user/${user.id}`}>
                {user.name}
                </Link>
            </li>
        ))}
       </ul>
       
    </div>
  )
}

export default UserList