
## React Routing and Single-Page Applications

### 1. Building a Comic Book Library with React Router

**Task 1: Install and Setup React Router**

Initialize a new React project or use the previous Marvel Comics API comic project and install the latest version of the React Router.
Set up React Router in your application.

``` html
npm install
npm i react-router-dom
npm run dev
```
**Task 2: Create Route Components**

Create four new components: Home, BrowseCharacters, CharacterDetails, and Comics. The home & comic components can be empty for now, with just a simple return statement and you can reuse your browse & detail components from the previous assignment.

```jsx
import React from 'react'

const CharacterDetails = () => {
  return (
    <div>
        <h3>CharacterDetails </h3>
        <p>This component is under construction. Check back later!</p>
        </div>
  )
}

export default CharacterDetails

```
**Task 3: Setting Up Routes**

In your application's main file, set up routes using BrowserRouter and Route from React Router. Assign each route to the corresponding component.

```jsx
  <>
    <NavBar />

    {/* Routes */}

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/BrowseCharacters' element={<BrowseCharacters/>} />
    <Route path='/CharacterDetails' element={<CharacterDetails/>} />
    <Route path='/Comics' element={<Comics/>} />


    <Route path='/axios-users' element={<UserList/>}/>

    <Route path='/axios-users/:id' element={<UserDetail/>} />


   {/* Error Handling. for url that are not found. */}
    <Route path='*' element={<NotFound/>} />

    </Routes>
    
    </>  
```

### 2. Enhancing Comic Book Library with Advanced Routing

**Task 1: Implement Navigation Links**

Add Link and NavLink components from React Router to navigate between the Home, and Browse Products pages.
Highlight the active link using NavLink.

```jsx
  <div className='navbar-container' >
        
        <Link to="/">Home</Link>
   

        <nav>
            <NavLink to="/BrowseCharacters" activeClassName="active"> BrowseCharacters </NavLink>
            <NavLink to="/CharacterDetails" activeClassName="active" > CharacterDetails</NavLink>
            <NavLink to="/axios-users" activeClassName="active"> Users </NavLink>
            <NavLink to="/Comics" activeClassName="active" > Comics </NavLink>
        </nav>
      
    </div>
```
**Task 2: Dynamic Routes for Character Details**

Modify the ProductDetails component to accept a character ID as a route parameter.
Update the BrowseProducts component to link each character to its details page using the character ID.

**DISCLAMIER:**

I know you requested the the retrieval of the products, I apply the same comcept to the users, I just want to practice some more on user retrieval in preparation for my mini project. I apply the same concept just requested. I hope thats okay... if not let me know.

```jsx
const UserList = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
   const [selectedUserInfo, setSelectedUserInfo] = useState(null)

  const selectUser = (id) => {
    setSelectedUser(id)
    getUserInfo(id)
  }

  const getUserInfo = (id) => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
    .then(response => {
      console.log(response)
      setSelectedUserInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/users/')
    .then(response => {
 
    console.log(response)

    setUsers(response.data)

})
.catch(error => {
  console.log(error)
})

  }, [])

  return (
    <div>
      <h1>List of Users</h1>

      { selectedUser && 
        <div>
          <h3>Selected User</h3>
          <p>{selectedUser}</p>
        </div>
      }

{ selectedUserInfo && 
        <div className='card'>
          <h3>Selected User</h3>

          {/* Pretend it is a card */}
          <p>{selectedUserInfo.name.firstname}</p>
          <p>{selectedUserInfo.name.lastname}</p>
          <p>{selectedUserInfo.email}</p>
        </div>
      }

      <h3>Users</h3>

      { users.map((user, index) => 
        <div key={index}>
           <p>{user.name.firstname}</p>

        <ReusableButton handleClick={() => selectUser(user.id)} title="Select User"/>
         
          <Link to={`/axios-users/${user.id}`}>Details</Link>
          


        </div>
      )}
    </div>
```

**Task 3: Error Page Management**

Create a new component NotFound to handle undefined routes.
Configure your routing to display the NotFound component for any undefined paths.

```jsx
const NotFound = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    },5000) // Navigate to the home screen after 5 seconds
    
  return (
    <div className='not-found-container' >
        <h1>404</h1>
        <p>Page Not found</p>
        <Link to="/">Go Back to Home</Link>
        
        </div>
  );
}

export default NotFound;
```

```jsx
 {user ?(
            <>
            <h2>{user.username}</h2>
            <p>{user.name.firstname} {user.name.lastname}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <Link to="/axios-users" >Back to user page</Link>

            </>
        ) : (
            <> <p> No User Found</p>
            <Link to="/axios-users" >Back to user page</Link>
            </>
            
        )}
```









#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
