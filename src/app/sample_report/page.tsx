
import ReportSliderUi from "@/components/ReportSliderUI";

const sampleReport = () => {


  return (
    <div style={{ backgroundImage: `url('cardash.png')` }}
      className="h-screen relative bg-cover bg-center pt-[100px] flex justify-center items-center">
      <div className="bg-black/80 z-[5] absolute inset-0" />
      <div className="z-10 h-[80vh] flex items-center">
        <ReportSliderUi />
        {/* <img className="max-w-[800px] border" src="/gmail_report1.png" alt="" /> */}
      </div>
    </div>
  );
};

export default sampleReport;
