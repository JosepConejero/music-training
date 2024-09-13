import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { StaffPracticePage } from "../pages/StaffPracticePage";
import { IntervalsPage } from "../pages/IntervalsPage";
import { SingingPage } from "../pages/SingingPage";
import { DictationPage } from "../pages/DictationPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/staff-practice" element={<StaffPracticePage />} />
        <Route path="/intervals" element={<IntervalsPage />} />
        <Route path="/singing" element={<SingingPage />} />
        <Route path="/dictation" element={<DictationPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
