import Link from 'next/link';
import Router from 'next/router';

const UsersList = props => (
<div>
   {
       props.users.map(user => (
           <div>
               <Link href={`/User?name=${user.username}`} as={`/user/${user.username}`}>
                    <a onMouseEnter={()=>{Router.prefetch(`/User?name=${user.username}`);console.log('prefetching...')}}
                    className="username">{user.name}
                    </a>
                </Link>
            </div>
       ))
        }
<style jsx>{`
    .username2{
        backround:black;
        color:white
    }
`}</style>
</div>
)
export default UsersList;