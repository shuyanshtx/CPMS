// call 后端看当前用户有没有登陆，有没有session
// 如果登陆， 
//go to some component (prop) <- 作为一个参数传进去

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const Authorization = ({ children, user, ...rest }) => {
    
    // function PrivateRoute() {
    //     // let auth = useAuth();

    //   }
      
    // function useAuth() {
    //     return useContext(authContext);
    // }
      
    // useEffect (
    //     () => {
    //         fetch(urlGet, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         // 200 / 403
    //             .then(response => {
    //                 if (response.status === 200) {
    //                     setLoggedIn = true;
    //                 }
    //             })
                
    //         // // Update the document title using the browser API
    //         // document.title = `You clicked ${count} times`;
    //     }, []
    // )
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};