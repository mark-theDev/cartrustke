'use client'
import { useEffect, useRef, useState } from "react";
import { LuBoxes } from "react-icons/lu";
import { CiShare1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GoAlert } from "react-icons/go";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { FaCarCrash } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { FaVanShuttle } from "react-icons/fa6";
import { RiGovernmentLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { FaLongArrowAltUp } from "react-icons/fa";
import { GiNinjaMask } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { TbEngine } from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { MdOutlineRecycling } from "react-icons/md";
import './styles.css'
import { FiUsers } from "react-icons/fi";
import { FcInspection } from "react-icons/fc";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Link from "next/link";
import { useReactToPrint } from 'react-to-print';
import Image from "next/image";
import { SectionRef }from '@/types/sectionRef'



const sampleReport = () => {

  const [showPurpose, setShowPurpose] = useState(false)
  const [showTheft, setShowTheft] = useState(false)
  const [showOdometer, setShowOdometer] = useState(false)
  const [showLegal, setShowLegal] = useState(false)
  const [showDamage, setShowDamage] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const expandAllSections = () => {
    setShowPurpose(true);
    setShowTheft(true);
    setShowOdometer(true);
    setShowLegal(true);
    setShowTimeline(true)
    setShowDamage(true)
    setShowOptions(true)
  };

  const collapseAllSections = () => {
    setShowPurpose(false);
    setShowTheft(false);
    setShowOdometer(false);
    setShowLegal(false);
    setShowTimeline(false)
    setShowDamage(false)
    setShowOptions(false)
  };

  const componentRef = useRef(null)
  const expandedButtonRef = useRef()

  // const generatePdf = () => {

  //   const collapseButton = document.getElementById('collapse-button')

  //   collapseButton ? collapseButton.style.display = 'none' : '';

  //   expandAllSections();

  //   // Add a timeout to ensure content is fully rendered
  //   setTimeout(() => {
  //     const input = document.getElementById('pdf-content');
  //     html2canvas(input).then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png')
  //       const pdf = new jsPDF()

  //       // Get the dimensions of the canvas and the PDF page
  //       const imgWidth = 210     // Adjust scaling factor as needed
  //       const pageHeight = 295
  //       const imgHeight = canvas.height * imgWidth / canvas.width     // Adjust scaling factor as needed
  //       let heightLeft = imgHeight;

  //       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;

  //       while (heightLeft >= 0) {
  //         pdf.addPage();
  //         pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
  //         heightLeft -= pageHeight;
  //       }

  //       pdf.save('report.pdf')

  //       if(collapseButton) {
  //         collapseButton.style.display = ''
  //       }

  //     });
  //   }, 3000);

  //   collapseAllSections();
  // };

  const handlePrint = () => {
    expandAllSections()
    const openButton = document.querySelector('.expand-button')

    openButton?.classList.add('hide-during-pdf')


    setTimeout(() => {
      const input = componentRef.current;
      html2canvas(input, { scrollX: 0, scrollY: -window.scrollY }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height],
        })

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)

        pdf.save('sample_report.pdf')
      });

      collapseAllSections()
      openButton?.classList.remove('hide-during-pdf')
    }, 3000);

  }

  const handleScroll = () => {
    const sections = document.querySelectorAll('section')
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.id)
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollIntoSection = (id:any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleActiveCard = (index:any) => {
    setActiveCard(index)
  }

  const toggleTimeline = () => {
    setShowTimeline(!showTimeline)
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const toggleOpenPurpose = () => {
    setShowPurpose(!showPurpose)
  }

  const toggleOpenTheft = () => {
    setShowTheft(!showTheft)
  }

  const toggleOdometer = () => {
    setShowOdometer(!showOdometer)
  }

  const toggleLegal = () => {
    setShowLegal(!showLegal)
  }

  const toggleDamage = () => {
    setShowDamage(!showDamage)
  }

  const sectionsRef: SectionRef = {
    purpose: useRef<HTMLElement>(null),
    photos: useRef<HTMLElement>(null),
    damage: useRef<HTMLElement>(null),
    theft: useRef<HTMLElement>(null),
    legal: useRef<HTMLElement>(null),
    timeline: useRef<HTMLElement>(null),
    logbook: useRef<HTMLElement>(null),
    odometer: useRef<HTMLElement>(null),
    specs: useRef<HTMLElement>(null),
    downloadSection: useRef<HTMLElement>(null)
  }

  const moveToDiv = (sectionId: keyof SectionRef) => {
    switch (sectionId) {
      case 'purpose': sectionsRef.purpose.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'photos': sectionsRef.photos.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'damage': sectionsRef.damage.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'theft': sectionsRef.theft.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'timeline': sectionsRef.timeline.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'logbook': sectionsRef.logbook.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'odometer': sectionsRef.odometer.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'specs': sectionsRef.specs.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'downloadSection': sectionsRef.downloadSection.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default: console.log('unknown section');
        break
    }
  }


  return (
    <div className="min-h-screen w-full pt-[150px] bg-[#f3f3f3]">
      {/* Page navigation */}
      <ul className="w-full z-[2] fixed top-[60px] right-0 flex flex-wrap bg-white border-t border-gray-200 justify-between px-7 md:px-14 py-2">
        {sections.map((item, idx) => (
          <li
            key={idx}
            className={`text-xs cursor-pointer px-3  py-1 border rounded-full ${activeSection === item.id ? 'bg-slate-200 border-black' : ''}`}
            onClick={() => scrollIntoSection(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div ref={componentRef} className="w-full h-full" id="pdf-content">
        <div id="overview" className="bg-white rounded-lg shadow-md flex flex-col justify-center p-9 w-full md:w-[80vw] mx-auto">
          <div className="flex gap-4">
            <img className="max-h-[120px] rounded-md" src="/assets/CarInfo/Mazda_Wreck.png" alt="mazda wreck" />
            <div>
              <h3 className="mb-3"><span className="text-sm font-medium mr-4">Car Model:</span><span className="text-[15px] font-bold">Mazda 6</span></h3>
              <p className="mb-3"> <span className="text-sm font-medium mr-4">Car Registration:</span><span className="text-[15px] font-bold">KDB 123D</span></p>
              <p className="mb-3"> <span className="text-sm font-medium mr-4">Year of Manufacture:</span><span className="text-[15px] font-bold">2016</span></p>
              <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                <button onClick={handlePrint} className="flex border font-medium hover:text-white hover:bg-black transition-all duration-300 border-black px-3 py-1 rounded-full items-center gap-2 text-xs"><FiDownload className="" />Download report </button>
                <button onClick={() => moveToDiv('downloadSection')} className="flex border font-medium hover:text-white hover:bg-black transition-all duration-300 border-black px-3 py-1 rounded-full items-center gap-2 text-xs"><CiShare1 className="" />Share </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-[60px] gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div onClick={() => moveToDiv('purpose')} className="flex cursor-pointer hover:border hover:border-black transition-all duration-300 flex-col items-center gap-4 p-6 border border-slate-200 rounded-lg">
              <LuBoxes className="text-2xl" />
              <h3 className="text-lg font-medium">Purpose</h3>
              <p className="text-xs bg-[#082854] flex items-center gap-2 py-1 px-2 w-fit rounded-md text-white"><GoAlert />Needs Attention</p>
            </div>
            <div onClick={() => moveToDiv('odometer')} className="flex cursor-pointer hover:border hover:border-black transition-all duration-300 flex-col items-center gap-4 p-6 border border-slate-200 rounded-lg">
              <IoSpeedometerOutline className="text-2xl" />
              <h3 className="text-base font-medium">Odometer</h3>
              <p className="text-xs bg-[#082854] flex items-center gap-2 py-1 px-2 w-fit rounded-md text-white"><GoAlert />Needs Attention</p>
            </div>
            <div onClick={() => moveToDiv('legal')} className="flex cursor-pointer hover:border hover:border-black transition-all duration-300 flex-col items-center gap-4 p-6 border border-slate-200 rounded-lg">
              <GoLaw className="text-2xl" />
              <h3 className="text-base font-medium">Legal status</h3>
              <p className="text-xs bg-[#082854] flex items-center gap-2 py-1 px-2 w-fit rounded-md text-white"><IoMdCheckmark />Looks good</p>
            </div>
            <div onClick={() => moveToDiv('logbook')} className="flex cursor-pointer hover:border hover:border-black transition-all duration-300 flex-col items-center gap-4 p-6 border border-slate-200 rounded-lg">
              <IoClipboardOutline className="text-2xl" />
              <h3 className="text-base font-medium">Logbook check</h3>
              <p className="text-xs bg-[#082854] flex items-center gap-2 py-1 px-2 w-fit rounded-md text-white"><IoMdCheckmark />Looks good</p>
            </div>
            <div onClick={() => moveToDiv('damage')} className="flex  cursor-pointer hover:border hover:border-black transition-all duration-300 flex-col items-center gap-4 p-6 border border-slate-200 rounded-lg">
              <FaCarCrash className="text-2xl" />
              <h3 className="text-base font-medium">Damage</h3>
              <p className="text-xs bg-[#082854] flex items-center gap-2 py-1 px-2 w-fit rounded-md text-white"><GoAlert />Needs Attention</p>
            </div>
          </div>
        </div>
        <div ref={sectionsRef.photos} id="photos" className="bg-white rounded-lg shadow-md flex flex-col mt-8 justify-center p-9 w-full md:w-[80vw] mx-auto">
          <h2 className="text-2xl font-bold mb-8">Photos</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {cards.map((card) => (
              <img
                className="max-w-[250px] rounded-md"
                key={card.id}
                src={card.href}
                alt="car wreck"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div ref={sectionsRef.purpose} id="purpose" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Purpose</h3>
            <p className="text-sm">Was the vehicle used as a taxi, rental, or other service vehicle? Note: such vehicles may be in worse condition than usual!</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex flex-col bg-[#e9e9e9] w-full px-3 py-2 rounded-lg items-start gap-3">
              <h4 className="text-base w-full flex items-center gap-5 font-bold"><GoAlert className="font-bold text-[#082854]" />Beware</h4>
              <h6 className="text-sm w-full font-medium">Vehicle was used as a rental!</h6>
            </div>
            <div className="w-full h-full my-[20px]">
              {showPurpose && (<h4 className="text-sm mb-7 font-medium">Here's what we checked:</h4>)}
              <div className="grid w-full transition-all duration-300 ease-linear grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {showPurpose && purpose.map((item, index) => (
                  <div key={index} className={`flex border rounded-lg flex-col gap-3 p-4 ${item.isFound ? 'border-[#082854] bg-slate-100' : 'border-slate-200'}`}>
                    <h6 className="text-xl p-2 rounded-full w-fit text-black bg-[#e9e9e9]">{item.icon}</h6>
                    <h5 className="text-base font-medium">{item.use}</h5>
                    {item.isFound ? (<h5 className="text-xs bg-[#082854] flex items-center gap-3 w-fit text-white py-1 px-2 rounded-lg"><GoAlert className="text-sm" /> Records found</h5>) : (<h5 className="border border-slate-200 p-1 w-fit text-xs rounded-lg">No records found</h5>)}
                    <h5 className="text-xs">{item.description}</h5>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={toggleOpenPurpose} className="expand-button rounded-full text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showPurpose ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
          </div>
        </div>
        <div ref={sectionsRef.theft} id="theft" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Theft</h3>
            <p className="text-sm">Is the vehicle currently marked as stolen? Was it stolen in the past? Has it been recovered?</p>
          </div>
          <div className="flex flex-col w-full my-[20px]">
            <div className="flex gap-4 w-full rounded-lg bg-green-200 p-4">
              <p className="p-1 bg-green-500 w-fit h-fit rounded-full"><FaCheck /></p>
              <div>
                <h5 className="text-base font-medium mb-2">No issues found</h5>
                <p className="text-sm">We didn't find any records that the vehicle was stolen.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
              {showTheft && (<h4 className="text-sm mb-7 font-medium">Here's what we checked:</h4>)}
              {showTheft && (
                <div className="grid w-full transition-all duration-300 ease-linear grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className={`flex border rounded-lg flex-col gap-3 p-4 border-slate-200`}>
                    <h6 className="text-xl p-2 rounded-full w-fit text-black bg-[#e9e9e9]"><GiNinjaMask /></h6>
                    <h5 className="text-base font-medium">Stolen in the past</h5>
                    <h5 className="border border-slate-200 p-1 w-fit text-xs rounded-lg">No records found</h5>
                    <h5 className="text-xs">Vehicle has been recovered</h5>
                  </div>
                  <div className={`flex border rounded-lg flex-col gap-3 p-4 border-slate-200`}>
                    <h6 className="text-xl p-2 rounded-full w-fit text-black bg-[#e9e9e9]"><GiNinjaMask /></h6>
                    <h5 className="text-base font-medium">Stolen in the past</h5>
                    <h5 className="border border-slate-200 p-1 w-fit text-xs rounded-lg">No records found</h5>
                    <h5 className="text-xs">Vehicle has been recovered</h5>
                  </div>
                  <div className={`flex border rounded-lg flex-col gap-3 p-4 border-slate-200`}>
                    <h6 className="text-xl p-2 rounded-full w-fit text-black bg-[#e9e9e9]"><GiNinjaMask /></h6>
                    <h5 className="text-base font-medium">Stolen in the past</h5>
                    <h5 className="border border-slate-200 p-1 w-fit text-xs rounded-lg">No records found</h5>
                    <h5 className="text-xs">Vehicle has been recovered</h5>
                  </div>
                </div>
              )}
            </div>
            <button onClick={toggleOpenTheft} className="expand-button rounded-full text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showTheft ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
          </div>
        </div>
        <div ref={sectionsRef.odometer} id="odometer" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Odometer</h3>
            <p className="text-sm">Are there signs of mileage rollbacks or discrepancies?</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex bg-orange-200 w-full px-3 py-3 rounded-lg items-start gap-3">
              <GoAlert className="font-bold text-lg" />
              <div>
                <h5 className="text-sm mb-2 font-bold">Beware</h5>
                <h6 className="text-sm w-full font-medium">This vehicle may have a fake mileage!</h6>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg mt-4 bg-[#e9e9e9] ">
              <h5 className="p-1 w-fit bg-blue-400 text-white text-lg h-fit rounded-full"><IoAlertCircleOutline /></h5>
              <div className="flex flex-col w-full px-3 items-start gap-3">
                <h5 className="text-sm font-bold">Note</h5>
                <ul className="flex flex-col gap-2 list-disc">
                  <li className="text-sm">Last known mileage: 155,470 km</li>
                  <li className="text-sm">Average mileage for similar models: 134,200 km</li>
                  <li className="text-sm">5 mileage records found</li>
                </ul>
              </div>
            </div>
            {showOdometer &&
              <motion.div
                className="bg-[#e9e9e9] mt-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img src="/Rollback_chart.png" className="object-cover" alt="Rollback chart" />
              </motion.div>
            }
            <button onClick={toggleOdometer} className="expand-button rounded-full mt-6 text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showOdometer ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
          </div>
        </div>
        <div ref={sectionsRef.legal} id="legal" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Legal Status</h3>
            <p className="text-sm">Has the vehicle passed technical inspection? Was it marked as write-off?</p>
          </div>
          <div className="flex w-full flex-col gap-3 p-3 rounded-lg mt-4">
            <div className="flex bg-[#e9e9e9] w-full px-3 py-3 rounded-lg items-start gap-3">
              <h5 className="p-1 w-fit bg-blue-400 text-white text-lg h-fit rounded-full"><IoAlertCircleOutline /></h5>
              <div className="flex flex-col w-full px-3 items-start gap-3">
                <h5 className="text-sm font-bold">Note</h5>
                <p className="text-sm">Vehicle inspection passed 2020-11</p>
              </div>
            </div>
            {showLegal &&
              <div className="grid w-full transition-all duration-300 ease-linear grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`flex border rounded-lg flex-col gap-3 p-4 border-slate-200`}>
                  <h6 className="text-xl p-2 rounded-full w-fit text-black bg-[#e9e9e9]"><IoCarSport /></h6>
                  <h5 className="text-base font-medium">Technical inspection</h5>
                  <h5 className="bg-green-200 flex items-center px-2 py-1 w-fit text-xs rounded-lg"><IoMdCheckmark className="text-base mr-3" />Passed</h5>
                  <h5 className="text-xs">Has successfully passed technical inspection</h5>
                </div>
                <div className={`flex border rounded-lg flex-col gap-3 p-4 border-slate-200`}>
                  <h6 className="text-xl p-2 rounded-full w-fit text-black bg-[#e9e9e9]"><MdOutlineRecycling /></h6>
                  <h5 className="text-base font-medium">Scrap</h5>
                  <h5 className="border border-slate-200 py-1 px-2 w-fit text-xs rounded-lg">No records found</h5>
                  <h5 className="text-xs">No record that vehicle was marked as scrapped</h5>
                </div>
              </div>
            }
            <button onClick={toggleLegal} className="expand-button rounded-full mt-6 text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showLegal ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
          </div>
        </div>
        <div ref={sectionsRef.logbook} id="logbook" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Logbook check</h3>
            <p className="text-sm">Does the vehicle have any registration issues?</p>
          </div>
          <div className="flex w-full flex-col mb-2 gap-3 p-3 rounded-lg mt-4">
            <div className="flex items-center gap-4 w-full rounded-lg bg-green-200 p-3">
              <p className="p-1 bg-green-500 w-fit h-fit rounded-full"><FaCheck /></p>
              <h5 className="text-sm font-medium">No issues found</h5>
            </div>
          </div>
        </div>
        <div ref={sectionsRef.damage} id="damage" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Damage</h3>
            <p className="text-sm">Has this vehicle been damaged in the past? What was the cost of the damages?</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex bg-orange-200 w-full px-3 py-3 rounded-lg items-start gap-3">
              <GoAlert className="font-bold text-lg" />
              <div>
                <h5 className="text-sm mb-2 font-bold">Beware</h5>
                <h6 className="text-sm w-full font-medium">This vehicle was damaged 2 times!</h6>
              </div>
            </div>
            <div className="flex bg-[#e9e9e9] rounded-lg w-full mt-5 p-3 items-start gap-3">
              <h5 className="p-1 w-fit bg-blue-400 text-white text-lg h-fit rounded-full"><IoAlertCircleOutline /></h5>
              <div>
                <h5 className="text-sm mb-3 font-bold">Note</h5>
                <p className="text-sm">Mild damages normally won't impact a vehicle's safety or leave structural issues</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-3 mt-4 ">
              <div className="flex bg-[#e9e9e9] w-full rounded-lg p-3 flex-col items-center">
                <h3 className="text-xl w-full text-start my-7 font-bold">Damage records</h3>
                <img src="/bmw_render.png" loading="lazy" className="max-h-[200px] mb-12" alt="" />
                {showDamage && (
                  <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-3">
                    {[0, 1].map((index) => (
                      <motion.div
                        key={index}
                        className={`flex border rounded-lg flex-col p-4 bg-white cursor-pointer transition-all duration-300 ${activeCard === index ? 'border-[#082854]' : 'border-black'
                          }`}
                        onClick={() => handleActiveCard(index)}
                        whileHover={{ borderColor: activeCard === index ? '#082854' : '#000' }}
                      >
                        <h6 className="text-xs py-1 border-b text-black">
                          {index === 0 ? '2015-07' : '2019-11'}
                        </h6>
                        <h5 className="text-xs py-1 px-2 w-fit mt-3 rounded bg-[#e9e9e9] font-medium">
                          Damage
                        </h5>
                        <h6 className="text-xs mt-3 text-gray-500">Estimated repair cost</h6>
                        <h5 className="text-base mb-3 font-bold">
                          {index === 0 ? 'Ksh50,000 - Ksh87,900' : 'Ksh126,970 - Ksh476,900'}
                        </h5>
                        <h5 className="text-xs text-gray-500">Possible Damage Cause</h5>
                        <h5 className="text-sm font-medium">Unknown</h5>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={toggleDamage} className="rounded-full expand-button mt-6 text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showDamage ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
            </div>
          </div>
        </div>
        {/* Specs & Eqipement */}
        <div ref={sectionsRef.specs} id="specs" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Specs & equipment</h3>
            <p className="text-sm">What specs and equipment are on record for this vehicle?</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex bg-[#e9e9e9] rounded-lg w-full mt-5 p-3 items-start gap-3">
              <h5 className="p-1 w-fit bg-blue-400 text-white text-lg h-fit rounded-full"><IoAlertCircleOutline /></h5>
              <div>
                <h5 className="text-sm mb-3 font-bold">Note</h5>
                <p className="text-sm">Check whether the specs and equipment of this vehicle match the facts given by the seller.</p>
              </div>
            </div>
            <div className="flex bg-[#e9e9e9] w-full mt-5 rounded-lg p-3 flex-col items-center">
              <h3 className="text-xl w-full text-start my-7 font-bold">Identification and technical specifications</h3>
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                <div className="flex w-full rounded-md items-start p-3 gap-2 shadow-md">
                  <p><GiMechanicGarage className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Make</h6>
                    <h5 className="text-[15px] font-medium">Mazda</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><FaCar className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Model</h6>
                    <h5 className="text-[15px] font-medium">Atenza</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><FaCar className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Body type</h6>
                    <h5 className="text-[15px] font-medium">Sedan</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><CiCalendar className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Manufacture</h6>
                    <h5 className="text-[15px] font-medium">2014</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><TbEngine className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Power displacement</h6>
                    <h5 className="text-[15px] font-medium">2.2L</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><FaGears className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Powertrain power</h6>
                    <h5 className="text-[15px] font-medium">121.4 kW (165 hp)</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><TbManualGearboxFilled className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Transmission type</h6>
                    <h5 className="text-[15px] font-medium">Automatic</h5>
                  </div>
                </div>
                <div className="flex items-start rounded-md p-3 gap-2 shadow">
                  <p><FaLocationDot className="text-xl" /></p>
                  <div>
                    <h6 className="text-[13px]">Plant location</h6>
                    <h5 className="text-[15px] font-medium">Japan</h5>
                  </div>
                </div>
              </div>
            </div>
            {showOptions &&
              <div className="flex flex-col bg-[#e9e9e9] rounded-lg mt-5 gap-4 p-4">
                <div>
                  <h3 className="text-xl font-bold">Equipment</h3>
                  <p className="text-sm text-gray-600">As received from the manufacturer</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <ul className="options">
                    <h3>Safety</h3>
                    <li>Driver Airbag</li>
                    <li>Anti-Lock Brakes</li>
                  </ul>
                  <ul className="options">
                    <h3>Comfort</h3>
                    <li>Power Steering</li>
                    <li>A/C:front</li>
                    <li>Remort Keyless</li>
                    <li>CD Player</li>
                    <li>Navigation System</li>
                  </ul>
                  <ul className="options">
                    <h3>Interior</h3>
                    <li>Power Windows</li>
                  </ul>
                  <ul className="options">
                    <h3>Exterior</h3>
                    <li>Alloy Wheels</li>
                  </ul>
                </div>
              </div>}
            <button onClick={toggleOptions} className="rounded-full expand-button mt-6 text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showOptions ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
          </div>
        </div>
        <div ref={sectionsRef.timeline} id="timeline" className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-8 gap-9 p-9 w-full md:w-[80vw] mx-auto">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold mb-8">Timeline</h3>
            <h4 className="text-base font-bold p-2 bg-green-200 rounded-sm">4 records found</h4>
            <p className="text-xs text-gray-600">The timeline of records for this vehicle</p>
          </div>
          <div className="flex w-full flex-col">
            <h5 className="text-base font-bold mb-4">Records</h5>
            <div className="flex flex-col gap-3 p-3">
              <div className="flex border border-[#e9e9e9] w-full rounded-lg p-3">
                <h6 className="text-xs min-w-[80px]">2016-04</h6>
                <span className="w-1 h-full bg-slate-200" />
                <div className="flex gap-4">
                  <h6 className="w-2 mx-3"><FiUsers className="text-xl" /></h6>
                  <div>
                    <h6 className="text-[15px] mb-3 font-bold">Was on sale</h6>
                    <p className="text-xs">This record was created because the vehicle was listed for sale on a certain marketplace.</p>
                  </div>
                </div>
              </div>
              <div className="flex border border-[#e9e9e9] w-full rounded-lg p-3">
                <h6 className="text-xs min-w-[80px]">2018-10</h6>
                <span className="w-1 h-full bg-slate-200" />
                <div className="flex gap-4">
                  <h6 className="w-2 mx-3"><FiUsers className="text-xl" /></h6>
                  <div>
                    <h6 className="text-[15px] mb-3 font-bold">Was on sale</h6>
                    <p className="text-xs">This record was created because the vehicle was listed for sale on a certain marketplace.</p>
                  </div>
                </div>
              </div>
              {showTimeline &&
                <div className="w-full">
                  <div className="flex border border-[#e9e9e9] w-full mb-3 rounded-lg p-3">
                    <h6 className="text-xs min-w-[80px]">2020-04</h6>
                    <div className="w-1 h-full bg-slate-400" />
                    <div className="flex gap-4">
                      <h6 className="w-2 mx-3"><FcInspection className="text-xl" /></h6>
                      <div>
                        <h6 className="text-[15px] mb-3 font-bold">Was inspected</h6>
                        <p className="text-xs">A technical inspection event has been recorded. Both successful and failed instances may be included.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border border-[#e9e9e9] w-full rounded-lg p-3">
                    <h6 className="text-xs min-w-[80px]">2022-12</h6>
                    <div className="w-1 h-full bg-slate-400" />
                    <div className="flex gap-4">
                      <h6 className="w-2 mx-3"><FaCarCrash className="text-xl" /></h6>
                      <div>
                        <h6 className="text-[15px] flex items-center gap-4 mb-3 font-bold">Damage detected <GoAlert className="text-xl" /></h6>
                        <p className="text-xs">We have indications that this vehicle was recognised as damaged in this particular country (or state). Please refer to the “Damage” section for details.</p>
                      </div>
                    </div>
                  </div>
                </div>

              }
              <button onClick={toggleTimeline} className="rounded-full expand-button mt-6 text-white bg-[#082854] font-medium py-2 text-xs w-full">{!showTimeline ? (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltDown className="mr-3 font-light" />Show all</p>) : (<p className="flex items-center gap-3 justify-center"><FaLongArrowAltUp /> Close</p>)}</button>
            </div>
          </div>
        </div>
      </div>      
      <div ref={sectionsRef.downloadSection} id="downloadSection" className="flex gap-4 py-[60px] items-center justify-center w-full">
        <button onClick={handlePrint} className="px-4 py-2 flex items-center text-white gap-3 rounded-full bg-[#082854] text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          <FiDownload className="" />Download report
        </button>
        <button className="px-4 py-2 flex items-center text-white gap-3 rounded-full bg-[#082854] text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          <CiShare1 className="" />Share
        </button>
      </div>
    </div>
  );
};


export default sampleReport;



const purpose = [
  {
    icon: <FaUser />,
    use: 'Personal Use',
    isFound: false,
    description: 'No evidence of as personal vehicle'
  },
  {
    icon: <GiMechanicGarage />,
    use: 'Rental',
    isFound: true,
    description: 'Rental vehicle'
  },
  {
    icon: <BsFillTaxiFrontFill />,
    use: 'Taxi',
    isFound: false,
    description: 'No evidence of being used as a taxi'
  },
  {
    icon: <FaVanShuttle />,
    use: 'Transport',
    isFound: false,
    description: 'No evidence of being used as a transport vehicle'
  },
  {
    icon: <GiPoliceOfficerHead />,
    use: 'Police',
    isFound: false,
    description: 'No evidence of being used by police'
  },
  {
    icon: <RiGovernmentLine />,
    use: 'Goverment Agency',
    isFound: false,
    description: 'No evidence of being by government institutions'
  },
  {
    icon: <IoSchoolOutline />,
    use: 'Driving School',
    isFound: false,
    description: 'No evidence of being by driving school'
  }

]


const cards = [
  {
    id: 1,
    href: '/assets/CarInfo/mazda_wreck3.jpg'
  },
  {
    id: 2,
    href: '/assets/CarInfo/mazda_wreck7.jpg'
  },
  {
    id: 3,
    href: '/assets/CarInfo/Mazda_wreck2.png'
  },
  {
    id: 4,
    href: '/assets/CarInfo/mazda_wreck6.jpeg'
  },
  {
    id: 5,
    href: '/assets/CarInfo/Mazda_Wreck.png'
  }
]

const sections = [
  {
    id: 'overview',
    title: 'Overview'
  },
  {
    id: 'photos',
    title: 'Photos'
  },
  {
    id: 'purpose',
    title: 'Purpose'
  },
  {
    id: 'theft',
    title: 'Theft'
  },
  {
    id: 'odometer',
    title: 'Odometer'
  },
  {
    id: 'legal',
    title: 'Legal Status'
  },
  {
    id: 'title',
    title: 'Title'
  },
  {
    id: 'damage',
    title: 'Damage'
  },
  {
    id: 'specs',
    title: 'Specs and equipment'
  },
  {
    id: 'timeline',
    title: 'Timeline'
  }
]