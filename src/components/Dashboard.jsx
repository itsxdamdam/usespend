import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckBalance = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setBalance(null);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/accounts/${publicKey}/balance`
      );
      setBalance(response.data.balance);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Account Dashboard</h2>

      <form onSubmit={handleCheckBalance}>
        <div className="flex space-x-4">
          <input
            type="text"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
            placeholder="Enter Public Key"
            className="flex-1 rounded-md border-gray-300 shadow-sm"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Checking..." : "Check Balance"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {balance !== null && (
        <div className="mt-6">
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-medium">Current Balance:</p>
            <p className="text-2xl font-bold">{balance} XLM</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
