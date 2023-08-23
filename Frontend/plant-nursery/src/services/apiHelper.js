import axios from 'axios';

export const apiHelper = axios.create({ baseURL: "http://localhost:8080" });

{/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {userRole === 'user' && <Route path="/" element={<UserRoutes />} />}
          {userRole === 'staff' && <Route path="/" element={<StaffRoutes />} />} */}