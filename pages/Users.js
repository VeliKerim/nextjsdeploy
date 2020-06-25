import UsersList from '../components/UsersList';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';
import { Component } from 'react';


class users extends React.Component{

    static async getInitialProps(){
        const res =await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await res.json();

    return {users};
    }
    render(){
        return(
            <Layout>
                <div>
                    <h1>Users page</h1> <br/>
                    <UsersList users={this.props.users}></UsersList>
                </div>
            </Layout>
        )
    }
}
/*const Users = props=>(
    <Layout>
        <div>
            {
                //JSON.stringify(props)
            }
            <h1>Users page</h1> <br/>
            <UsersList users={props.users}></UsersList>
        </div>
    </Layout>
);*/

/*Users.getInitialProps = async() => {
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    return {users};
}*/
export default users;