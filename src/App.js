import './App.css';
import logo from '../src/assets/images/logo.png'
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { useReactToPrint } from 'react-to-print';
import { useEffect, useRef, useState } from 'react';
import { days, engToBdNum, Invoice } from './components/Invoice';
import Clock from './components/Clock';


function App() {
  const [info, setInfo] = useState({
    name: '',
    service_type: '',
    address: '',
    word_no: '',
    delivery_date: '',
    fee: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });

  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    document.title = `${info ? info?.name + " " + "বিশা ইউনিয়ন ডিজিটাল সেন্টার ডেলিভারি স্লিপ সিস্টেম | ইউনুস আলী আকাশ" : "বিশা ইউনিয়ন ডিজিটাল সেন্টার ডেলিভারি স্লিপ সিস্টেম | ইউনুস আলী আকাশ"} `
  }, [info?.name])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(info));
    setIsSubmit(true);
  };


  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "আবেদনকারীর নাম দিতে হবে";
    }
    else if (values.name && values.name.length > 40) {
      errors.name = "40 টি ক্যারেক্টার এর বেশি দিতে পারবেন না";
    }
    if (!values.service_type) {
      errors.service_type = "সেবার ধরণ বাধ্যতামূলক";
    } else if (values.service_type && values.service_type.length > 30) {
      errors.service_type = "30 টি ক্যারেক্টার এর বেশি দিতে পারবেন না";
    }
    if (!values.address) {
      errors.address = "আবেদনকারীর ঠিকানা দিতে হবে";
    } else if (values.address && values.address.length < 3) {
      errors.address = "এত ছোট ঠিকানা গ্রহণযোগ্য নয়";
    } else if (values.address && values.address.length > 20) {
      errors.address = "ঠিকানা অতিরিক্ত বড় হয়ে গেছে";
    }
    if (!values.word_no) {
      errors.word_no = "ওয়ার্ড নাম্বার দিতে হবে";
    } else if (values.word_no && values.word_no.length > 1) {
      errors.word_no = "ওয়ার্ড নাম্বার সঠিক নয়";
    }
    if (!values.delivery_date) {
      errors.delivery_date = "ডেলিভারি তারিখ দিতে হবে";
    }
    if (!values.fee) {
      errors.fee = "সার্ভিস ফি এর পরিমান দিতে হবে";
    } else if (values.fee && values.fee.length < 2) {
      errors.fee = "ডেলিভারি ফি এর পরিমাণ গ্রহণযোগ্য নয়";
    } else if (values.fee && values.fee.length > 4) {
      errors.fee = "অত্যাধিক ফি এর পরিমান গ্রহণযোগ্য নয়";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handlePrint()
      setInfo({
        name: '',
        service_type: '',
        address: '',
        word_no: '',
        delivery_date: '',
        fee: ''
      })
    }
  }, [formErrors])


  return (
    <section>
      <div className='header'>
        <div className="container">
          <div className="header_information">
            <div className="text_information">
              <img src={logo} alt="up_logo" />
              <h1>৫নং বিশা ইউনিয়ন পরিষদ</h1>
              <h5>সমস পাড়া, বিশা, আত্রাই, নওগাঁ।</h5>
              <h3>ইউনিয়ন ডিজিটাল সেন্টার</h3>
              <h4>ডেলিভারি স্লিপ সিস্টেম</h4>
              <h5>উদ্যোক্তা : নয়ন প্রামাণিক</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Form section */}
      <div className="container">
        <form action="" className='main_from' onSubmit={handleSubmit}>
          <h3>ডেলিভারি স্লিপ</h3>
          <div className="first_row">
            <div className="applicant_name input_field">
              <label htmlFor="name">আবেদনকারীর নাম :</label>
              <input type="text" name="name" id="name"
                onChange={handleChange}
                value={info.name} />
              {formErrors && formErrors.name ? (
                <div className="error_label">{formErrors.name}</div>
              ) : null}
            </div>
            <div className="service_type input_field">
              <label htmlFor="service_type">সেবার ধরণ :</label>
              <input type="text" name="service_type" id="service_type"
                onChange={handleChange}
                value={info.service_type} />
              {formErrors && formErrors.service_type ? (
                <div className="error_label">{formErrors.service_type}</div>
              ) : null}
            </div>
          </div>
          <div className="second_row">
            <div className="applicant_address input_field">
              <label htmlFor="address">ঠিকানা (গ্রাম) :</label>
              <input type="text" name="address" id="address"
                onChange={handleChange}
                value={info.address} />
              {formErrors && formErrors.address ? (
                <div className="error_label">{formErrors.address}</div>
              ) : null}
            </div>
            <div className="word_no input_field">
              <label htmlFor="word_no">ওয়ার্ড নং :</label>
              <input type="number" name="word_no" id="word_no" className='input-number'
                onChange={handleChange}
                value={info.word_no} />
              {formErrors && formErrors.word_no ? (
                <div className="error_label">{formErrors.word_no}</div>
              ) : null}
            </div>
          </div>
          <div className="third_row">
            <div className="application_delivery_date input_field">
              <label htmlFor="delivery_date">সম্ভাব্য ডেলিভারি তারিখ :</label>
              <input type="date" name="delivery_date" id="delivery_date"
                onChange={handleChange}
                value={info.delivery_date} min={new Date().toISOString().split('T')[0]} />
              {formErrors && formErrors.delivery_date ? (
                <div className="error_label">{formErrors.delivery_date}</div>
              ) : null}
            </div>
            <div className="service_fee input_field">
              <label htmlFor="fee">সার্ভিস ফি (টাকা)</label>
              <input type="number" name="fee" id="fee" className='input-number'
                onChange={handleChange}
                value={info.fee} />
              {formErrors && formErrors.fee ? (
                <div className="error_label">{formErrors.fee}</div>
              ) : null}
            </div>
          </div>
          <div className="action_button">
            <input type="submit" style={{ backgroundColor: "green" }} value="জেনারেট ও প্রিন্ট স্লিপ" />
          </div>
        </form>
        <div className="credit">
          <p>সার্বিক স্বতাধিকারী ইউপি উদ্যোক্তা "নয়ন প্রামাণিক"</p>
          <p>সিস্টেম ডেভলপার :
            <a href="https://www.facebook.com/md.younus.ali.akash/" target="_blank" rel="noopener noreferrer">
              ইউনুস আলী আকাশ
            </a>
            <p className='clock'>
              <span>{engToBdNum(new Date().toLocaleDateString("en-GB"))}</span> {" | "} 
              <span>{days[new Date().getDay()]}</span>
            </p>
          </p>
        </div>
      </div>
      <div className="container" style={{ display: "none", justifyContent: "center" }}>

        {
          info && <Invoice ref={componentRef} info={info} />
        }
      </div>
    </section>
  );
}

export default App;
