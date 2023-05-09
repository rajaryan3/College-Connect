import React from 'react';

const Links = ({linkUser, setLinkUser, links, setLinks}) => {
    // console.log(`LinkUser:${linkUser}`);
  const handleClick = () => {
    setLinkUser({
      "first_name": "",
      "last_name": "",
      "branch": "",
      "current_year": "",
      "degree": "",
      "photo": "",
      "mail": "",
      "professional_arr": { "github": "", "youtube": "", "linkedIn": "" },
    });
    setLinks(!links)
  } 
  return (
    <div>
      <div>

        <button onClick={handleClick} type="button" class="btn btn-light" style={{marginTop:"20px"}}>
          Back
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img src={linkUser.photo}
            alt="profilepic"
            width="300px"
            height="200px"
            style={{ margin: "0px 100px" }}
          />
        </div>
        <div>
          <h1>
            {linkUser.first_name} {linkUser.last_name}
            {/* {linkUser.branch},{" "}
            {linkUser.current_year}, {linkUser.degree}, {linkUser.mail} */}
          </h1>
          <h2>
            {linkUser.current_year} {linkUser.branch} {linkUser.degree}
          </h2>
          <h5>Mail : {linkUser.mail}</h5>
          <div style={{ height: "25px" }}></div>
          <p>Description : {linkUser.my_description}</p>
          <div style={{ height: "25px" }}></div>
          <table>
            {linkUser.professional_arr && linkUser.professional_arr.github && (
              <tr>
                <td style={{ width: "100px" }}>
                  <strong>GitHub</strong>
                </td>
                <td>
                  <h5>
                    <a href={linkUser.professional_arr.github}>
                      {linkUser.professional_arr.github}
                    </a>
                  </h5>
                </td>
              </tr>
            )}

            {linkUser.professional_arr && linkUser.professional_arr.youtube && (
              <tr>
                <td>
                  <strong>YouTube</strong>
                </td>
                <td>
                  <h5>
                    <a href={linkUser.professional_arr.youtube}>
                      {linkUser.professional_arr.youtube}
                    </a>
                  </h5>
                </td>
              </tr>
            )}

            {linkUser.professional_arr &&
              linkUser.professional_arr.linkedIn && (
                <tr>
                  <td>
                    <strong>LinkedIn</strong>
                  </td>
                  <td>
                    <h5>
                      <a href={linkUser.professional_arr.linkedIn}>
                        {linkUser.professional_arr.linkedIn}
                      </a>
                    </h5>
                  </td>
                </tr>
              )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Links;
