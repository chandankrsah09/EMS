import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] rounded mt-5 p-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>
      <div className="">
        {authData.employee.map(function (e, idx) {
          return (
            <div key={idx} className="bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5">{e.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-500">
                {e.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {e.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white">
                {e.taskCounts.complete}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-500">
                {e.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
