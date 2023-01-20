import React from 'react';
import logo from "../assets/images/logo.png"

let banglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    "AM": "সকাল",
    "PM": "বিকাল",
    "Sat": "শনিবার",
    "Sun": "রবিবার",
    "Mon": "সোমবার",
    "Tue": "মঙ্গলবার",
    "Wed": "বুধবার",
    "Thu": " বৃহস্পতিবার",
    "Fri": "শুক্রবার"
};

const days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"]

const engToBdNum = (str) => {
    for (var x in banglaNumber) {
        str = str.replace(new RegExp(x, "g"), banglaNumber[x]);
    }
    return str;
};

export const Invoice = React.forwardRef((props, ref) => {
    const { info } = props
    return (
        <div ref={ref} className="pfd">
            {
                info ?

                    <div className="pdf_container">
                        <div className="pdf_header">
                            {/* <img src={logo} alt="up_logo" /> */}
                            <h1>৫নং বিশা ইউনিয়ন পরিষদ</h1>
                            <h5>সমস পাড়া, বিশা, আত্রাই, নওগাঁ।</h5>
                            <h3>ইউনিয়ন ডিজিটাল সেন্টার</h3>
                            <h4>ডেলিভারি স্লিপ</h4>
                            <h4>উদ্যোক্তা : নয়ন প্রামাণিক</h4>
                            <h3>হটলাইন : ০১৭৫০৩৩৪৫৩৮</h3>
                            <h3 style={{ marginTop: "8px" }}>সেবার ধরণ : {info.service_type}</h3>
                        </div>
                        <div className="user_information">
                            <div className="row one">
                                <div className="col">
                                    <h4>আবেদন জমার তারিখ:</h4>
                                    <p>{engToBdNum(new Date().toLocaleDateString("en-GB"))} , ( <span>{engToBdNum(new Date().toLocaleTimeString())}) , {days[new Date().getDay()]}</span> </p>
                                </div>
                                <div className="col_2">
                                    <h4>ওয়ার্ড নং :</h4>
                                    <p>{engToBdNum((info.word_no).toString())}</p>
                                </div>
                            </div>
                            <div className="row two">
                                <div className="user_address col">
                                    <h4>ঠিকানা (গ্রাম) :</h4>
                                    <p>{info.address}</p>
                                </div>
                                <div className="col_2">
                                    <h4>সার্ভিস ফি :</h4>
                                    <p>{engToBdNum((info.fee).toString())} টাকা</p>
                                </div>
                            </div>
                            <div className="row three">
                                <div className="user_name col">
                                    <h4>আবেদনকারীর নাম :</h4>
                                    <p>{info.name}</p>
                                </div>
                                <div className="col_2">
                                    <h4>সম্ভাব্য ডেলিভারি তারিখ :</h4>
                                    <p style={{ fontWeight: "800" }}>{engToBdNum(new Date(info.delivery_date).toLocaleDateString('en-GB'))}, <span>{days[new Date(info.delivery_date).getDay()]}</span></p>

                                </div>
                            </div>
                            <div st className="row lawyerd">
                                <div className="enterpunaur">
                                    <h4>উদ্যোক্তার সিল এবং স্বাক্ষর</h4>
                                </div>
                                <div className="system_developer">
                                    <p>System Dev : <br/> Younus Ali Akash</p>
                                </div>
                            </div>
                        </div>
                        <p className='desclimar'>বিশেষ দ্রষ্টব্য : <i><span>ডেলিভারির আগে হটলাইনে ফোন দিয়ে নিশ্চিত হয়ে নিন আপনার কাজ সম্পন্ন হয়েছে কিনা</span></i></p>
                    </div>
                    :
                    <div className="">
                        Contact to Younus Ali Akash
                    </div>
            }
        </div>
    );
});