import { Navbar } from "../components/Navbar";
import { Staff } from "../staffComponents/Staff";
import { StaffControls } from "../staffComponents/StaffControls";

export const StaffPracticePage = () => {
  return (
    <>
      <Navbar />
      <main className="staff-practice">
        <span>Staff Practice</span>
        <Staff />
        <StaffControls />
      </main>
    </>
  );
};
