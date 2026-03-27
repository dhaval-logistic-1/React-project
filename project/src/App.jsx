import React, {  useEffect } from "react";
import { fetchUsers, setPage } from "./redux/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { users, page, limit, loading, error, hasMore } = useSelector(
    (state) => state.users,
  );

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));
  }, [dispatch, page, limit]);

  // const nextPage = () => {
  //   dispatch(setPage(page + 1));
  // };

  // const prevPage = () => {
  //   if (page > 1) {
  //     dispatch(setPage(page - 1));
  //   }
  // };

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="h-full w-full text-white bg-gray-950 ">
      <h1 className="text-3xl font-bold text-center py-4">User List</h1>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid  md:grid-cols-8  gap-1 p-1">
        {users.map((user, index) => (
          <div
            key={`${user.id}-${index}`}
            className="bg-gray-800 rounded-lg p-1"
          >
            <img
              src={user.download_url}
              alt={user.author}
              className="w-full h-24 object-cover rounded-md mb-2"
            />

            <h2 className="text-sm ">{user.author}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-4">
        {hasMore ? (
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Load More
          </button>
        ) : (
          <p>No more data</p>
        )}
      </div>

      {/* <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={users.length < limit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default App;
