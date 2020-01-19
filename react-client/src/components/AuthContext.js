import React from 'react';

const initialStateAuth = {
  isLogged: false,
  discordUsername: null,
  discordID: null,
  haxData: null,
};

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const reducerAuth = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        discordUsername: action.payload.discordusername,
        discordID: action.payload.discordid,
        haxData: action.payload.haxdata,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
        discordUsername: null,
        discordID: null,
        haxData: null,
      };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducerAuth, initialStateAuth);

  React.useEffect(() => {
    const clientCookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)discordHAXROAuthToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (clientCookieToken) {
      fetch(`/api/cookie?clientcookietoken=${clientCookieToken}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('[useEffect AuthContext] Network response NOT OK');
          }
          return response.json();
        })
        .then((discordData) => {
          if (!discordData.id) {
            dispatch({
              type: 'LOGOUT'
            });
            throw new Error('[useEffect AuthContext] Could not retrieve discord data');
          }
          // First must get haxball data from sqlite
          fetch(`/api/users/bydiscordid?discordid=${discordData.id}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('[useEffect AuthContext Find by discord id] Network response NOT OK');
              }
              return response.json();
            })
            .then((haxdatasqlite) => {
              dispatch({
                type: 'LOGIN',
                payload: {
                  discordusername: discordData.username,
                  discordid: discordData.id,
                  haxdata: haxdatasqlite
                }
              });
            })
            .catch();
        })
        .catch((error) => {
          console.error('[useEffect AuthContext] Catch Error: ', error);
        });
    }
  }, []);

  return (

    <AuthStateContext.Provider value={state}>

      <AuthDispatchContext.Provider value={dispatch}>

        {children}

      </AuthDispatchContext.Provider>

    </AuthStateContext.Provider>

  );
}

export function useAuthState() {
  const context = React.useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
}
