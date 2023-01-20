import './App.css';
import logo from '../src/assets/images/logo.png'
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { useReactToPrint } from 'react-to-print';
import { useEffect, useRef, useState } from 'react';
import { Invoice } from './components/Invoice';


function App() {
  const [info, setInfo] = useState(null)

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    document.title = `${info ? info?.name + "বিশা ইউনিয়ন ডিজিটাল সেন্টার ডেলিভারি স্লিপ সিস্টেম | ইউনুস আলী আকাশ" : "বিশা ইউনিয়ন ডিজিটাল সেন্টার ডেলিভারি স্লিপ সিস্টেম | ইউনুস আলী আকাশ"} `
  }, [info?.name])

  const formik = useFormik({
    initialValues: {
      name: '',
      service_type: '',
      address: '',
      word_no: '',
      delivery_date: '',
      fee: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("আবেদনকারীর নাম দিতে হবে"),
      service_type: Yup.string()
        .required("সেবার ধরণ বাধ্যতামূলক"),
      address: Yup.string()
        .required("আবেদনকারীর ঠিকানা দিতে হবে"),
      word_no: Yup.number()
        .required("ওয়ার্ড নাম্বার দিতে হবে"),
      delivery_date: Yup.string()
        .required("ডেলিভারি তারিখ দিতে হবে"),
      fee: Yup.number()
        .required("সার্ভিস ফি এর পরিমান দিতে হবে"),

    }),
    onSubmit: (values, { resetForm }) => {
      setInfo(values)
      handlePrint()
      // resetForm()
    }
  })


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
        <form action="" className='main_from' onSubmit={formik.handleSubmit}>
          <h3>ডেলিভারি স্লিপ</h3>
          <div className="first_row">
            <div className="applicant_name input_field">
              <label htmlFor="name">আবেদনকারীর নাম :</label>
              <input type="text" name="name" id="name" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name} />
              {formik.touched.name && formik.errors.name ? (
                <div className="error_label">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="service_type input_field">
              <label htmlFor="service_type">সেবার ধরণ :</label>
              <input type="text" name="service_type" id="service_type" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.service_type} />
              {formik.touched.service_type && formik.errors.service_type ? (
                <div className="error_label">{formik.errors.service_type}</div>
              ) : null}
            </div>
          </div>
          <div className="second_row">
            <div className="applicant_address input_field">
              <label htmlFor="address">ঠিকানা (গ্রাম) :</label>
              <input type="text" name="address" id="address" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address} />
              {formik.touched.address && formik.errors.address ? (
                <div className="error_label">{formik.errors.address}</div>
              ) : null}
            </div>
            <div className="word_no input_field">
              <label htmlFor="word_no">ওয়ার্ড নং :</label>
              <input type="number" name="word_no" id="word_no" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.word_no} />
              {formik.touched.word_no && formik.errors.word_no ? (
                <div className="error_label">{formik.errors.word_no}</div>
              ) : null}
            </div>
          </div>
          <div className="third_row">
            <div className="application_delivery_date input_field">
              <label htmlFor="delivery_date">সম্ভাব্য ডেলিভারি তারিখ :</label>
              <input type="date" name="delivery_date" id="delivery_date" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.delivery_date} />
              {formik.touched.delivery_date && formik.errors.delivery_date ? (
                <div className="error_label">{formik.errors.delivery_date}</div>
              ) : null}
            </div>
            <div className="service_fee input_field">
              <label htmlFor="fee">সার্ভিস ফি (টাকা)</label>
              <input type="number" name="fee" id="fee" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fee} />
              {formik.touched.fee && formik.errors.fee ? (
                <div className="error_label">{formik.errors.fee}</div>
              ) : null}
            </div>
          </div>
          <div className="action_button">
            <input type="submit" style={{ backgroundColor: `${!info ? "green" : "red"}` }} value={`${info ? "প্রিন্ট স্লিপ" : "জেনারেট স্লিপ"}`} />
          </div>
        </form>
        <div className="credit">
          <p>সার্বিক স্বতাধিকারী ইউপি উদ্যোক্তা "নয়ন প্রামাণিক"</p>
          <p>সিস্টেম ডেভলপার :
            <a href="https://www.facebook.com/md.younus.ali.akash/" target="_blank" rel="noopener noreferrer">
              ইউনুস আলী আকাশ
            </a>
          </p>
        </div>
      </div>
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>

        {
          info && <Invoice ref={componentRef} info={info} />
        }
      </div>
    </section>
  );
}

export default App;
