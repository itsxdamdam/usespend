import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateAccount = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/accounts');
      setAccount(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Create Stellar Account</h2>
      
      <button
        onClick={handleCreateAccount}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Creating...' : 'Create New Account'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {account && (
        <div className="mt-6">
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-medium">Public Key:</p>
            <p className="break-all">{account.publicKey}</p>
            <p className="font-medium mt-4">Secret Key:</p>
            <p className="break-all">{account.secretKey}</p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Save these keys securely! You'll need them to access your account.
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;