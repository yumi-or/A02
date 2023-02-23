import React from "react";
import {useState} from "react";
import Fade from "react-reveal/Fade";
// import './App.css';
import details from "./details.json"
import schoolDatabase from "./school_database.json"

const mark = (chi, eng, math, ls) => {
  try {
    return chi * 0.3 + eng * 0.3 + math * 0.2 + ls * 0.2;
  } catch (e) {
    return 0
  }
}
const marks_to_band = (_mark) => {
  if (_mark >= 93) {
    return "1A";
  } else if (_mark >= 88) {
    return "1B";
  } else if (_mark >= 80) {
    return "1C";
  } else if (_mark >= 75) {
    return "2A";
  } else if (_mark >= 70) {
    return "2B";
  } else if (_mark >= 65) {
    return "2C";
  } else if (_mark >= 50) {
    return "3A";
  } else if (_mark >= 30) {
    return "3B";
  } else {
    return "3C";
  }
}

const AI = () => {

  const [chi, setChi] = useState(0)
  const [eng, setEng] = useState(0)
  const [math, setMath] = useState(0)
  const [ls, setLs] = useState(0)
  const [gender, setGender] = useState('Co-ed')
  const [district, setDistrict] = useState('all_districts')

  const [schoolDetail,setSchoolDetail] = useState({"school_name":""})
  const [loading,setLoading] = useState(false)

  const band = marks_to_band(mark(chi, eng, math, ls));

  const switchSchoolDetail = (schoolId) => {
    setLoading(true);
    // For Local database
    const schoolDetail_ = schoolDatabase[schoolId]
    setSchoolDetail(schoolDetail_);
    setLoading(false);
  }

  const school_table = details.school_list.filter(function(school) {
    if (school.school_band === band) {
      if (gender === "Co-ed" && district === "all_districts") {
        return true;
      }
      else if (gender === "Co-ed" && district === school.district) {
        return true
      }
      else if (gender === school.student_gender && district === 'all_districts') {
        return true
      }
      else if (gender === school.student_gender && district === school.district) {
        return true
      }
    }
  })
  return (
    <section id="ai" className="service-area section-gap primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              {/*<span className="title-tag">Our Services</span>*/}
              <h2>
                AI分析學校
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Fade left>
            <div
              className="col-md-8 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-20">
                  </div>
                  <div className="col-xl-10">
                    <div className="service-desc">
                      <h4>AI分析學校</h4>
                      <p>
                        除了可以幫助大家以最簡單的方法選擇到合適自己的學校外
                        還可以利用此功能了解到不同學校
                      </p>
                      <p>
                        請輸入中文分數 : <input type = "number" min="0" max="100" value={chi} onChange ={(mark_) => setChi(mark_.target.value)} />
                      </p>
                      <p>
                        請輸入英文分數 : <input type = "number" min="0" max="100" value={eng} onChange ={(mark_) => setEng(mark_.target.value)} />
                      </p>
                      <p>
                        請輸入數學分數 : <input type = "number" min="0" max="100" value={math} onChange ={(mark_) => setMath(mark_.target.value)} />
                      </p>
                      <p>
                        請輸入常識教育分數 : <input type = "number" min="0" max="100" value={ls} onChange ={(mark_) => setLs(mark_.target.value)} />
                      </p>
                      <p>
                        請選擇性別 :
                        <select onChange ={(gender_) => setGender(gender_.target.value)}>
                          {details.genders.map((gender) => (
                              // eslint-disable-next-line react/jsx-key
                              <option value={gender.value}>{gender.label}</option>
                          ))}
                        </select>
                        <br/>
                        請選擇地區 :
                        <select onChange ={(district_) => setDistrict(district_.target.value)}>
                          {details.districts.map((district) => (
                              // eslint-disable-next-line react/jsx-key
                              <option value={district.value}>{district.label}</option>
                          ))}
                        </select>
                      </p>
                      <p>
                        中文分數: {chi}
                      </p>
                      <p>
                        英文分數: {eng}
                      </p>
                      <p>
                        數學分數: {math}
                      </p>
                      <p>
                        常識教育分數: {ls}
                      </p>
                      <p>
                        學校組別: {band}
                      </p>

                      <h1>
                        了解更多學校資料 :
                        <select onChange ={(schoolId) => switchSchoolDetail(schoolId.target.value)}>
                          {school_table.map((school) => (
                              // eslint-disable-next-line react/jsx-key
                              <option value={school.tel}>{school.school_name_chi}</option>
                          ))}
                        </select>
                      </h1>
                      {
                          loading &&
                          <p>Loading...</p>
                      }
                      {
                          schoolDetail.school_name !== "" &&
                          <table className="styled-table">
                            <tbody>
                            <tr>
                              <th>學校中文名稱</th>
                              <td>{schoolDetail.school_name_chi}</td>
                            </tr>
                            <tr>
                              <th>學校英文名稱</th>
                              <td>{schoolDetail.school_name}</td>
                            </tr>
                            <tr>
                              <th>學校組別</th>
                              <td>{schoolDetail.school_band}</td>
                            </tr>
                            <tr>
                              <th>學生性別</th>
                              <td>{schoolDetail.student_gender}</td>
                            </tr>
                            <tr>
                              <th>學校種類</th>
                              <td>{schoolDetail.school_type}</td>
                            </tr>
                            <tr>
                              <th>地區</th>
                              <td>{schoolDetail.district}</td>
                            </tr>
                            <tr>
                              <th>地址</th>
                              <td>{schoolDetail.address}</td>
                            </tr>
                            <tr>
                              <th>電話</th>
                              <td>{schoolDetail.tel}</td>
                            </tr>
                            <tr>
                              <th>電子郵件</th>
                              <td>{schoolDetail.email}</td>
                            </tr>
                            <tr>
                              <th>網站</th>
                              <td>{schoolDetail.website}</td>
                            </tr>
                            <tr>
                              <th>宗教</th>
                              <td>{schoolDetail.religion}</td>
                            </tr>
                            </tbody>
                          </table>
                      }
                      {/*<Link href="/service">*/}
                      {/*  <a className="service-link">了解更多</a>*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>


        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              如果您有任何疑問，請隨時與我們聯繫。
            </p>
            {/*<Link href="">*/}
            {/*  <a*/}
            {/*    onClick={(e) => {*/}
            {/*      e.preventDefault();*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <i className="fal fa-ticket" /> Generate A Ticket*/}
            {/*  </a>*/}
            {/*</Link>*/}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AI;
