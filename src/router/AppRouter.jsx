import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { StaffPracticePage } from "../pages/StaffPracticePage";
import { IntervalsPage } from "../pages/IntervalsPage";
import { RythmsPage } from "../pages/RythmsPage";
import { ChordsPage } from "../pages/ChordsPage";
import { EasyIntervalsPage } from "../pages/EasyIntervalsPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/staff-practice" element={<StaffPracticePage />} />
        <Route path="/intervals" element={<IntervalsPage />} />
        <Route path="/easy-intervals" element={<EasyIntervalsPage />} />
        <Route path="/rythms" element={<RythmsPage />} />
        <Route path="/chords" element={<ChordsPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
