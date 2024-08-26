const Dashboard = () => {
  return (
    <section className="w-full max-w-7xl mx-auto text-center py-10 bg-gray-900 rounded-3xl mb-8 px-8">

      {/* Title and Amount */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">PORTFOLIO</h1>
        <p className="text-3xl font-bold text-green-400 mt-4">$1.00</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Account Management */}
        <div className="md:col-span-1 bg-black shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Account Management</h3>
          <p className="text-gray-400 leading-relaxed">Manage your personal information and account settings.</p>
        </div>

        {/* Transaction History */}
        <div className="md:col-span-3 bg-black shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Transaction History</h3>
          <p className="text-gray-400 leading-relaxed">View your recent transactions and financial activities.</p>
        </div>

        {/* Notifications */}
        <div className="md:col-span-2 bg-black shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Notifications</h3>
          <p className="text-gray-400 leading-relaxed">Check the latest notifications and updates related to your account.</p>
        </div>

        {/* Ongoing Schedule */}
        <div className="md:col-span-2 bg-black shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Ongoing Schedule</h3>
          <p className="text-gray-400 leading-relaxed">Track your upcoming deadlines and plan your next financial actions.</p>
        </div>

      </div>
    </section>
  );
}

export default Dashboard;
