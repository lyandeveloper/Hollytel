import React, { createContext, useState } from 'react';

// import { Container } from './styles';

interface AccountContextData {
  email: string;
  password: string;
  handleAccount(email: string, password: string): void;
}

const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData,
);

export const AccountProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleAccount(email: string, password: string) {
    setEmail(email);
    setPassword(password);
  }
  return (
    <AccountContext.Provider value={{ email, password, handleAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
