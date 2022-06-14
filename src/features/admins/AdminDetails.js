import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { getAsyncAdmin } from "../admins/AdminsSlice";
import axios from "../../config/axios";

const AdminDetails = (props) => {
  const { adminId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAsyncAdmin(adminId));
    (async () => {
      try {
        const response = await axios.get(`/admins/${adminId}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        // return response.data;
      } catch (error) {
        alert("getAdmins Error", error.message);
      }
    })();
  }, [adminId]);

  return <div></div>;
};

export default AdminDetails;
