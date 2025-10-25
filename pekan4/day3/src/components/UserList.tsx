import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { RootState, AppDispatch } from "../app/store";

const UserList: React.FC = () => {
  const { list, status, error } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(fetchUsers());
  }, [status, dispatch]);

  if (status === "loading") return <p className="text-center mt-4">Memuat pengguna...</p>;
  if (status === "failed") return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="text-center p-5">
      <h2 className="text-2xl mb-3">Daftar Pengguna</h2>
      <ul className="list-disc list-inside">
        {list.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
